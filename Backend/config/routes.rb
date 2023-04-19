Rails.application.routes.draw do
  get 'communicable_diseases/no-test-framework'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # user
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"

  # post "/register", to: "users#create"
  # get "/me", to: "users#show"
  post '/users', to: 'users#register'
  post '/users/login', to: 'users#login'
  delete '/users/logout', to: 'users#logout'
  get '/user/login/check', to: 'users#check_login_status'
  # verify auth
  get '/verify', to: 'application#verify_auth'
  

     # Routes for communicable diseases
  # resources :communicable_diseases, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :areas, only: [:index, :show, :create, :update]
  resources :donations, only: [:index, :show, :create, :update]
  resources :communicable_diseases
end