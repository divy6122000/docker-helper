db = db.getSiblingDB("ad16_readestate_db_255"); // Replace with your database name

const staticQuestions = [
  {
    question: "State: Please select what state you live in:",
    type: "select",
    options: [
      { id: 1, value: "AL", label: "Alabama" },
      { id: 2, value: "AK", label: "Alaska" },
      { id: 3, value: "AZ", label: "Arizona" },
      { id: 4, value: "AR", label: "Arkansas" },
      { id: 5, value: "CA", label: "California" },
      { id: 6, value: "CO", label: "Colorado" },
      { id: 7, value: "CT", label: "Connecticut" },
      { id: 8, value: "DE", label: "Delaware" },
      { id: 9, value: "FL", label: "Florida" },
      { id: 10, value: "GA", label: "Georgia" },
      { id: 11, value: "HI", label: "Hawaii" },
      { id: 12, value: "ID", label: "Idaho" },
      { id: 13, value: "IL", label: "Illinois" },
      { id: 14, value: "IN", label: "Indiana" },
      { id: 15, value: "IA", label: "Iowa" },
      { id: 16, value: "KS", label: "Kansas" },
      { id: 17, value: "KY", label: "Kentucky" },
      { id: 18, value: "LA", label: "Louisiana" },
      { id: 19, value: "ME", label: "Maine" },
      { id: 20, value: "MD", label: "Maryland" },
      { id: 21, value: "MA", label: "Massachusetts" },
      { id: 22, value: "MI", label: "Michigan" },
      { id: 23, value: "MN", label: "Minnesota" },
      { id: 24, value: "MS", label: "Mississippi" },
      { id: 25, value: "MO", label: "Missouri" },
      { id: 26, value: "MT", label: "Montana" },
      { id: 27, value: "NE", label: "Nebraska" },
      { id: 28, value: "NV", label: "Nevada" },
      { id: 29, value: "NH", label: "New Hampshire" },
      { id: 30, value: "NJ", label: "New Jersey" },
      { id: 31, value: "NM", label: "New Mexico" },
      { id: 32, value: "NY", label: "New York" },
      { id: 33, value: "NC", label: "North Carolina" },
      { id: 34, value: "ND", label: "North Dakota" },
      { id: 35, value: "OH", label: "Ohio" },
      { id: 36, value: "OK", label: "Oklahoma" },
      { id: 37, value: "OR", label: "Oregon" },
      { id: 38, value: "PA", label: "Pennsylvania" },
      { id: 39, value: "RI", label: "Rhode Island" },
      { id: 40, value: "SC", label: "South Carolina" },
      { id: 41, value: "SD", label: "South Dakota" },
      { id: 42, value: "TN", label: "Tennessee" },
      { id: 43, value: "TX", label: "Texas" },
      { id: 44, value: "UT", label: "Utah" },
      { id: 45, value: "VT", label: "Vermont" },
      { id: 46, value: "VA", label: "Virginia" },
      { id: 47, value: "WA", label: "Washington" },
      { id: 48, value: "WV", label: "West Virginia" },
      { id: 49, value: "WI", label: "Wisconsin" },
      { id: 50, value: "WY", label: "Wyoming" },
    ],
    required: true,
    status: true,
  },
  {
    question:
      "Type of Area: Do you want to live in the city, suburbs, or in the country?",
    type: "select",
    options: [
      { id: 1, value: "city", label: "City" },
      { id: 2, value: "country", label: "Country" },
      { id: 3, value: "suburbs", label: "Suburbs" },
    ],
    required: true,
    status: true,
  },
  {
    question:
      "Transportation: Do you want to have access to public transportation or a major highway?",
    type: "select",
    options: [
      { id: 1, value: "public", label: "Public Transportation" },
      { id: 2, value: "highway", label: "Major Highway" },
    ],
    required: true,
  },
  {
    question: "Commute: How long of a commute are you willing to have?",
    type: "select",
    options: [
      {
        id: 1,
        value: "less than 30 minutes",
        label: "Less than 30 minutes",
      },
      { id: 2, value: "30 minutes", label: "30 minutes" },
      { id: 2, value: "less than an hour", label: "Less than an hour" },
      { id: 2, value: "more than an hour", label: "More than an hour" },
    ],
    required: true,
  },
  {
    question: "Schools: Do you need to be close to schools? If so, what type?",
    type: "select",
    options: [
      { id: 1, value: "public", label: "Public" },
      { id: 2, value: "private", label: "Private" },
      { id: 2, value: "not important", label: "Not Important" },
    ],
    required: true,
  },
  {
    question:
      "Place of Worship: Do you need to be close to a place of worship? If so, what type?",
    type: "text",
    required: true,
  },
  {
    question: "HOA Fees: Do you want your neighborhood to have HOA fees?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
    ],
    required: true,
  },
  {
    question: "Acceptable HOA Fee: If yes, how much of a fee is acceptable?",
    type: "select",
    options: [
      { id: 1, value: "$100 a month", label: "$100 a month" },
      { id: 2, value: "$250 a month", label: "$250 a month" },
      {
        id: 2,
        value: "more than $300 a month",
        label: "More than $300 a month",
      },
    ],
    required: true,
  },
  {
    question:
      "Security: Do you need the presence of neighborhood watch programs or security services?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
    ],
    required: true,
  },
  {
    question:
      "Well-lit Streets: Does your dream neighborhood need to have well-lit streets and public spaces?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
    ],
    required: true,
  },
  {
    question: "Price Range: What price range is your dream house?",
    type: "number",
    required: true,
  },
  {
    question: "Rent or Own: Do you want to rent or own?",
    type: "select",
    options: [
      { id: 1, value: "rent", label: "Rent" },
      { id: 2, value: "own", label: "Own" },
    ],
    required: true,
  },
  {
    question:
      "Amenities: How close do you need to be to amenities such as grocery stores, pharmacies, hospitals, etc.?",
    type: "select",
    options: [
      { id: 1, value: "walking distance", label: "Walking distance" },
      {
        id: 2,
        value: "15 minute drive or less",
        label: "15-minute drive or less",
      },
      {
        id: 3,
        value: "30 minute drive or less",
        label: "30-minute drive or less",
      },
      {
        id: 4,
        value: "happy commuting an hour or more",
        label: "Happy commuting an hour or more",
      },
    ],
    required: true,
  },
  {
    question:
      "Recreational Facilities: What level of proximity to recreational facilities (parks, gyms, sports clubs) are you looking for?",
    type: "select",
    options: [
      { id: 1, value: "walking distance", label: "Walking distance" },
      {
        id: 2,
        value: "15 minute drive or less",
        label: "15-minute drive or less",
      },
      {
        id: 3,
        value: "30 minute drive or less",
        label: "30-minute drive or less",
      },
      {
        id: 4,
        value: "happy commuting an hour or more",
        label: "Happy commuting an hour or more",
      },
    ],
    required: true,
  },
  {
    question:
      "Restaurants and Cafes: What level of proximity to restaurants, cafes, and entertainment options nearby are you looking for?",
    type: "select",
    options: [
      { id: 1, value: "walking distance", label: "Walking distance" },
      {
        id: 2,
        value: "15 minute drive or less",
        label: "15-minute drive or less",
      },
      {
        id: 3,
        value: "30 minute drive or less",
        label: "30-minute drive or less",
      },
      {
        id: 4,
        value: "happy commuting an hour or more",
        label: "Happy commuting an hour or more",
      },
    ],
    required: true,
  },
  {
    question:
      "Age Groups: What is the age group of residents you prefer? (Young families, retirees, mix)",
    type: "select",
    options: [
      { id: 1, value: "young families", label: "Young families" },
      { id: 2, value: "retirees", label: "Retirees" },
      { id: 3, value: "mix", label: "Mix" },
    ],
    required: true,
  },
  {
    question:
      "Cultural Diversity: How important is cultural diversity and inclusivity as a consideration?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "important", label: "Important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 3, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Community Involvement: Does the community need to have community involvement and events? (Green spaces, etc.)",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
    ],
    required: true,
  },
  {
    question:
      "Proximity to Parks: How close to parks, trails, and recreational areas do you need to be?",
    type: "select",
    options: [
      { id: 1, value: "walking distance", label: "Walking distance" },
      {
        id: 2,
        value: "15 minute drive or less",
        label: "15-minute drive or less",
      },
      {
        id: 3,
        value: "30 minute drive or less",
        label: "30-minute drive or less",
      },
      {
        id: 4,
        value: "happy commuting an hour or more",
        label: "Happy commuting an hour or more",
      },
    ],
    required: true,
  },
  {
    question:
      "Pollution and Air Quality: How important is pollution levels and air quality?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "important", label: "Important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Noise and Nuisances: How important is the presence of noise and nuisances?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Future Development and Zoning: How important is future development and zoning? (Planned construction, zoning regulations, etc.)",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Neighborhood Character: How important is neighborhood character? (Historic significance, architecture, aesthetic appeal, sense of community, infrastructure, utilities)",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Quality of Infrastructure: How important is the quality of roads, sidewalks, and public transportation?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "important", label: "Important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "High-speed Internet and Utilities: Does there need to be high-speed internet and utilities?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
      { id: 3, value: "indifferent", label: "Indifferent" },
    ],
    required: true,
  },
  {
    question:
      "Pet-Friendly: Does there need to be dog parks or pet-friendly establishments? (Pet-related services, etc.)",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
      { id: 3, value: "indifferent", label: "Indifferent" },
    ],
    required: true,
  },
  {
    question:
      "Parking: Does the neighborhood need to have the availability of parking spaces or garages?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
      { id: 3, value: "indifferent", label: "Indifferent" },
    ],
    required: true,
  },
  {
    question:
      "Bike Lanes: Does the neighborhood need bike lanes and bike-sharing programs?",
    type: "select",
    options: [
      { id: 1, value: "yes", label: "Yes" },
      { id: 2, value: "no", label: "No" },
      { id: 3, value: "indifferent", label: "Indifferent" },
    ],
    required: true,
  },
  {
    question:
      "Government Services: How important is the efficiency of local government services? (Trash collection, street maintenance, etc.)",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Property Ownership vs. Renting: How important is the ratio of property ownership vs. renting?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
  {
    question:
      "Home ownership Opportunities: How important are home ownership opportunities and real estate market trends?",
    type: "select",
    options: [
      { id: 1, value: "very important", label: "Very important" },
      { id: 2, value: "somewhat important", label: "Somewhat important" },
      { id: 3, value: "neutral", label: "Neutral" },
      { id: 4, value: "not important", label: "Not important" },
    ],
    required: true,
  },
];

// Insert into the "questions" collection (lowercase plural by default)
db.questions.insertMany(staticQuestions);
