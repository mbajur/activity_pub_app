module ActivityPub
  class Follow < ApplicationRecord
    belongs_to :source_ap_object, class_name: 'ActivityPub::Object'
    belongs_to :target_ap_object, class_name: 'ActivityPub::Object'

    enum state: {
      pending: 'pending',
      confirmed: 'confirmed',
      rejected: 'rejected',
      undoed: 'undoed'
    }
  end
end
