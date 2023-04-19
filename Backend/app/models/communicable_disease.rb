class CommunicableDisease < ApplicationRecord
    has_many :areas
    scope :most_prevalent, -> { where(most_prevalent: true) }
    validates :name, presence: true, length: { maximum: 50 }
    validates :description, :symptoms, :prevention_measures, presence: true
end
