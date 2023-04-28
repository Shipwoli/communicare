class DonationsController < ApplicationController
  before_action :authenticate_user!

  def create
    @donation = current_user.donations.build(donation_params)

    if @donation.save
      render json: { status: :success, donation: @donation }
    else
      render json: { status: :error, message: @donation.errors.full_messages.join(', ') }
    end
  end

  private

  def donation_params
    params.require(:donation).permit(:amount, :area_id)
  end
end
