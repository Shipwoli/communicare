class CommunicableDisease < ApplicationRecord
    has_many :areas

    validates :name, presence: true, length: { maximum: 50 }
    validates :description, :symptoms, :prevention_measures, presence: true
end
