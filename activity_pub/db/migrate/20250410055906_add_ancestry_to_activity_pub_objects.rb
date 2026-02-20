class AddAncestryToActivityPubObjects < ActiveRecord::Migration[7.1]
  def change
    add_column :activity_pub_objects, :ancestry, :string
    add_column :activity_pub_objects, :ancestry_depth, :integer, default: 0
    add_index :activity_pub_objects, :ancestry
  end
end
