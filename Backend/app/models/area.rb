class Area < ApplicationRecord
    belongs_to :disease
    has_many :reviews
    has_many :donations
end
