class CreateCommunicableDiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :communicable_diseases do |t|
      t.string :name,  null: false
      t.string :image_url, null: false, default: "default_disease_image.jpg"
      t.text :description,  null: false
      t.text :symptoms,  null: false
      t.text :prevention_measures,  null: false

      t.timestamps
    end
  end
end
