class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    # skip_before_action :verify_authenticity_token, only: [:login]
  
    def index
      @users = User.all
      render json: @users
    end
  
    def show
        @user = User.find_by(id: session[:user_id])
      render json: @user
    end
  
    def create
      @user = User.new(user_params)
  
      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user.destroy
    end
  
    def login
      @user = User.find_by(email: params[:email])
  
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        render json: { message: 'Logged in successfully' }, status: :ok
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def logout
      session[:user_id] = nil
      render json: { message: 'Logged out successfully' }, status: :ok
    end
  
    private
  
    def set_user
      @user = User.find(params[:id])
    end

    def find_user
        User.find(params[:id])
    end

  
    def user_params
      params.require(:user).permit(:First_name, :Last_name, :email, :password, :password_confirmation, :admin)
    end
  end
  