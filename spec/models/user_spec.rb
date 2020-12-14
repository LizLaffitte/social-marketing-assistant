require 'rails_helper'

RSpec.describe User, type: :model do
  subject {User.new(username:'Robert')}

  before {subject.save}

  it 'should have a username' do
    subject.username = nil
    expect(subject).to_not be_valid
  end

  it 'should have a unique username' do
    user = User.create(username:'Sam')
    subject.username = 'Sam'
    expect(subject).to_not be_valid
  end

  it 'should have an email address' do
    subject.email = nil
    expect(subject).to_not be_valid
  end
end