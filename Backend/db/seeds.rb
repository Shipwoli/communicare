# Create Communicable Diseases
disease1 = CommunicableDisease.create(name: 'COVID-19', description: 'A highly infectious respiratory disease caused by the SARS-CoV-2 virus.', symptoms: 'Fever, cough, shortness of breath, fatigue, body aches, loss of taste or smell.', prevention_measures: 'Wear a mask, practice social distancing, wash your hands frequently, get vaccinated.')
disease2 = CommunicableDisease.create(name: 'Malaria', description: 'A parasitic disease transmitted by female Anopheles mosquitoes.', symptoms: 'Fever, headache, chills, muscle pain, vomiting.', prevention_measures: 'Use insect repellent, wear protective clothing, use bed nets, eliminate standing water.')

# Create Users
user1 = User.create(first_name: 'saviour', last_name: 'khalwale', email: 'khalwale@example.com', password: '12345', admin: true)
user2 = User.create(first_name: 'annette', last_name: 'khalwale', email: 'annette@example.com', password: '12345', admin: false)

# Create Areas
area1 = Area.create(name: 'Nairobi', location: 'central', reported_cases: 1000, communicable_disease: disease1)
area2 = Area.create(name: 'kakamega', location: 'Western', reported_cases: 500, communicable_disease: disease2)

# Create Donations
donation1 = Donation.create(amount: 500.00, user: user1, area: area1)
donation2 = Donation.create(amount: 250.00, user: user2, area: area2)

# Create Reviews
review1 = Review.create(comment: 'Great experience!', rating: 5, user: user1, area: area1)
review2 = Review.create(comment: 'Could be better.', rating: 3, user: user2, area: area2)
