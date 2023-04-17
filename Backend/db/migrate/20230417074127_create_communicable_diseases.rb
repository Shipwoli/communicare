class CreateCommunicableDiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :communicable_diseases do |t|
      t.string :name
      t.text :description
      t.text :symptoms
      t.text :prevention_measures

      t.timestamps
    end
  end
end
