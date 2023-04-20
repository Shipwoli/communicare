class AddLocationToAreas < ActiveRecord::Migration[7.0]
  def change
    add_column :areas, :location, :string
  end
end
