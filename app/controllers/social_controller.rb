require 'pry'
require 'oauth'
class SocialController < ApplicationController
    def req_token
        ckey = ENV['KEY']
        csecret = ENV['SECRET']
        consumer = OAuth::Consumer.new(ckey,csecret,
            :site => 'https://api.twitter.com',
            :authorize_path => '/oauth/authenticate',
            :debug_output => false)
        callback_url = "http://127.0.0.1:3000/auth/twitter/callback"
        request_token = consumer.get_request_token(:oauth_callback => callback_url)
        token = request_token.token
        token_secret = request_token.secret
        confirmed = request_token.params["oauth_callback_confirmed"]
        if confirmed === "true"
            redirect_to "https://api.twitter.com/oauth/authorize?oauth_token=#{token}"
        else
            redirect_to "/login"
        end
    end

    def req_access
        oauth_token = params["oauth_token"]
        oauth_verifier = params["oauth_verifier"]
        baseUrl = 'https://api.twitter.com/oauth/access_token'
        response = HTTParty.post(baseUrl + "?oauth_token=#{oauth_token}&oauth_verifier=#{oauth_verifier}" )
        session[:access_token] = response.split("&")[0].split("=")[1]
        session[:access_secret] = response.split("&")[1].split("=")[1]
        session[:user_id] = response.split("&")[2].split("=")[1]
        session[:screenname] = response.split("&")[3].split("=")[1]
        response = get_user(screenname)
        session[:user] = response
        render json: response
        # redirect_to :controller => 'sessions', :action => 'create'
    end

    def get_user(username)
        baseUrl = 'https://api.twitter.com/1.1/users/show.json'
        header = {'authorization' => 'Bearer ' + ENV['BEARER']}
        response = HTTParty.get(baseUrl + "?screen_name=#{username}", :headers => header)
        return response
    end

    private

end
