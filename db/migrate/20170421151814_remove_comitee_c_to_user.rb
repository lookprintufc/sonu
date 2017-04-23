class RemoveComiteeCToUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :is_cotist, :boolean
  end
end
