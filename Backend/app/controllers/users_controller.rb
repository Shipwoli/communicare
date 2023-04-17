class UsersController < ApplicationController
    before_action :session_expired?, only: [:check_login_status]
  
    def register
      user = User.create(user_params)
      if user.valid?
        save_user(user.id)
        app_response(message: 'Registration was successful', status: :created, data: user)
      else
        app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
      end
    end
    def show
      token = request.headers['Authorization'].split(' ').last
      decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      user_id = decoded_token[0]['user_id']
      user = User.find(user_id)
      render json: user
    rescue JWT::DecodeError
      render json: { errors: ['Invalid token'] }, status: :unauthorized
    end
  
    def login
      user = User.find_by(email: user_params[:email])
      if user&.authenticate(user_params[:password])
        save_user(user.id)
        token = encode(user.id, user.email)
        app_response(message: 'Login was successful', status: :ok, data: {user: user, token: token})
      else
        app_response(message: 'Invalid email or password', status: :unauthorized)
      end
    end
  
    def logout
      remove_user
      app_response(message: 'Logout successful')
    end
  
    def check_login_status
      app_response(message: 'success', status: :ok)
    end
  
    private 
  
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :admin)
    end
  end
  