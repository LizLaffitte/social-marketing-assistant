class UsersController < ApplicationController
    wrap_parameters :user, include: [:username, :password, :email]
    before_action :find_user, only: [:show]

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: UserSerializer.new(user)
        else 
            render json: {error: user.errors.full_messages.to_sentence, status: :unprocessable_entity, message: "User invalid."}
        end

    end

    def show
        puts @user
        render json: UserSerializer.new(@user)
    end
    

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

    def find_user
        @user = User.find_by_id(params[:id])
        puts @user
    end
end
