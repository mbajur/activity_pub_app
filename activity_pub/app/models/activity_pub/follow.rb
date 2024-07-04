module ActivityPub
  class Follow < ApplicationRecord
    belongs_to :source_ap_object, class_name: 'ActivityPub::Object'
    belongs_to :target_ap_object, class_name: 'ActivityPub::Object'

    before_validation :generate_guid

    enum state: {
      pending: 'pending',
      confirmed: 'confirmed',
      rejected: 'rejected',
      undoed: 'undoed'
    }

    private

    def generate_guid
      self.guid ||= SecureRandom.uuid
    end
  end
end
