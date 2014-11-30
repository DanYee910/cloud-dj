class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :description
      t.string :publicness
      t.references :user
      t.timestamps
    end
  end
end
