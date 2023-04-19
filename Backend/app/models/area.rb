class Area < ApplicationRecord
  has_many :communicable_diseases, through: :disease_areas
  has_many :disease_areas
  has_many :reviews, through: :through: :disease_areas
  has_many :donations

  validates :name, presence: true
  validates :location, presence: true
  validates :reported_cases, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
