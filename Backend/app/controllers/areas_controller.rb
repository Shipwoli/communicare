class AreasController < ApplicationController
    before_action :set_area, only: [:show, :update, :destroy]
  
    def index
      areas = Area.all
      render json: areas
    end
  
    def show
      render json: @area
    end
  
    def create
      area = Area.new(area_params)
  
      if area.save
        render json: area, status: :created
      else
        render json: area.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @area.update(area_params)
        render json: @area
      else
        render json: @area.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @area.destroy
      head :no_content
    end
  
    private
  
    def set_area
      @area = Area.find(params[:id])
    end
  
    def area_params
      params.require(:area).permit(:name, :location, :reported_cases, :disease_id)
    end
  end
  