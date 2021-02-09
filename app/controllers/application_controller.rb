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
end
