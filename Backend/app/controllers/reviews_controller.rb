class ReviewsController < ApplicationController
  before_action :set_area, only: [:index, :create]

  # GET /areas/:area_id/reviews
  def index
    @reviews = @area.reviews
    render json: @reviews
  end

  # POST /areas/:area_id/reviews
  def create
    @review = @area.reviews.build(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: { message: 'failed', errors: @review.errors }, status: :unprocessable_entity
    end
  end

  private

  def set_area
    @area = Area.find(params[:area_id])
  end

  def review_params
    params.require(:review).permit(:comment, :user_id, :rating)
  end
end
