class ActivityPub::Like < ApplicationRecord
  belongs_to :source_object_id, class_name: 'Ap::Object'
  belongs_to :target_object_id, class_name: 'Ap::Object'
end
