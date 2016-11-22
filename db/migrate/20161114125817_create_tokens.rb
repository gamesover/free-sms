class CreateTokens < ActiveRecord::Migration[5.0]
  def change
    create_table :tokens do |t|
      t.string :token
      t.timestamp :expired_time, 'timestamp with time zone'

      t.timestamps
    end
  end
end
