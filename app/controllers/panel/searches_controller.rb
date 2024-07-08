module Panel
  class SearchesController < PanelController
    def create
      @form = Groups::SearchForm.run!(current_ap_actor: current_group, query: params[:query])

      redirect_to panel_object_path(@form)
    end
  end
end
