class Post < ApplicationRecord
    validates :content, presence: true
    validates :platform, presence: true, inclusion: { in: %w(Twitter Facebook Instagram), message: "is not a valid platform" }
    validates :status, presence: true, inclusion: { in: %w(draft approved pending scheduled), message: "is not a valid status" }
end
