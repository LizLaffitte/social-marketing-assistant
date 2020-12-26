require 'rails_helper'

RSpec.describe "Sessions", type: :request do
    # describe "POST sessions#create" do
    #     it "logins in a user with valid attributes" do
    #         user_params = {
    #             user: {
    #                 username: 'TaterTot',
    #                 email: 'tatertot@aol.com',
    #                 password: 'potatoes'
    #             }
    #         }
    #         post '/login', :params => user_params.to_json, :headers => { "Content-Type": "application/json" }
    #             json = JSON.parse(response.body)["data"]["attributes"]
    #             expect(json).to include("email")
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
    #     end
    # end
end
