class CreateActivityPubFollows < ActiveRecord::Migration[7.1]
  def change
    enable_extension('uuid-ossp')

    create_table :activity_pub_follows, id: :uuid do |t|
      t.references :source_object_id, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :uuid
      t.references :target_object_id, null: false, foreign_key: { to_table: :activity_pub_objects }, type: :uuid
      t.string :state, default: 'pending'
      t.uuid :guid, null: false, default: 'uuid_generate_v1()'

      t.timestamps
    end

    add_index :activity_pub_follows, :guid, unique: true
  end
end
