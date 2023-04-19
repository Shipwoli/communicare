class Review < ApplicationRecord
  belongs_to :user
  belongs_to :area
  belongs_to :communicable_disease

  validates :comment, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :user_id, :area_id, presence: true
  
end
