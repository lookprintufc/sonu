class AddAvantarToCommissions < ActiveRecord::Migration[5.0]
  def change
    add_column :commissions, :avatar, :string
  end
end
