require 'pry'
require 'oauth'
class SocialController < ApplicationController
    def create
        ckey = ENV['KEY']
        csecret = ENV['SECRET']
        consumer = OAuth::Consumer.new(ckey,csecret,
            :site => 'https://api.twitter.com',
            :authorize_path => '/oauth/authenticate',
            :debug_output => true)
        callback_url = "http://127.0.0.1:3000/auth/twitter/callback"
        request_token = consumer.get_request_token(:oauth_callback => callback_url)
        token = request_token.token
        token_secret = request_token.secret
        confirmed = request_token.params["oauth_callback_confirmed"]
        if confirmed === "true"
            redirect_to "https://api.twitter.com/oauth/authorize?oauth_token=#{token}"
        else
            redirect_to "/"
        end
    end

    def index
        oauth_token = params["oauth_token"]
        oauth_verifier = params["oauth_verifier"]
        baseUrl = 'https://api.twitter.com/oauth/access_token'
        response = HTTParty.post(baseUrl + "?oauth_token=#{oauth_token}&oauth_verifier=#{oauth_verifier}" )
        @access_token = response.split("&")[0]
        @access_token.slice!("oauth_token=")
        @access_secret = response.split("&")[1]
        @access_secret.slice!("oauth_token_secret=")
        redirect_to "/"
    end

    def post_tweet
    end


    private


    
end
