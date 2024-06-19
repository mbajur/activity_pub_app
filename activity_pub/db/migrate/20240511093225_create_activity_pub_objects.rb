class CreateActivityPubObjects < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_pub_objects, id: :uuid do |t|
      t.string :guid
      t.hstore :data, default: {}
      t.string :type
      t.datetime :last_synced_at
      t.string :status, default: 'draft'
      t.references :in_reply_to_ap_object, null: true, foreign_key: { to_table: :activity_pub_objects }, type: :uuid
      t.string :error_message

      t.timestamps
    end
    add_index :activity_pub_objects, :guid, unique: true
  end
end
