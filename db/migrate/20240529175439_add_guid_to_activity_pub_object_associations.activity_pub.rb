# This migration comes from activity_pub (originally 20240529175417)
class AddGuidToActivityPubObjectAssociations < ActiveRecord::Migration[7.1]
  def change
    add_column :activity_pub_object_associations, :guid, :bigint
    add_index :activity_pub_object_associations, :guid, unique: true
  end
end
