# This migration comes from activity_pub (originally 20240517205127)
class CreateActivityPubLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_pub_likes, id: :uuid do |t|
      t.references :source_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :uuid
      t.references :target_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :uuid

      t.timestamps
    end
  end
end
