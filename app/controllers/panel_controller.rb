class PanelController < ApplicationController
  before_action :authenticate_user!

  layout 'panel'

  private

  def current_actor
    current_user.activity_pub_object
  end
end
