# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create admin user
User.create!(
  email: 'admin@example.com',
  password_digest: 'password',
  
  first_name: 'Admin',
  last_name: 'User',
  admin: true
)

# Create regular user
User.create!(
  email: 'user@example.com',
  password_digest: 'password',
  first_name: 'Regular',
  last_name: 'User',
  admin: false
)

# Create communicable diseases
disease1 = CommunicableDisease.create!(
  name: 'Ebola',
  description: 'Ebola virus disease (EVD) is a rare but severe and often fatal illness in humans. The virus is transmitted to people from wild animals and spreads in the human population through human-to-human transmission.',
  symptoms: 'The symptoms of Ebola include fever, severe headache, muscle pain, weakness, fatigue, diarrhea, vomiting, abdominal (stomach) pain, and unexplained hemorrhage (bleeding or bruising).',
  prevention_measures: 'Prevention measures include avoiding contact with wild animals, washing hands frequently, and practicing good hygiene.',
)

disease2 = CommunicableDisease.create!(
  name: 'COVID-19',
  description: 'COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It was first identified in Wuhan, China in December 2019 and has since become a global pandemic.',
  symptoms: 'The symptoms of COVID-19 include fever, cough, and shortness of breath. Other symptoms may include fatigue, body aches, headache, loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.',
  prevention_measures: 'Prevention measures include wearing a mask, social distancing, washing hands frequently, avoiding crowds, and getting vaccinated when possible.',
)

# Create areas affected by communicable diseases
area1 = Area.create!(
  name: 'Liberia',
  description: 'Liberia is a country in West Africa that was severely affected by the Ebola outbreak in 2014-2015.',
  latitude: 6.4281,
  longitude: -9.4295,
  communicable_disease: disease1
)

area2 = Area.create!(
  name: 'New York City',
  description: 'New York City is a major urban center in the United States that was heavily impacted by the COVID-19 pandemic in 2020.',
  latitude: 40.7128,
  longitude: -74.0060,
  communicable_disease: disease2
)

# Create reviews
Review.create!(
  content: 'I think more resources should be allocated to combating Ebola in Liberia.',
  rating: 4,
  user: User.first,
  area: area1
)

Review.create!(
  content: 'The response to the COVID-19 pandemic in New York City could have been better.',
  rating: 3,
  user: User.first,
  area: area2
)

# Create donations
Donation.create!(
  amount: 50.00,
  user: User.first,
  area: area1
)

Donation.create!(
  amount: 100.00,
  user: User.first,
  area: area2
)
