FactoryBot.define do
  factory :person, class: 'ActivityPub::Person' do
    name { 'John' }
    preferred_username  { 'john' }
    summary { 'Something about me' }
  end

  factory :note, class: 'ActivityPub::Note' do
    content { 'Test content' }
  end
end
