# This migration comes from activity_pub (originally 20240511121452)
class CreateActivityPubObjectsAssociations < ActiveRecord::Migration[7.1]
  def change
    create_table :activity_pub_object_associations, id: :bigint do |t|
      t.references :ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.references :target_ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
      t.string :type_key

      t.timestamps
    end
  end
end
