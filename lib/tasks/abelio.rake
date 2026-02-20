namespace :abelio do
  desc "TODO"
  task generate_fake_comments: :environment do
    # post = ActivityPub::Article.first.becomes(ActivityPub::Object)

    ActivityPub::Article.local.order("RANDOM()").limit(5).each do |post|
      10.times do
        parent = [:root, :child, :child, :child, :child].sample
        quote = [Faker::Quote.matz, Faker::Quote.fortune_cookie, Faker::Quote.yoda].sample
        comment = ActivityPub::Note.new content: "<p>#{quote}</p>", published_at: Time.current
        comment.attributed_to = [ActivityPub::Person.first]

        if parent == :child && post.children.any?
          parent_note = ActivityPub::Note.order("RANDOM()").first.becomes(ActivityPub::Object)
          comment.parent = parent_note
          comment.save!
          puts "Created child (#{comment.id}) for comment"
        else
          comment.parent = post
          comment.save!
          puts "Created child (#{comment.id}) for post"
        end
      end
    end
  end
end
