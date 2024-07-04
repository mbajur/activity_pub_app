# This migration comes from activity_pub (originally 20240529185316)
class CreateActivityPubFollows < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_pub_follows, id: :bigint do |t|
      t.references :source_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.references :target_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.string :state, default: 'pending'
      t.uuid :guid, null: false

      t.timestamps
    end

    add_index :activity_pub_follows, :guid, unique: true
  end
end
