require 'rails_helper'

RSpec.describe "Sessions", type: :request do
    # describe "POST sessions#create" do
    #     before(:example) do
    #         @user = User.create(username: 'TaterTot', email: 'tatertot@aol.com', password: 'potatoes')
    #     end
    #     it "logins in a user with valid attributes" do
    #         post '/login', :params => @user.to_json, :headers => { "Content-Type": "application/json" }
    #             json = JSON.parse(response.body)
    #             expect(json).to include(@user.username)
    #     end

    #     it "renders an error with invalid attributes" do
    #         user_params = {
    #         user: {
    #             username: 'TaterTot',
    #             email: 'tatertot@aol.com'
    #           }
    #         }
    #         post '/signup', :params => user_params.to_json, :headers => { "Content-Type": "application/json" }
    #         json = JSON.parse(response.body)
    #         expect(json["error"]).to include("Password can't be blank")
    # #     end
    # end
end
