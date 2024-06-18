# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_18_183102) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "activity_pub_follows", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "source_ap_object_id", null: false
    t.uuid "target_ap_object_id", null: false
    t.string "state", default: "pending"
    t.uuid "guid", default: -> { "uuid_generate_v1()" }, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guid"], name: "index_activity_pub_follows_on_guid", unique: true
    t.index ["source_ap_object_id", "target_ap_object_id"], name: "idx_on_source_ap_object_id_target_ap_object_id_8245a2698a", unique: true
    t.index ["source_ap_object_id"], name: "index_activity_pub_follows_on_source_ap_object_id"
    t.index ["target_ap_object_id"], name: "index_activity_pub_follows_on_target_ap_object_id"
  end

  create_table "activity_pub_likes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "source_ap_object_id", null: false
    t.uuid "target_ap_object_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_ap_object_id"], name: "index_activity_pub_likes_on_source_ap_object_id"
    t.index ["target_ap_object_id"], name: "index_activity_pub_likes_on_target_ap_object_id"
  end

  create_table "activity_pub_object_associations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "ap_object_id", null: false
    t.uuid "target_ap_object_id", null: false
    t.string "type_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "guid"
    t.index ["ap_object_id"], name: "index_activity_pub_object_associations_on_ap_object_id"
    t.index ["guid"], name: "index_activity_pub_object_associations_on_guid", unique: true
    t.index ["target_ap_object_id"], name: "index_activity_pub_object_associations_on_target_ap_object_id"
  end

  create_table "activity_pub_objects", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "guid"
    t.json "data", default: {}
    t.string "type"
    t.datetime "last_synced_at"
    t.string "status", default: "draft"
    t.uuid "in_reply_to_ap_object_id"
    t.string "error_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guid"], name: "index_activity_pub_objects_on_guid", unique: true
    t.index ["in_reply_to_ap_object_id"], name: "index_activity_pub_objects_on_in_reply_to_ap_object_id"
  end

  add_foreign_key "activity_pub_follows", "activity_pub_objects", column: "source_ap_object_id"
  add_foreign_key "activity_pub_follows", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_likes", "activity_pub_objects", column: "source_ap_object_id"
  add_foreign_key "activity_pub_likes", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_object_associations", "activity_pub_objects", column: "ap_object_id"
  add_foreign_key "activity_pub_object_associations", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_objects", "activity_pub_objects", column: "in_reply_to_ap_object_id"
end
