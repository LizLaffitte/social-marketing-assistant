class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            render json: UserSerializer.new(user)
        elsif !user
            render json: {errors: "User doesn't exist"}
        else 
            render json: {errors: "Invalid credentials"}
        end
    end

    def destroy
        session.clear
        render json: {notice: "Successfully logged out"}
    end

    def index
    end
    
end
