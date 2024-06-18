FactoryBot.define do
  factory :follow, class: 'ActivityPub::Follow' do
    state { 'pending' }
    source_ap_object factory: :person
    target_ap_object factory: :person
  end
end
