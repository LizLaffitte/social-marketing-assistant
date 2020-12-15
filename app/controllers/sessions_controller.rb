class SessionsController < ApplicationController
    def index 

    end
    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            rendser json: user
        elsif !user
            render json: {errors: "User doesn't exist"}
        else 
            render json: {errors: "Invalid credentials"}
        end
    end
end
