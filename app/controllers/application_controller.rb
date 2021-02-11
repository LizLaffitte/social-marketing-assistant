class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        !!session[:user_id]
    end

    def log_in(user)
        session[:user_id] = user.id
        redirect_to "/"    
    end

    def req_access(token, verifier)
        oauth_token = params["oauth_token"]
        oauth_verifier = params["oauth_verifier"]
        baseUrl = 'https://api.twitter.com/oauth/access_token'
        response = HTTParty.post(baseUrl + "?oauth_token=#{oauth_token}&oauth_verifier=#{oauth_verifier}" )

        session[:access_token] = response.split("&")[0].split("=")[1]
        session[:access_secret] = response.split("&")[1].split("=")[1]
        session[:user_id] = response.split("&")[2].split("=")[1]
        session[:screename] = response.split("&")[3].split("=")[1]
    end

    def access_token
        session[:access_token]
    end

    def access_secret
        session[:access_secret]
    end

    def screename
        session[:screenname]
    end
end
