export interface TourPackage {
  id: string;
  name: string;
  subtitle: string;
  badge?: 'Best Seller' | 'Featured' | 'Most Popular' | 'Eco Adventure';
  category: 'relax' | 'adventure' | 'island-hopping' | 'overland';
  duration: string;
  priceIdr?: number;
  groupType: string;
  image: string;
  rating: number;
  reviewCount: number;
  shortDesc: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    spots: string[];
  }[];
  included: string[];
  excluded: string[];
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  category: 'lake' | 'island' | 'beach' | 'underwater';
  image: string;
  description: string;
  bestTime: string;
  activities: string[];
  coordinates?: string;
  facts: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
}

export interface SearchQuery {
  destination: string;
  date: string;
  guests: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar?: string;
  rating: number;
  date: string;
  tripPackage: string;
  title: string;
  comment: string;
  highlightSpot?: string;
  verified: boolean;
  userType: 'Couple' | 'Family' | 'Solo Adventurer' | 'Group Friends';
}
