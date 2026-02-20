class ApplicationController < ActionController::Base
  helper_method :current_site

  private

  def current_site
    @current_site ||= Site.find_by!(domain: request.host_with_port)
  end
end
