module Public
  class PaginationSerializer < BaseSerializer
    def data
      {
        'page' => resource.vars[:page],
        'items' => resource.vars[:items],
        'size' => resource.vars[:size],
        'count' => resource.vars[:count],
        'page_param' => resource.vars[:page_param],
        'prev' => resource.prev,
        'next' => resource.next,
      }
    end
  end
end
