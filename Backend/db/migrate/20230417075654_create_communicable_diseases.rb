class CreateCommunicableDiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :communicable_diseases do |t|
      t.string :name
      t.string :image_url, null: false, default: "default_disease_image.jpg"
      t.text :description
      t.text :symptoms
      t.text :prevention_measures
      t.boolean :most_prevalent, default: false
    

      t.timestamps
    end
  end
end
