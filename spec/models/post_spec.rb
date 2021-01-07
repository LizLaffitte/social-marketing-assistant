require 'rails_helper'

RSpec.describe Post, type: :model do
  subject {Post.new(link:'http://google.com', content:'We love puppies! Check out all of these really cool pupperinos.', platform: "Twitter")}

  before {subject.save}

  it 'should have content' do
    subject.content = nil
    expect(subject).to_not be_valid
  end

  it 'should have a platform' do
    subject.platform = nil
    expect(subject).to_not be_valid
  end

  it 'should have a valid platform' do
    subject.platform = "Pinterest"
    expect(subject).to_not be_valid
  end
end