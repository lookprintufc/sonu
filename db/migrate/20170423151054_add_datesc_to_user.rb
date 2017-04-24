class AddDatescToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :inscription_date, :datetime
  end
end
