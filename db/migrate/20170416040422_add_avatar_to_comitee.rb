class AddAvatarToComitee < ActiveRecord::Migration[5.0]
  def change
        add_column :comitees, :avatar, :string
  end
end
