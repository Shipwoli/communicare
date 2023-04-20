class AddImageUrlToCommunicableDiseases < ActiveRecord::Migration[7.0]
  def change
    add_column :communicable_diseases, :image_url, :string
  end
end
