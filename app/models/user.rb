class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :rememberable, :validatable, :lockable

  has_one :activity_pub_object, class_name: ActivityPub::Object.name, as: :activity_pubable

  before_validation :assign_ap_object, on: :create

  private

  def assign_ap_object
    self.build_activity_pub_object unless activity_pub_object
  end
end
