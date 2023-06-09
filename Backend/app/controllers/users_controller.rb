class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
      user = User.all
      render json: user;
  end

  def create
      # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
      user = User.create!(user_params)
      render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def find_user
      User.find(params[:id])
  end

  def user_params
      params.permit(:First_name, :Last_name, :email, :password, :admin)
  end

  def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  

end