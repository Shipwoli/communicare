# Create some communicable diseases
disease1 = CommunicableDisease.create!(
    name: "COVID-19",
    description: "A respiratory illness caused by the SARS-CoV-2 virus.",
    symptoms: "Fever, cough, shortness of breath, loss of taste or smell.",
    prevention_measures: "Wear a mask, wash your hands, practice social distancing.",
    most_prevalent: true
  )
  
  disease2 = CommunicableDisease.create!(
    name: "Influenza",
    description: "A viral infection that affects the respiratory system.",
    symptoms: "Fever, cough, sore throat, runny or stuffy nose, body aches, headache, chills, fatigue.",
    prevention_measures: "Get vaccinated, wash your hands, avoid close contact with sick people.",
    most_prevalent: false
  )
  
  # Create some areas
  area1 = disease1.areas.create!(
    name: "Nairobi",
    location: "Kenya",
    latitude: -1.2921,
    longitude: 36.8219,
    reported_cases: 1000
  )
  
  area2 = disease1.areas.create!(
    name: "Kampala",
    location: "Uganda",
    latitude: 0.3476,
    longitude: 32.5825,
    reported_cases: 500
  )
  
  area3 = disease2.areas.create!(
    name: "New York City",
    location: "United States",
    latitude: 40.7128,
    longitude: -74.0060,
    reported_cases: 2000
  )
  
  # Create some users
  user1 = User.create!(
    username: "john_doe",
    email: "john@example.com",
    password: "password",
    admin: false
  )
  
  user2 = User.create!(
    username: "jane_doe",
    email: "jane@example.com",
    password: "password",
    admin: true
  )
  
  # Create some donations
  donation1 = user1.donations.create!(
    amount: 50.0,
    area: area1
  )
  
  donation2 = user2.donations.create!(
    amount: 100.0,
    area: area2
  )
  
  # Create some reviews
  review1 = user1.reviews.create!(
    comment: "This area needs more testing sites.",
    rating: 3,
    area: area1
  )
  
  review2 = user2.reviews.create!(
    comment: "Great work being done here!",
    rating: 5,
    area: area2
  )
  