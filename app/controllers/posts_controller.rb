class PostsController < ApplicationController
    def create
        post = Post.new(post_params)
        render json: PostSerializer.new(post), status: :created
        # else 
        #     render json: {error: post.errors.full_messages.to_sentence, status: :unprocessable_entity}
        # end
    end

    private

    def post_params 
        params.require(:post).permit(:content, :platform, :status, :link)
    end
end
