class Donation < ApplicationRecord
    belongs_to :user
    belongs_to :area

    validates :amount, presence: true, numericality: { greater_than: 0 }
    validates :user_id, :area_id, presence: true
end
