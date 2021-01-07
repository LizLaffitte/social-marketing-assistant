class PostsController < ApplicationController
    def create
    end

    private

    def post_params 
        params.require(:post).permit(:content, :platform, :status, :link)
    end
end
