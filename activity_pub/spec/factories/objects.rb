FactoryBot.define do
  factory :person, class: 'ActivityPub::Person' do
    name { 'John' }
    preferred_username  { 'john' }
    summary { 'Something about me' }
  end
end
