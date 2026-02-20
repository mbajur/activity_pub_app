class ReplyComponent < ViewComponent::Base
  def initialize(reply)
    @reply = reply
    @author = reply.attributed_to.first
    super
  end

  def author_decorated
    AuthorDecorator.new(author)
  end

  # @todo right now we are fully converting content to pure text. We should probably
  # make it more sophisticated and allow some tags while converting others to plain text.
  def content
    sanitized = Objects::ContentValueResolver.new(reply)
                                             .sanitized
                                             .gsub("<br>", " ")

    ActionView::Base.full_sanitizer
                    .sanitize(sanitized)
                    .truncate(200, separator: ' ')
  end

  private

  attr_reader :reply, :author
end
