class Post < ApplicationRecord
    validates :content, presence: true
    validates :platform, presence: true, inclusion: { in: %w(Twitter Facebook Instagram), message: "is not a valid platform" }
end
