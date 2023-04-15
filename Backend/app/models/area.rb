class Area < ApplicationRecord
    belongs_to :disease
    has_many :reviews
    has_many :donations

    validates :name, presence: true
    validates :location, presence: true
    validates :reported_cases, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
