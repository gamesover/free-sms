class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :message_id
      t.string :from
      t.string :to, null: false
      t.string :content, null: false

      t.timestamps
    end
  end
end
