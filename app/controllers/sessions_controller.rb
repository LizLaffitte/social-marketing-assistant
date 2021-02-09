require 'pry'

class SessionsController < ApplicationController
    include SessionsHelper
    def create
        if params[:oauth_token] && params[:oauth_verifier]
            oauth_token = params["oauth_token"]
            oauth_verifier = params["oauth_verifier"]
            baseUrl = 'https://api.twitter.com/oauth/access_token'
            response = HTTParty.post(baseUrl + "?oauth_token=#{oauth_token}&oauth_verifier=#{oauth_verifier}" )
            @access_token = response.split("&")[0].split("=")[1]
            @access_secret = response.split("&")[1].split("=")[1]
            @user_id = response.split("&")[2].split("=")[1]
            @user_sn = response.split("&")[3].split("=")[1]
            user = User.find_by(username: @user_sn)
            if user
                session[:user_id] = user.id
                render json: UserSerializer.new(user)
            else
                new_user_info = get_user(@user_sn)
                # new_user = User.new(username: @user_sn, password: SecureRandom.hex, uid: @user_id, image: auth['info']['image'] )
                #   if @user.save
                #     log_in(@user)
                #   else
                #     render :new
                #   end
                render json: new_user_info

            end
        elsif params[:username]
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
            redirect_to "/login"
        end
    end

    def destroy
        session.clear
        render json: {notice: "Successfully logged out"}
    end


end
