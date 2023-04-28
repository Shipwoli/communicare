class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :First_name
      t.string :Last_name
      t.string :email
      t.string :password
      t.integer :role, null: false, default: 0

      t.timestamps
    end
  end
end
