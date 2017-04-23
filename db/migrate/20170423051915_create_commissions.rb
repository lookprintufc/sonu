class CreateCommissions < ActiveRecord::Migration[5.0]
  def change
    create_table :commissions do |t|
      t.string :title
      t.string :photo
      t.text :description

      t.timestamps
    end
  end
end
