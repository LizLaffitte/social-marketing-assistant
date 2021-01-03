Rails.application.routes.draw do
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
