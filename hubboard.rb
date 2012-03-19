#!/usr/bin/env ruby

require 'rubygems'
require 'cgi'
require 'json'
require 'httparty'
require 'resin/app/app'

API_URL = 'https://api.github.com'
CONFIG_FILE = File.expand_path(File.dirname(__FILE__) + '/config/config.yml')
INPROGRESS_LABEL = 'in-progress'
COMMENT_FOOTER = "(*This message brought to you by [Hub board](http://hubboard.herokuapp.com/about)*)"

if Resin.development?
  MYSELF = 'http://localhost:4567'
else
  MYSELF = 'http://hubboard.herokuapp.com'
end

if File.exists? CONFIG_FILE
  $config = YAML::load(File.open(File.expand_path(File.dirname(__FILE__) + '/config/config.yml')))
else
  $config = {}
  $config['github'] = {'id' => ENV['GITHUB_OAUTH_ID'], 'secret' => ENV['GITHUB_OAUTH_SECRET']}
end

module Hubboard
  module Helpers
    def validate_token
      token = session[:access_token]
      if token.nil? or token.empty?
        halt 400
      end
      token
    end

    def call_github(token, method, url, body=nil)
      headers = {'Authorization' => "token #{token}"}
      method_map = {:post => Net::HTTP::Post,
                    :get => Net::HTTP::Get,
                    :delete => Net::HTTP::Delete}

      if body.instance_of?(Hash) || body.instance_of?(Array)
        body = JSON.dump(body)
      end

      if Resin.development?
        puts ">> Calling GitHub[#{method}] -> #{url}"
      end

      request = HTTParty::Request.new(method_map[method], url,
                            :headers => headers,
                            :body => body)
      request.perform
    end

    def parse_post_json
      raw = request.body.read
      data = JSON.parse(raw, {:symbolize_names => true})
      return {:raw => raw, :data => data}
    end

    def validate_project(data)
      if data[:project].nil? or data[:project].empty?
        halt 500
      end
    end
  end


  class Server < Resin::Server
    include Helpers
    set :sessions, true
    set :session_secret, 'the-secret-hubboard-project'

    get '/oauth' do
      unless params.has_key? 'code'
        halt 401, 'Failed to receive a valid OAuth code from GitHub'
      end

      response = HTTParty.post('https://github.com/login/oauth/access_token',
                    :query => {:client_id => $config['github']['id'],
                               :code => params['code'],
                               :client_secret => $config['github']['secret']})
      unless response.code == 200
        halt 418, 'We somehow got an invalid response from GitHub when trying to authenticate'
      end

      returned = CGI.parse(response.body)
      access_token = returned["access_token"]

      unless access_token
        halt 401, 'Failed to pull an access token :('
      end

      session[:access_token] = access_token.first
      redirect '/'
    end

    get '/' do
      token = session[:access_token]
      if token.nil? or token.empty?
        redirect "https://github.com/login/oauth/authorize?client_id=#{$config['github']['id']}&scope=repo&redirect_uri=#{MYSELF}/oauth"
      end
      haml :index, :locals => {:access_token => token}
    end

    post '/issues/create' do
      token = validate_token
      data = parse_post_json
      validate_project(data[:data])

      call_github(token, :post, API_URL + "/repos/#{data['project']}/issues", data[:raw])
      '{}'
    end

    post '/issues/:number/close' do |number|
      token = validate_token
      data = parse_post_json
      validate_project(data[:data])

      issue_url = API_URL + "/repos/#{data['project']}/issues/#{number}"

      call_github(token, :post, issue_url + '/comments', {:body => <<-END
This work is complete.

#{COMMENT_FOOTER}
END
      })
      call_github(token, :post, issue_url, {:state => 'closed'})
      '{}'
    end

    post '/issues/:number/label' do |number|
      token = validate_token
      data = parse_post_json
      validate_project(data[:data])
      project = data[:data][:project]

      # First make sure the label exists in this repo
      response = call_github(token, :get, API_URL + "/repos/#{project}/labels/#{INPROGRESS_LABEL}")
      unless response.code == 200
        # We couldn't find the label so let's make it!
        call_github(token, :post, API_URL + "/repos/#{project}/labels",
                    {:name => INPROGRESS_LABEL, :color => '02e10c'})
      end

      # Second, let's add the label to the issue
      issue_url = API_URL + "/repos/#{project}/issues/#{number}"
      response = call_github(token, :post, issue_url + '/labels', [INPROGRESS_LABEL])
      unless response.code == 200
        puts response.inspect
        halt 500
      end

      # Now that it's labelled appropriately, let's post a comment
      call_github(token, :post, issue_url + '/comments',
                  {:body => <<-END
Starting work on this now.

#{COMMENT_FOOTER}
END
      })
      '{}'
    end

    post '/issues/:number/revert' do |number|
      token = validate_token
      data = parse_post_json
      validate_project(data[:data])

      issue_url = API_URL + "/repos/#{data[:data][:project]}/issues/#{number}"
      response = call_github(token, :delete, issue_url + "/labels/#{INPROGRESS_LABEL}")
      unless response.code == 200
        halt 500
      end

      # Add a comment to let people know this is going back on the back-burner
      call_github(token, :post, issue_url + '/comments',
                  {:body => <<-END
Putting this issue back on the back-burner.

#{COMMENT_FOOTER}
END
      })

      '{}'
    end
  end
end

if $0 == __FILE__
  Hubboard::Server.run!
end
