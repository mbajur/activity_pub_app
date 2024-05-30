class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :rememberable, :validatable, :lockable

  belongs_to :ap_object, class_name: 'ActivityPub::Person'

  before_validation :assign_ap_object, on: :create

  private

  def assign_ap_object
    self.build_ap_object unless ap_object
  end
end
