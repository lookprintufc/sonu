class RemovePayssToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :payment_status, :string, default: 'Pendente'
  end
end
