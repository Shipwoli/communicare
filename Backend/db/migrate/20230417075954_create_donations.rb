class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.decimal :amount
      t.references :user_id, null: false, foreign_key: true
      t.references :area_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
