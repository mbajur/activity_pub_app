FactoryBot.define do
  factory :like, class: 'ActivityPub::Like' do
    source_ap_object factory: :person
    target_ap_object factory: :person
  end
end
