Rails.application.routes.draw do
  post '/signup', to: "users#create"
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
