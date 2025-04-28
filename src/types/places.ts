export interface Place {
  id: string;
  name: string;
  description: string;
  location: string;
  thumbnail: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  price?: number;
  priceLevel?: number; // 1-4, used mainly for restaurants
  categories: string[];
  amenities?: string[]; // for hotels
  highlights?: string[]; // for restaurants and attractions
  reviews?: Review[];
}

export interface Review {
  id: string;
  userName: string;
  userImage?: string;
  rating: number;
  date: string;
  text: string;
  images?: string[];
}

export interface Destination extends Place {
  country: string;
  region: string;
  bestTimeToVisit: string;
  language: string;
  currency: string;
  tagline: string;
}

export interface Hotel extends Place {
  amenities: string[];
  goodFor?: string;
  staffRating?: string;
  locationRating?: string;
  userRating?: string;
}

export interface Restaurant extends Place {
  cuisine: string[];
  menu?: Record<string, MenuItem[]>;
  highlights: string[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface Attraction extends Place {
  duration: string;
  highlights: string[];
  tips?: string[];
}