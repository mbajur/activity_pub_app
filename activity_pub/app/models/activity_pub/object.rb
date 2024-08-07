class ActivityPub::Object < ApplicationRecord
  # I put it in here because sometimes we need to acess user public key before
  # it's full data has been fetched from remote server. It's set as Unknown type
  # then.
  #
  # @todo Maybe we should assign object types on find_or_initialize instead of
  # just storing the guid?
  store_accessor :data, :public_key

  has_many :attributed_to_associations, ->{ where(type_key: 'attributed_to') }, class_name: 'ActivityPub::ObjectAssociation', inverse_of: :ap_object, dependent: :destroy
  has_many :attributed_to, through: :attributed_to_associations, source: :target_ap_object

  has_many :attribution_associations, ->{ where(type_key: 'attributed_to') }, class_name: 'ActivityPub::ObjectAssociation', inverse_of: :target_ap_object, dependent: :destroy
  has_many :attributions, through: :attribution_associations, source: :ap_object

  belongs_to :in_reply_to, class_name: 'ActivityPub::Object', foreign_key: :in_reply_to_ap_object_id, optional: true
  has_many :replies, class_name: 'ActivityPub::Object', foreign_key: :in_reply_to_ap_object_id, dependent: :destroy

  has_many :announce_associations, ->{ where(type_key: 'announce') }, class_name: 'ActivityPub::ObjectAssociation', inverse_of: :ap_object, dependent: :destroy
  has_many :announced, through: :announce_associations, class_name: 'ActivityPub::Object', source: :target_ap_object

  has_many :followers_associations, class_name: 'ActivityPub::Follow', inverse_of: :target_ap_object, dependent: :destroy
  has_many :followers, through: :followers_associations, class_name: 'ActivityPub::Object', source: :source_ap_object
  has_many :following_associations, class_name: 'ActivityPub::Follow', inverse_of: :source_ap_object, dependent: :destroy
  has_many :following, through: :following_associations, class_name: 'ActivityPub::Object', source: :target_ap_object

  has_many :likes, class_name: 'ActivityPub::Like', inverse_of: :target_ap_object
  has_many :liked_by, class_name: 'ActivityPub::Like', inverse_of: :source_ap_object

  belongs_to :activity_pubable, polymorphic: true, optional: true

  after_initialize :set_default_type

  scope :local, ->{ where(guid: nil) }
  scope :remote, ->{ where.not(guid: nil) }

  enum status: {
    draft: 'draft',
    local: 'local',
    syncing: 'syncing',
    synced: 'synced',
    failing: 'failing',
  }, _prefix: true

  def self.ransackable_attributes(auth_object = nil)
    ["id", "status", "type", "created_at", "last_synced_at", "in_reply_to_ap_object_id"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["attributed_to"]
  end

  def self.find_by_username!(username)
    where("data->'preferred_username' = ?", username).first!
  end

  # @todo is there any built-in rails method to handle that? It feels hackish
  def ensure_type
    becomes(self.type.constantize)
  end

  def fresh?
    return false unless last_synced_at.present?
    last_synced_at > 1.minute.ago
  end

  def object_type
    type.split('::').last
  end

  def local?
    attributes['guid'].blank?
  end

  private

  def set_default_type
    self.type ||= ActivityPub::Unknown
  end
end
