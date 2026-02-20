class PanelController < ApplicationController
  before_action :authenticate_user!
  before_action :set_current_actor
  before_action :set_current_site

  layout 'panel'

  private

  def current_actor
    current_site.activity_pub_object
  end

  def set_current_actor
    Current.actor = current_actor
  end

  def set_current_site
    Current.site = current_site
  end
end
