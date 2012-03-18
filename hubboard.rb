#!/usr/bin/env ruby

require 'rubygems'
require 'cgi'
require 'httparty'
require 'resin/app/app'


$config = YAML::load(File.open(File.expand_path(File.dirname(__FILE__) + '/config/config.yml')))

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
        redirect '/login'
      end

      puts "token: #{token}"
      haml :index, :locals => {:access_token => token}
    end
  end
end

if $0 == __FILE__
  Hubboard::Server.run!
end
