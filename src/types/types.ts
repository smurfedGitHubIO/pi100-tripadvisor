export interface Infrastructure {
  id: number;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  username: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}