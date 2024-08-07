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

ActiveRecord::Schema[7.1].define(version: 2024_07_04_121342) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "pg_trgm"
  enable_extension "plpgsql"

  create_table "activity_pub_follows", force: :cascade do |t|
    t.bigint "source_ap_object_id", null: false
    t.bigint "target_ap_object_id", null: false
    t.string "state", default: "pending"
    t.uuid "guid", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guid"], name: "index_activity_pub_follows_on_guid", unique: true
    t.index ["source_ap_object_id", "target_ap_object_id"], name: "idx_on_source_ap_object_id_target_ap_object_id_8245a2698a", unique: true
    t.index ["source_ap_object_id"], name: "index_activity_pub_follows_on_source_ap_object_id"
    t.index ["target_ap_object_id"], name: "index_activity_pub_follows_on_target_ap_object_id"
  end

  create_table "activity_pub_likes", force: :cascade do |t|
    t.bigint "source_ap_object_id", null: false
    t.bigint "target_ap_object_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "guid"
    t.index ["source_ap_object_id"], name: "index_activity_pub_likes_on_source_ap_object_id"
    t.index ["target_ap_object_id"], name: "index_activity_pub_likes_on_target_ap_object_id"
  end

  create_table "activity_pub_object_associations", force: :cascade do |t|
    t.bigint "ap_object_id", null: false
    t.bigint "target_ap_object_id", null: false
    t.string "type_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "guid"
    t.index ["ap_object_id"], name: "index_activity_pub_object_associations_on_ap_object_id"
    t.index ["guid"], name: "index_activity_pub_object_associations_on_guid", unique: true
    t.index ["target_ap_object_id"], name: "index_activity_pub_object_associations_on_target_ap_object_id"
  end

  create_table "activity_pub_objects", force: :cascade do |t|
    t.string "guid"
    t.hstore "data", default: {}
    t.string "type"
    t.datetime "last_synced_at"
    t.string "status", default: "draft"
    t.bigint "in_reply_to_ap_object_id"
    t.string "error_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "activity_pubable_type"
    t.bigint "activity_pubable_id"
    t.index ["activity_pubable_type", "activity_pubable_id"], name: "index_activity_pub_objects_on_activity_pubable"
    t.index ["guid"], name: "index_activity_pub_objects_on_guid", unique: true
    t.index ["in_reply_to_ap_object_id"], name: "index_activity_pub_objects_on_in_reply_to_ap_object_id"
  end

  create_table "exception_hunter_error_groups", force: :cascade do |t|
    t.string "error_class_name", null: false
    t.string "message"
    t.integer "status", default: 0
    t.text "tags", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message"], name: "index_exception_hunter_error_groups_on_message", opclass: :gin_trgm_ops, using: :gin
    t.index ["status"], name: "index_exception_hunter_error_groups_on_status"
  end

  create_table "exception_hunter_errors", force: :cascade do |t|
    t.string "class_name", null: false
    t.string "message"
    t.datetime "occurred_at", precision: nil, null: false
    t.json "environment_data"
    t.json "custom_data"
    t.json "user_data"
    t.string "backtrace", default: [], array: true
    t.bigint "error_group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["error_group_id"], name: "index_exception_hunter_errors_on_error_group_id"
  end

  create_table "good_job_batches", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.jsonb "serialized_properties"
    t.text "on_finish"
    t.text "on_success"
    t.text "on_discard"
    t.text "callback_queue_name"
    t.integer "callback_priority"
    t.datetime "enqueued_at"
    t.datetime "discarded_at"
    t.datetime "finished_at"
  end

  create_table "good_job_executions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "active_job_id", null: false
    t.text "job_class"
    t.text "queue_name"
    t.jsonb "serialized_params"
    t.datetime "scheduled_at"
    t.datetime "finished_at"
    t.text "error"
    t.integer "error_event", limit: 2
    t.text "error_backtrace", array: true
    t.index ["active_job_id", "created_at"], name: "index_good_job_executions_on_active_job_id_and_created_at"
  end

  create_table "good_job_processes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "state"
  end

  create_table "good_job_settings", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "key"
    t.jsonb "value"
    t.index ["key"], name: "index_good_job_settings_on_key", unique: true
  end

  create_table "good_jobs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.text "queue_name"
    t.integer "priority"
    t.jsonb "serialized_params"
    t.datetime "scheduled_at"
    t.datetime "performed_at"
    t.datetime "finished_at"
    t.text "error"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "active_job_id"
    t.text "concurrency_key"
    t.text "cron_key"
    t.uuid "retried_good_job_id"
    t.datetime "cron_at"
    t.uuid "batch_id"
    t.uuid "batch_callback_id"
    t.boolean "is_discrete"
    t.integer "executions_count"
    t.text "job_class"
    t.integer "error_event", limit: 2
    t.text "labels", array: true
    t.index ["active_job_id", "created_at"], name: "index_good_jobs_on_active_job_id_and_created_at"
    t.index ["batch_callback_id"], name: "index_good_jobs_on_batch_callback_id", where: "(batch_callback_id IS NOT NULL)"
    t.index ["batch_id"], name: "index_good_jobs_on_batch_id", where: "(batch_id IS NOT NULL)"
    t.index ["concurrency_key"], name: "index_good_jobs_on_concurrency_key_when_unfinished", where: "(finished_at IS NULL)"
    t.index ["cron_key", "created_at"], name: "index_good_jobs_on_cron_key_and_created_at_cond", where: "(cron_key IS NOT NULL)"
    t.index ["cron_key", "cron_at"], name: "index_good_jobs_on_cron_key_and_cron_at_cond", unique: true, where: "(cron_key IS NOT NULL)"
    t.index ["finished_at"], name: "index_good_jobs_jobs_on_finished_at", where: "((retried_good_job_id IS NULL) AND (finished_at IS NOT NULL))"
    t.index ["labels"], name: "index_good_jobs_on_labels", where: "(labels IS NOT NULL)", using: :gin
    t.index ["priority", "created_at"], name: "index_good_job_jobs_for_candidate_lookup", where: "(finished_at IS NULL)"
    t.index ["priority", "created_at"], name: "index_good_jobs_jobs_on_priority_created_at_when_unfinished", order: { priority: "DESC NULLS LAST" }, where: "(finished_at IS NULL)"
    t.index ["queue_name", "scheduled_at"], name: "index_good_jobs_on_queue_name_and_scheduled_at", where: "(finished_at IS NULL)"
    t.index ["scheduled_at"], name: "index_good_jobs_on_scheduled_at", where: "(finished_at IS NULL)"
  end

  create_table "inbound_request_logs", force: :cascade do |t|
    t.string "uuid"
    t.string "method"
    t.string "path"
    t.text "request_body"
    t.text "request_headers"
    t.text "response_body"
    t.integer "response_code"
    t.inet "ip_used"
    t.datetime "started_at", precision: nil
    t.datetime "ended_at", precision: nil
    t.string "loggable_type"
    t.uuid "loggable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loggable_type", "loggable_id"], name: "index_inbound_request_logs_on_loggable"
  end

  create_table "outbound_request_logs", force: :cascade do |t|
    t.string "uuid"
    t.string "method"
    t.string "path"
    t.text "request_body"
    t.text "request_headers"
    t.text "response_body"
    t.integer "response_code"
    t.inet "ip_used"
    t.datetime "started_at", precision: nil
    t.datetime "ended_at", precision: nil
    t.string "loggable_type"
    t.uuid "loggable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loggable_type", "loggable_id"], name: "index_outbound_request_logs_on_loggable"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "remember_created_at"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "activity_pub_follows", "activity_pub_objects", column: "source_ap_object_id"
  add_foreign_key "activity_pub_follows", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_likes", "activity_pub_objects", column: "source_ap_object_id"
  add_foreign_key "activity_pub_likes", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_object_associations", "activity_pub_objects", column: "ap_object_id"
  add_foreign_key "activity_pub_object_associations", "activity_pub_objects", column: "target_ap_object_id"
  add_foreign_key "activity_pub_objects", "activity_pub_objects", column: "in_reply_to_ap_object_id"
  add_foreign_key "exception_hunter_errors", "exception_hunter_error_groups", column: "error_group_id"
end
