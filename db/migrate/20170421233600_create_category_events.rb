class CreateCategoryEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :category_events do |t|
      t.string :name
      t.integer :comitee_id

      t.timestamps
    end
  end
end
