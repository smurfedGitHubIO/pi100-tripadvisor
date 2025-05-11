export interface Infrastructure {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  price: {
    amount: number;
    currency: string;
    period?: string;
  };
  rating: number;
  reviewCount: number;
  amenities: string[];
  images: {
    url: string;
    alt: string;
    isMain?: boolean;
  }[];
  category: 'hotel' | 'restaurant' | 'attraction' | 'vacation-rental' | 'flight' | 'cruise';
  tags: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  infrastructureId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpfulCount: number;
  userContributions: number;
  userLocation?: string;
  stayDate?: string;
  tripType?: 'business' | 'couples' | 'family' | 'friends' | 'solo';
  photos?: {
    url: string;
    alt: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    type: 'linkedin' | 'github' | 'twitter' | 'portfolio';
    url: string;
  }[];
}