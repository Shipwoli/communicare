class Review < ApplicationRecord
    belongs_to :user
    belongs_to :area

    validates :comment, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :user_id, :area_id, presence: true
end
