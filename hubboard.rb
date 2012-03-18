#!/usr/bin/env ruby

require 'rubygems'
require 'cgi'
require 'json'
require 'httparty'
require 'resin/app/app'

if ENV['RACK_ENV'] != 'production'
  MYSELF = 'http://localhost:4567'
else
  MYSELF = 'http://hubboard.herokuapp.com'
end

API_URL = 'https://api.github.com'
CONFIG_FILE = File.expand_path(File.dirname(__FILE__) + '/config/config.yml')

if File.exists? CONFIG_FILE
  $config = YAML::load(File.open(File.expand_path(File.dirname(__FILE__) + '/config/config.yml')))
else
  $config = {}
  $config['github'] = {'id' => ENV['GITHUB_OAUTH_ID'], 'secret' => ENV['GITHUB_OAUTH_SECRET']}
end

module Hubboard
  class Server < Resin::Server
    set :sessions, true

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


    post '/repos/:user/:repo/issues/:number/labels' do |user, repo, number|
      token = session[:access_token]
      if token.nil? or token.empty?
        halt 400
      end
      data = request.body.read
      url = API_URL + "/repos/#{user}/#{repo}/issues/#{number}"
      response = HTTParty.post(url + '/labels', :headers => {'Authorization' => "token #{token}"},
                                    :body => JSON.dump([data]))

      unless response.code == 200
        halt 500
      end

      HTTParty.post(url + '/comments', :headers => {'Authorization' => "token #{token}"},
                                       :body => JSON.dump({:body => <<-END
Starting work on this now.

(*This message brought to you by [Hubboard](http://hubboard.herokuapp.com/about)*)
END
}))
      '{}'
    end
  end
end

if $0 == __FILE__
  Hubboard::Server.run!
end
