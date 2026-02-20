# frozen_string_literal: true

module Objects
  class ContentAnnounceComponent < ContentBaseComponent
    def self.new(object)
      data = ActivityPub::ObjectDataSanitizer.new(object.data).call
      announced_object = ActivityPub::Object.find_by(guid: data.dig('object', 'id'))

      {
        'ActivityPub::Note' => Objects::ContentNoteComponent,
        'ActivityPub::Article' => Objects::ContentArticleComponent,
      }[announced_object.type].new(announced_object)
    end
  end
end
