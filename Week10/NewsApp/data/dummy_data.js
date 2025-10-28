import News from "../models/news";

const MASTER_NEWS = [
  new News(
    1,
    "Senate Advances Key Infrastructure Bill After Extended Debate",
    "2025-09-28",
    "Alicia Gomez",
    "CNN",
    "Lawmakers reached a breakthrough late Sunday when the Senate voted to advance a bipartisan infrastructure bill that would invest in roads, bridges, and broadband across the country.",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
  ),
  new News(
    2,
    "Local Businesses Adjust to New Minimum Wage in Several States",
    "2025-10-02",
    "Marcus Reed",
    "AP",
    "Small and medium businesses across several states report operational adjustments after new minimum wage laws took effect this month.",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=80"
  ),
  new News(
    3,
    "Wildfires Continue to Affect Thousands in Western Regions",
    "2025-09-30",
    "Evelyn Park",
    "FOX",
    "Evacuation orders were expanded as crews battle rapidly spreading blazes; meteorologists warn of dry, windy conditions that could complicate firefighting efforts.",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
  ),
  new News(
    4,
    "G7 Leaders Announce Coordinated Climate Initiative",
    "2025-10-05",
    "Jean Dupont",
    "Reuters",
    "At the summit, G7 leaders pledged an initiative to accelerate clean energy adoption in developing countries and expand green financing.",
    "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1200&q=80"
  ),
  new News(
    5,
    "Elections in South America See High Youth Turnout",
    "2025-10-07",
    "María Alvarez",
    "BBC",
    "Young voters turned out in unprecedented numbers, changing the complexion of local races and ushering in several reform-minded candidates.",
    "https://static01.nyt.com/images/2024/09/19/business/ELECTION-NIGHT-1/ELECTION-NIGHT-1-mediumSquareAt3X.jpg"
  ),
  new News(
    6,
    "Breakthrough in Quantum Computing Promises Faster Simulations",
    "2025-09-25",
    "Dr. K. Singh",
    "TechCrunch",
    "Researchers unveiled a new architecture that reduces error rates and could make practical quantum simulations more accessible to industries.",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
  ),
  new News(
    7,
    "Startup Raises $120M to Build Developer Tools for AI",
    "2025-10-01",
    "Olivia Chen",
    "The Verge",
    "The company aims to simplify the ML model lifecycle and make experiment tracking more accessible for smaller engineering teams.",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
  ),
  new News(
    8,
    "Major Social Platform Announces New Privacy Controls",
    "2025-09-18",
    "Samir Patel",
    "Wired",
    "After months of criticism, the social platform rolled out more granular data export and deletion tools for users worldwide.",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80"
  ),
  new News(
    9,
    "US Job Market Shows Mixed Signals in September Report",
    "2025-10-03",
    "Heather Jacobs",
    "Bloomberg",
    "Employers added jobs in several service sectors while hiring slowed in manufacturing, leaving economists cautious about the recovery pace.",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
  ),
  new News(
    10,
    "International Trade Talks Resume After Months of Standoff",
    "2025-09-20",
    "Liam O'Connor",
    "Al Jazeera",
    "Negotiators returned to the table this week to discuss tariffs and agricultural trade — officials say progress is incremental but real.",
    "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=1200&q=80"
  ),
  new News(
    11,
    "Breakthrough App Aims to Reduce Food Waste in Cities",
    "2025-10-04",
    "Nina Gupta",
    "TechRadar",
    "The new app connects restaurants with surplus food to local shelters and community centers through real-time logistics.",
    "https://www.sammamish.us/media/symlrk3w/food-shelter.jpg"
  ),
  new News(
    12,
    "Historic Preservation Bill Passes in State Legislature",
    "2025-09-22",
    "Thomas Reed",
    "Local News Network",
    "Lawmakers approved funding streams for preserving historic districts and adaptive reuse projects in aging urban areas.",
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=1200&q=80"
  ),
];

// Categorize items (without modifying model) — export arrays per category:
export const US_NEWS = [
  MASTER_NEWS[0], // Senate Advances...
  MASTER_NEWS[1], // Local Businesses...
  MASTER_NEWS[2], // Wildfires...
  MASTER_NEWS[8], // US Job Market...
];

export const WORLD_NEWS = [
  MASTER_NEWS[3], // G7 Leaders...
  MASTER_NEWS[4], // Elections in South America...
  MASTER_NEWS[9], // International Trade Talks...
  MASTER_NEWS[11], // Historic Preservation Bill (treated as world/local hybrid)
];

export const TECH_NEWS = [
  MASTER_NEWS[5], // Quantum computing...
  MASTER_NEWS[6], // Startup raises...
  MASTER_NEWS[7], // Social Platform privacy...
  MASTER_NEWS[10], // App reduces food waste...
];

export default MASTER_NEWS;
