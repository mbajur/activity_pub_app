class ActivityPub::Like < ApplicationRecord
  belongs_to :source_ap_object, class_name: ActivityPub::Object.name
  belongs_to :target_ap_object, class_name: ActivityPub::Object.name, counter_cache: true

  scope :newest_first, ->{ order(created_at: :desc) }
end
