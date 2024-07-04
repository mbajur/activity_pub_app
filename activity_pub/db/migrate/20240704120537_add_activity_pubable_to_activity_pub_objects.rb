class AddActivityPubableToActivityPubObjects < ActiveRecord::Migration[7.1]
  def change
    add_reference :activity_pub_objects, :activity_pubable, null: true, polymorphic: true, index: true
  end
end
