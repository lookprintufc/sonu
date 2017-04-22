class AddColunasToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cpf_dual, :string
    add_column :users, :answer_1, :string
    add_column :users, :answer_2, :string
    add_column :users, :answer_3, :string
    add_column :users, :answer_4, :string
    add_column :users, :answer_5, :string
    add_column :users, :justify, :text
    add_column :users, :experience, :text
    add_column :users, :face_link, :string
  end
end
