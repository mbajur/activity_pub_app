class CreateTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :topics, id: :bigint do |t|
      t.references :ap_object, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :bigint

      t.timestamps
    end
  end
end
