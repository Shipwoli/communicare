class DonationsController < ApplicationController
    before_action :set_area, only: [:index, :create]
    before_action :set_donation, only: [:show, :update, :destroy]
  
    def index
      donations = Donation.all
      render json: donations
    end
  
    def show
      donations = Donation.all
      render json: donation
    end
  
    def create
      donation = @area.donations.new(donation_params)
  
      if donation.save
        render json: donation, status: :created
      else
        render json: donation.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @donation.update(donation_params)
        render json: @donation
      else
        render json: @donation.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @donation.destroy
      head :no_content
    end
  
    private
  
    def set_area
      @area = Area.find(params[:area_id])
    end
  
    def set_donation
      @donation = Donation.find(params[:id])
    end
  
    def donation_params
      params.require(:donation).permit(:amount, :user_id, :area_id)
    end
  end
  