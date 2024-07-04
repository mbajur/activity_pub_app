# This migration comes from activity_pub (originally 20240511093225)
class CreateActivityPubObjects < ActiveRecord::Migration[7.1]
  def change
    enable_extension("hstore")

    create_table :activity_pub_objects, id: :bigint do |t|
      t.string :guid
      t.hstore :data, default: {}
      t.string :type
      t.datetime :last_synced_at
      t.string :status, default: 'draft'
      t.references :in_reply_to_ap_object, null: true, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.string :error_message

      t.timestamps
    end
    add_index :activity_pub_objects, :guid, unique: true
  end
end
