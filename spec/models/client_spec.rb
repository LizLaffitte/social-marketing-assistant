require 'rails_helper'

RSpec.describe Client, type: :model do
  subject {Client.new(name: "Tom's ")}

  before {subject.save}

  it 'should have a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end
end
