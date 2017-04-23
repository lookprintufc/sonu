class CreateComitees < ActiveRecord::Migration[5.0]
  def change
    create_table :comitees do |t|
      t.string :name
      t.string :grade
      t.integer :limit
      t.float :value_not_cotist
      t.float :value_cotist
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
    add_column :users, :avatar, :string
      # t.datetime :deadline_1
      # t.datetime :deadline_2
      # t.datetime :deadline_3
      # t.datetime :deadline_4

      t.timestamps null: false
    end
  end
end
