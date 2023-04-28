class User < ApplicationRecord
    has_many :reviews
    has_many :donations
    enum role: [:standard, :admin]

    has_secure_password

      
  validates :First_name, presence: true
  validates :Last_name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, presence: true, length: { minimum: 6 }
  validates :admin, inclusion: { in: [true, false] }
end
