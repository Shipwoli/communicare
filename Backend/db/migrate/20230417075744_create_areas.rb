class CreateAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :areas do |t|
      t.string :name
      t.string :location
      t.integer :reported_cases, default: 0
      t.st_point :lonlat, geographic: true

     
      t.references :communicable_disease, null: false, foreign_key: true

      t.timestamps
    end
  end
end
