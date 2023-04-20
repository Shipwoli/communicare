class AddReportedCasesToAreas < ActiveRecord::Migration[7.0]
  def change
    add_column :areas, :reported_cases, :integer
  end
end
