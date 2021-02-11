class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?, :log_in, :access_token, :access_secret, :screenname
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

    def access_token
        session[:access_token]
    end

    def access_secret
        session[:access_secret]
    end

    def screenname
        session[:screenname]
    end
end
