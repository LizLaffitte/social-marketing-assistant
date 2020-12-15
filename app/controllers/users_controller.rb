class UsersController < ApplicationController
    wrap_parameters :user, include: [:username, :password, :email]

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: user.errors.full_messages.to_sentence, status: :unprocessable_entity}
        end

    end
end
