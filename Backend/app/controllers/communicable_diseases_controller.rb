class CommunicableDiseasesController < ApplicationController
    before_action :set_communicable_disease, only: [:show, :update, :destroy]
  
    # GET /communicable_diseases
    def index
      @communicable_diseases = CommunicableDisease.all
      render json: @communicable_diseases
    end
  
    # GET /communicable_diseases/1
    def show
      render json: @communicable_disease
    end
  
    # POST /communicable_diseases
    def create
      @communicable_disease = CommunicableDisease.new(comm_disease_params)
  
      if @communicable_disease.save
        render json: @communicable_disease, status: :created
      else
        render json: @communicable_disease.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /communicable_diseases/1
    def update
      if @communicable_disease.update(comm_disease_params)
        render json: @communicable_disease
      else
        render json: @communicable_disease.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /communicable_diseases/1
    def destroy
      @communicable_disease.destroy
      render json: { message: 'Communicable disease was successfully deleted' }
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_communicable_disease
      @communicable_disease = CommunicableDisease.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def comm_disease_params
      params.require(:communicable_disease).permit(:name, :description, :symptoms, :prevention_measures)
    end
  end
  