class CreateActivityPubLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_pub_likes, id: :bigint do |t|
      t.references :source_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.references :target_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint

      t.timestamps
    end
  end
end
