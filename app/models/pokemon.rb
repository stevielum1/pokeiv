class Pokemon < ApplicationRecord
  validates :name, :stamina, :attack, :defense, presence: true
end
