class Content < ApplicationRecord
  validates :body, presence: true
end
