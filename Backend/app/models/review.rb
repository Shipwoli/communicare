class Review < ApplicationRecord
  belongs_to :user_id
  belongs_to :area_id
end
