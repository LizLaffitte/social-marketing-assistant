require 'pry'
class SocialController < ApplicationController
    def create
        oauth_params = {
            'oauth_callback' =>  CGI.escape('http://127.0.0.1:3000/auth/twitter/callback'),
            'oauth_consumer_key' => ENV['KEY'],
            'oauth_nonce' => SecureRandom.hex, 
            'oauth_signature_method' => 'HMAC-SHA1',
            'oauth_version' => '1.0',
            'oauth_timestamp' => Time.now.to_i.to_s
        }
        baseUrl = 'https://api.twitter.com/oauth/request_token'
        sig_generator("POST", baseUrl, oauth_params)
        
        req_token = HTTParty.post(baseURL,
      :headers => { 
            'Content-Type' => 'application/json',
            'oauth_callback' =>  cb,
            'oauth_consumer_key' => ENV['KEY'],
            'oauth_nonce' => nonce
            'oauth_signature' => ,
            'oauth_signature_method' => sig_method,
            'oauth_version' => oauth_v
            }
      )
      render json: req_token.body
    end



    private


    
end
