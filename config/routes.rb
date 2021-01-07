Rails.application.routes.draw do
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :users, only: [:show]
  resources :posts, only: [:create]
  
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
