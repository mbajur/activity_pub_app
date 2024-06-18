# This migration comes from activity_pub (originally 20240618183102)
class AddUniqueConstraintToFollows < ActiveRecord::Migration[7.1]
  def change
    add_index :activity_pub_follows, [:source_ap_object_id, :target_ap_object_id], unique: true
  end
end
