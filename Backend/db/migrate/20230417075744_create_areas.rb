class CreateAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :areas do |t|
      t.string :name
      t.text :description
      t.decimal :latitude
      t.decimal :longitude
      t.references :communicable_disease, null: false, foreign_key: true

      t.timestamps
    end
  end
end
