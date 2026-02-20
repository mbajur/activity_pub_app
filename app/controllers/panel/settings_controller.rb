module Panel
  class SettingsController < PanelController
    def edit
      @object = current_site
    end

    def update
      @object = current_site
      result = Site::Operations::Update.call(model: @object, params: settings_params)

      if result.success?
        redirect_to edit_panel_settings_path
      else
        render :edit, status: :unprocessable_entity
      end
    end

    private

    def settings_params
      params.require(:settings).permit(:avatar, activity_pub_object_attributes: [data: [:name, :summary]])
    end
  end
end
