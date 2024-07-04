# This migration comes from activity_pub (originally 20240704120537)
class AddActivityPubableToActivityPubObjects < ActiveRecord::Migration[7.1]
  def change
    add_reference :activity_pub_objects, :activity_pubable, null: true, polymorphic: true, index: true
  end
end
