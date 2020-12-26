require 'rails_helper'

RSpec.describe "Users", type: :request do
    describe "POST users#create" do
    it "creates a new user with valid attributes" do
      user_params = {
        user: {
            username: 'TaterTot',
            email: 'tatertot@aol.com',
            password: 'potatoes'
        }
      }
      post '/signup', :params => user_params.to_json, :headers => { "Content-Type": "application/json" }
        json = JSON.parse(response.body)["data"]["attributes"]
        expect(json).to include("email")
    end

  it "renders an error with invalid attributes" do
    user_params = {
      user: {
          username: 'TaterTot',
          email: 'tatertot@aol.com'
      }
    }
    post '/signup', :params => user_params.to_json, :headers => { "Content-Type": "application/json" }
      json = JSON.parse(response.body)
      expect(json["error"]).to include("Password can't be blank")
  end
end


end

