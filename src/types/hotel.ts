export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  price: number;
  amenities: string[];
}