class AddCamposToComitee < ActiveRecord::Migration[5.0]
  def change
    add_column :comitees, :type_event, :integer
    add_column :comitees, :description, :text
    add_column :comitees, :limit_cotist, :integer
    add_column :comitees, :question_1, :text
    add_column :comitees, :question_2, :text
    add_column :comitees, :question_3, :string
    add_column :comitees, :question_4, :string
    add_column :comitees, :question_5, :string
    add_column :comitees, :dual, :boolean
  end
end
