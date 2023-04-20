class AddMostPrevalentToCommunicableDiseases < ActiveRecord::Migration[7.0]
  def change
    add_column :communicable_diseases, :most_prevalent, :boolean
  end
end
