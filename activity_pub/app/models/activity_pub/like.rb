class ActivityPub::Like < ApplicationRecord
  belongs_to :source_ap_object, class_name: 'ActivityPub::Object'
  belongs_to :target_ap_object, class_name: 'ActivityPub::Object'
end
