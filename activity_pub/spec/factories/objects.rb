FactoryBot.define do
  factory :person, class: 'ActivityPub::Person' do
    data do
      {
        name: 'John',
        preferred_username: 'john',
        summary: 'Something about me',
      }
    end
  end

  factory :note, class: 'ActivityPub::Note' do
    data do
      {
        content: 'Test content'
      }
    end
  end
end
