class ActivityPub::Like < ApplicationRecord
  belongs_to :source_ap_object, class_name: 'Ap::Object'
  belongs_to :target_ap_object, class_name: 'Ap::Object'
end
