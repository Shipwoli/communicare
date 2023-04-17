class Review < ApplicationRecord
  belongs_to :user
  belongs_to :area
  belongs_to :communicable_disease
end
