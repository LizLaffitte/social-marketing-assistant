require 'pry'
class SessionsController < ApplicationController
    def create
        # binding.pry
        if params[:username]
            user = User.find_by(username: params[:username])
            if user && user.authenticate(params[:password])
                session[:user_id] = user.id
                render json: UserSerializer.new(user)
            elsif !user
                render json: {errors: "User doesn't exist"}
            else 
                render json: {errors: "Invalid credentials"}
            end
        else

        end
    end

    def destroy
        session.clear
        render json: {notice: "Successfully logged out"}
    end

    def index
    end
end
