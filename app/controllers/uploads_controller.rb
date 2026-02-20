class UploadsController < ApplicationController
  def redirect
    upload = Upload.find_signed(params[:signed_id])
    redirect_to upload.file_url
  end
end
