class Area < ApplicationRecord
    belongs_to :communicable_disease
    has_many :reviews
    
    validates :name, presence: true, length: { maximum: 50 }
    validates :description, :latitude, :longitude, :communicable_disease_id, presence: true
    validates :latitude, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
  
end
