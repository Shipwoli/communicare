Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :show, :update, :destroy, :index]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"

  resources :communicable_diseases
  resources :areas, only: [:create, :show, :update, :destroy, :index]
  resources :donations, only: [:index, :show, :create, :update]
  # get "/donations/:area_id" , to: "donations#index"
  resources :areas do
    resources :donations, only: [:create, :new]
  end
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
end
