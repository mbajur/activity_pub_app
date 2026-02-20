module Panel
  class DesignController < PanelController
    def edit
      @object = current_site
    end

    def update
      @object = current_site

      if @object.update(design_params)
        redirect_to edit_panel_design_path
      else
        render :edit, status: :unprocessable_entity
      end
    end

    private

    def design_params
      params.require(:design).permit(:template_markup)
    end
  end
end
