Rails.application.config.to_prepare do
  ActivityPub.object_handlers = {
    'Note' => ActivityPub::ObjectHandlers::NoteHandler,
    'Announce' => ActivityPub::ObjectHandlers::AnnounceHandler,
    'Person' => ActivityPub::ObjectHandlers::PersonHandler,
    'Service' => ActivityPub::ObjectHandlers::ServiceHandler,
    'Collection' => ActivityPub::ObjectHandlers::CollectionHandler,
    'OrderedCollection' => ActivityPub::ObjectHandlers::OrderedCollectionHandler,
    'CollectionPage' => ActivityPub::ObjectHandlers::CollectionPageHandler,
    'OrderedCollectionPage' => ActivityPub::ObjectHandlers::OrderedCollectionPageHandler,

    'Create' => ActivityPub::ObjectHandlers::CreateHandler,
    # 'Update' => ActivityPub::ObjectHandlers::UpdateHandler,
  }

  ActivityPub.object_type_models = {
    'Person' => ActivityPub::Person,
    'Group' => ActivityPub::Group,
    'Note' => ActivityPub::Note,
  }
end
