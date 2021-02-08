class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        !!session[:user_id]
    end
end
