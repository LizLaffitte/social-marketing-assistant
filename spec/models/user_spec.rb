require 'rails_helper'

RSpec.describe User, type: :model do
  subject {User.new(username:'Robert')}

  before {subject.save}

  it 'should have a username' do
    subject.username = nil
    expect(subject).to_not be_valid
  end
end