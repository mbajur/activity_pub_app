class ActivityPub::ObjectAssociation < ApplicationRecord
  belongs_to :ap_object, class_name: 'ActivityPub::Object'
  belongs_to :target_ap_object, class_name: 'ActivityPub::Object'
end
