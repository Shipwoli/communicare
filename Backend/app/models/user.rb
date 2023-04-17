class User < ApplicationRecord
    has_many :reviews
    has_many :donations
    has_secure_password

    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true, length: { minimum: 6 }
    validates :first_name, :last_name, presence: true, length: { maximum: 50 }
    validates :admin, inclusion: { in: [true, false] }
end
