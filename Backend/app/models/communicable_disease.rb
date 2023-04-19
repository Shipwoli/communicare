class CommunicableDisease < ApplicationRecord
    has_many :disease_areas
    has_many :areas, through: :disease_areas
   

    validates :name, presence: true, length: { maximum: 50 }
    validates :description, :symptoms, :prevention_measures, presence: true
    validates :image_url, presence: true
end
