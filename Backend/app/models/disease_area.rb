class DiseaseArea < ApplicationRecord
    belongs_to :communicable_disease
    belongs_to :area
    has_many: reviews
  
    validates :affected_count, presence: true, numericality: { only_integer: true }
end
