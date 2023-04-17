class Area < ApplicationRecord
  belongs_to :communicable_disease
  has_many :diseases
end
