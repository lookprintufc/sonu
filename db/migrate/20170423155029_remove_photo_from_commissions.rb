class RemovePhotoFromCommissions < ActiveRecord::Migration[5.0]
  def change
    remove_column :commissions, :photo, :string
  end
end
