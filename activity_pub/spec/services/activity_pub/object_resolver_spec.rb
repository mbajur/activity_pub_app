require 'rails_helper'

describe ActivityPub::ObjectResolver do
  subject { instance.call }
  let(:instance) { described_class.new('https://example.com/ap/objects/1') }

  let!(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }

  let(:external_object) do
    {
      'type' => 'Note',
      'content' => "<p>foo</p>",
      'url' => 'https://example.com/ap/objects/foo',
      'actor' => 'https://remote.com/ap/foo'
    }
  end

  before do
    stub_request(:get, "https://example.com/ap/objects/1")
      .to_return(status: 200,
                 body: external_object.to_json,
                 headers: { 'Content-Type' => 'application/activity+json' })
  end

  it { is_expected.to be_truthy }

  it 'creates a ActivityPub::Note record' do
    expect { subject }.to change { ActivityPub::Note.count }.by(1)
  end

  it 'persists raw data' do
    subject
    ap_object = ActivityPub::Note.last

    expect(ap_object.data.content).to eq('<p>foo</p>')
  end
end
