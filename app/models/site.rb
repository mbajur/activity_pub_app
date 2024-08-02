class Site < ApplicationRecord
  include SiteAvatarUploader::Attachment(:avatar)

  has_one :activity_pub_object, class_name: ActivityPub::Person.name, as: :activity_pubable

  accepts_nested_attributes_for :activity_pub_object, update_only: true

  before_create :assign_default_template_markup

  private

  def assign_default_template_markup
    self.template_markup ||= File.read(Rails.root.join('config/default_template.liquid'))
  end
end
