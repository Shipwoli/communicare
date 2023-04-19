class CreateDiseaseAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :disease_areas do |t|
      t.references :communicable_disease, foreign_key: true
      t.references :area, foreign_key: true
      t.integer :affected_count, default: 0
      t.text :review

      t.timestamps
    end
  end
end
