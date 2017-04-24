class AddLideToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :lider_dual, :boolean, default: false
  end
end
