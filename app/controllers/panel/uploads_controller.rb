module Panel
  class UploadsController < PanelController
    def create
      upload = Upload.create(upload_params)

      if upload.valid?
        render json: {
          success: 1,
          file: {
            id: upload.file.id,
            url: upload_redirect_path(upload.signed_id),
            width: upload.file.width,
            height: upload.file.height
          }
        }, status: :created
      else
        render json: { success: 0, errors: upload.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    private

    def upload_params
      params.require(:upload).permit(:file)
    end
  end
end
