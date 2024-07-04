class CreateConversations < ActiveRecord::Migration[7.1]
  def change
    create_table :conversations, id: :bigint do |t|
      t.references :topic, null: false, foreign_key: true, type: :bigint
      t.references :ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint

      t.timestamps
    end
  end
end
