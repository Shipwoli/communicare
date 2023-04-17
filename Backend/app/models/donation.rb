class Donation < ApplicationRecord
  belongs_to :user_id
  belongs_to :area_id
end
