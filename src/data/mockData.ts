import type { Destination, Hotel, Restaurant, Attraction, Review } from '../types/places';

const reviews: Review[] = [
  {
    id: '1',
    userName: 'Sarah Johnson',
    rating: 4.5,
    date: '2023-06-12',
    text: 'Absolutely loved my experience! The place exceeded all my expectations. The staff was incredibly helpful and the facilities were top-notch. I would definitely recommend this place to anyone looking for a great experience in the area.'
  },
  {
    id: '2',
    userName: 'Michael Chen',
    rating: 5,
    date: '2023-05-28',
    text: 'Best experience I\'ve had in years. Everything from start to finish was perfect. The attention to detail is amazing and really shows how much they care about their customers. Will definitely be coming back!'
  },
  {
    id: '3',
    userName: 'Emma Wilson',
    rating: 3.5,
    date: '2023-07-03',
    text: 'Good but not great. While the main aspects were quite good, there were a few things that could be improved. The service was a bit slow at times, and I felt that the price was a bit high for what was offered. Otherwise, a decent experience.'
  },
  {
    id: '4',
    userName: 'David Rodriguez',
    rating: 4,
    date: '2023-04-19',
    text: 'Really enjoyed my time here. The ambiance was perfect and everything was clean and well-maintained. Only reason for not giving 5 stars is that it was quite crowded when we visited, but that\'s more a testament to its popularity.'
  },
  {
    id: '5',
    userName: 'Priya Patel',
    rating: 5,
    date: '2023-06-30',
    text: 'Perfect in every way! From the moment we arrived until our departure, everything was handled with the utmost professionalism. Can\'t recommend highly enough and already planning my next visit.'
  }
];

const destinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    description: 'Paris, the City of Light, is a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    location: 'Paris',
    country: 'France',
    region: 'Île-de-France',
    thumbnail: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
    images: [
      'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg',
      'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
      'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg'
    ],
    rating: 4.7,
    reviewCount: 12543,
    bestTimeToVisit: 'April to June, September to October',
    language: 'French',
    currency: 'Euro (€)',
    categories: ['City', 'Cultural', 'Romantic'],
    tagline: 'The City of Light awaits with iconic landmarks, world-class cuisine, and timeless charm.'
  },
  {
    id: 'bali',
    name: 'Bali',
    description: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur, and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.',
    location: 'Bali',
    country: 'Indonesia',
    region: 'Lesser Sunda Islands',
    thumbnail: 'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg',
    images: [
      'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg',
      'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
    ],
    rating: 4.6,
    reviewCount: 9876,
    bestTimeToVisit: 'April to October',
    language: 'Indonesian, Balinese',
    currency: 'Indonesian Rupiah (IDR)',
    categories: ['Beach', 'Cultural', 'Nature'],
    tagline: 'Experience spiritual awakening and tropical paradise on Indonesia\'s most enchanting island.'
  },
  {
    id: 'new-york',
    name: 'New York',
    description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    location: 'New York',
    country: 'United States',
    region: 'New York State',
    thumbnail: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg',
    images: [
      'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg',
      'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg',
      'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
      'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg',
      'https://images.pexels.com/photos/2260827/pexels-photo-2260827.jpeg'
    ],
    rating: 4.5,
    reviewCount: 15678,
    bestTimeToVisit: 'April to June, September to November',
    language: 'English',
    currency: 'US Dollar ($)',
    categories: ['City', 'Cultural', 'Shopping'],
    tagline: 'The city that never sleeps offers an unmatched urban experience with world-class culture and cuisine.'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    description: 'Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city\'s many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).',
    location: 'Tokyo',
    country: 'Japan',
    region: 'Kantō',
    thumbnail: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-tokyo-161251.jpeg',
    images: [
      'https://images.pexels.com/photos/161251/senso-ji-temple-japan-tokyo-161251.jpeg',
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg',
      'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
    ],
    rating: 4.8,
    reviewCount: 11234,
    bestTimeToVisit: 'March to May, September to November',
    language: 'Japanese',
    currency: 'Japanese Yen (¥)',
    categories: ['City', 'Cultural', 'Food'],
    tagline: 'Ultramodern meets ancient tradition in Japan\'s vibrant, neon-lit capital city.'
  },
  {
    id: 'rome',
    name: 'Rome',
    description: 'Rome, Italy's capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter's Basilica and the Vatican Museums, which house masterpieces such as Michelangelo's Sistine Chapel frescoes.',
    location: 'Rome',
    country: 'Italy',
    region: 'Lazio',
    thumbnail: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg',
    images: [
      'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg',
      'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg',
      'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg',
      'https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg',
      'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg'
    ],
    rating: 4.6,
    reviewCount: 10987,
    bestTimeToVisit: 'April to June, September to October',
    language: 'Italian',
    currency: 'Euro (€)',
    categories: ['City', 'Historical', 'Cultural'],
    tagline: 'Experience the eternal city where ancient history and modern life blend spectacularly.'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    location: 'Santorini',
    country: 'Greece',
    region: 'Cyclades',
    thumbnail: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    images: [
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      'https://images.pexels.com/photos/3224231/pexels-photo-3224231.jpeg',
      'https://images.pexels.com/photos/3331839/pexels-photo-3331839.jpeg',
      'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg',
      'https://images.pexels.com/photos/1784236/pexels-photo-1784236.jpeg'
    ],
    rating: 4.7,
    reviewCount: 8765,
    bestTimeToVisit: 'April to May, September to October',
    language: 'Greek',
    currency: 'Euro (€)',
    categories: ['Island', 'Romantic', 'Beach'],
    tagline: 'Azure domes and sunsets on the Aegean await on this idyllic Greek island paradise.'
  }
];

const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Grand Palace Hotel',
    description: 'Experience luxury like never before at the Grand Palace Hotel. Located in the heart of Paris, our 5-star accommodation offers stunning views of the Eiffel Tower, spacious rooms with elegant décor, and world-class amenities. Enjoy our rooftop pool, Michelin-starred restaurant, and full-service spa during your stay.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg',
    images: [
      'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg',
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg',
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg',
      'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg'
    ],
    rating: 4.8,
    reviewCount: 1243,
    price: 350,
    categories: ['Luxury', 'Business', 'Family'],
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Restaurant', 'Room Service', 'Business Center', 'Concierge'],
    reviews
  },
  {
    id: 'hotel-2',
    name: 'Tropical Paradise Resort',
    description: 'Escape to our beachfront resort in beautiful Bali. Tropical Paradise Resort offers private villas surrounded by lush gardens, each with its own plunge pool and direct beach access. Indulge in traditional Balinese spa treatments, savor fresh seafood at our oceanfront restaurant, and enjoy water sports and cultural excursions.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    images: [
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
      'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg',
      'https://images.pexels.com/photos/1488516/pexels-photo-1488516.png',
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg'
    ],
    rating: 4.9,
    reviewCount: 876,
    price: 420,
    categories: ['Luxury', 'Beach', 'Romantic'],
    amenities: ['Free WiFi', 'Private Pool', 'Spa', 'Beachfront', 'Restaurant', 'Room Service', 'Airport Shuttle', 'Yoga Classes'],
    reviews
  },
  {
    id: 'hotel-3',
    name: 'Urban Loft Hotel',
    description: 'Stay in the heart of New York City at our contemporary Urban Loft Hotel. Our stylish accommodation features open-plan rooms with high ceilings, modern furnishings, and city views. Located in trendy SoHo, you\'ll be steps away from boutique shopping, art galleries, and acclaimed restaurants. Perfect for both business and leisure travelers.',
    location: 'New York',
    thumbnail: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'
    ],
    rating: 4.5,
    reviewCount: 932,
    price: 280,
    categories: ['Boutique', 'Business', 'City'],
    amenities: ['Free WiFi', 'Fitness Center', 'Rooftop Bar', 'Restaurant', 'Business Center', 'Concierge', 'Laundry Service'],
    reviews
  },
  {
    id: 'hotel-4',
    name: 'Sakura Ryokan',
    description: 'Experience traditional Japanese hospitality at Sakura Ryokan. Our historic inn offers tatami-matted rooms, sliding fusuma doors, and communal hot spring baths. Enjoy kaiseki multi-course dinners featuring seasonal local ingredients. Located in a peaceful Tokyo neighborhood, we provide an authentic Japanese stay with modern comforts.',
    location: 'Tokyo',
    thumbnail: 'https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg',
    images: [
      'https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg',
      'https://images.pexels.com/photos/139762/pexels-photo-139762.jpeg',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
      'https://images.pexels.com/photos/3735378/pexels-photo-3735378.jpeg'
    ],
    rating: 4.7,
    reviewCount: 654,
    price: 300,
    categories: ['Boutique', 'Cultural', 'Luxury'],
    amenities: ['Free WiFi', 'Hot Spring Bath', 'Traditional Dining', 'Garden', 'Tea Ceremony', 'Yukata Provided', 'Concierge'],
    reviews
  },
  {
    id: 'hotel-5',
    name: 'Colosseum View Suites',
    description: 'Stay in a historic building with modern amenities at Colosseum View Suites. As the name suggests, our boutique hotel offers spectacular views of the ancient Colosseum from select rooms and our rooftop terrace. Enjoy spacious suites with Italian marble bathrooms, complimentary breakfast featuring local specialties, and personalized concierge service.',
    location: 'Rome',
    thumbnail: 'https://images.pexels.com/photos/1582725/pexels-photo-1582725.jpeg',
    images: [
      'https://images.pexels.com/photos/1582725/pexels-photo-1582725.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg'
    ],
    rating: 4.6,
    reviewCount: 789,
    price: 290,
    categories: ['Boutique', 'Romantic', 'Historic'],
    amenities: ['Free WiFi', 'Rooftop Terrace', 'Breakfast Included', 'Air Conditioning', 'Concierge', 'Airport Shuttle', 'Minibar'],
    reviews
  },
  {
    id: 'hotel-6',
    name: 'Aegean Cliffside Villas',
    description: 'Perched on the caldera cliff, Aegean Cliffside Villas offers breathtaking views of Santorini\'s famous sunset. Our whitewashed villas feature private terraces with heated plunge pools, Cycladic architecture, and luxurious amenities. Enjoy personalized service, including private chef options and exclusive wine tastings from local vineyards.',
    location: 'Santorini',
    thumbnail: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
      'https://images.pexels.com/photos/3625632/pexels-photo-3625632.jpeg',
      'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg'
    ],
    rating: 4.9,
    reviewCount: 567,
    price: 450,
    categories: ['Luxury', 'Romantic', 'Boutique'],
    amenities: ['Free WiFi', 'Private Pool', 'Breakfast Included', 'Sea View', 'Concierge', 'Airport Shuttle', 'In-room Dining'],
    reviews
  },
  {
    id: 'hotel-7',
    name: 'Parisian Boutique Hotel',
    description: 'Experience the charm of Paris at our intimate boutique hotel located in the trendy Marais district. Our individually designed rooms blend classic French elegance with modern comfort. Start your day with freshly baked croissants in our courtyard garden, and end it with a glass of wine at our cozy bar. Our knowledgeable staff will help you discover hidden local gems.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg',
    images: [
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg',
      'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
    ],
    rating: 4.7,
    reviewCount: 432,
    price: 210,
    categories: ['Boutique', 'Budget', 'Cultural'],
    amenities: ['Free WiFi', 'Breakfast Included', 'Garden', 'Bar', 'Concierge', 'Bicycle Rental', 'Air Conditioning'],
    reviews
  },
  {
    id: 'hotel-8',
    name: 'Ubud Jungle Retreat',
    description: 'Immerse yourself in Bali\'s natural beauty at our eco-friendly jungle retreat. Nestled among rice paddies and tropical forests, our sustainable bamboo bungalows offer an authentic back-to-nature experience without sacrificing comfort. Enjoy daily yoga classes, farm-to-table dining, and guided nature walks. A peaceful sanctuary for wellness seekers and nature lovers.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    images: [
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg',
      'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg'
    ],
    rating: 4.6,
    reviewCount: 345,
    price: 180,
    categories: ['Eco', 'Wellness', 'Budget'],
    amenities: ['Free WiFi', 'Yoga Studio', 'Organic Restaurant', 'Pool', 'Spa', 'Shuttle Service', 'Cooking Classes'],
    reviews
  }
];

const restaurants: Restaurant[] = [
  {
    id: 'restaurant-1',
    name: 'Le Petit Bistro',
    description: 'Experience authentic French cuisine in our charming bistro located in the heart of Paris. Our chef combines traditional recipes with innovative techniques to create memorable dishes. Enjoy classics like coq au vin and beef bourguignon alongside seasonal specialties, complemented by an extensive selection of French wines.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    images: [
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      'https://images.pexels.com/photos/5638645/pexels-photo-5638645.jpeg',
      'https://images.pexels.com/photos/691148/pexels-photo-691148.jpeg',
      'https://images.pexels.com/photos/373006/pexels-photo-373006.jpeg'
    ],
    rating: 4.7,
    reviewCount: 532,
    priceLevel: 3,
    categories: ['French', 'Fine Dining', 'Romantic'],
    cuisine: ['French', 'European'],
    highlights: ['Outdoor Seating', 'Romantic Atmosphere', 'Wine Selection', 'Locally Sourced', 'Vegetarian Options'],
    reviews
  },
  {
    id: 'restaurant-2',
    name: 'Warung Organic',
    description: 'Taste the authentic flavors of Bali at our family-owned restaurant. We serve traditional Balinese and Indonesian dishes made with organic, locally sourced ingredients from our own garden. Our open-air setting surrounded by rice paddies provides a truly immersive dining experience. Don\'t miss our famous babi guling (suckling pig) and fresh seafood options.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
    images: [
      'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
      'https://images.pexels.com/photos/6646233/pexels-photo-6646233.jpeg'
    ],
    rating: 4.8,
    reviewCount: 345,
    priceLevel: 2,
    categories: ['Indonesian', 'Organic', 'Local'],
    cuisine: ['Indonesian', 'Balinese', 'Seafood'],
    highlights: ['Outdoor Seating', 'Farm-to-Table', 'Vegetarian Options', 'Vegan Options', 'Scenic View', 'Family-friendly'],
    reviews
  },
  {
    id: 'restaurant-3',
    name: 'Brooklyn Pizza Co.',
    description: 'Get a taste of New York\'s famous pizza at our Brooklyn pizzeria. Our wood-fired oven produces perfectly crisp yet chewy crusts topped with house-made sauce and premium ingredients. Choose from classic favorites or creative specialty pies. Complete your meal with craft beers from local breweries and finish with our homemade cannoli.',
    location: 'New York',
    thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg',
    images: [
      'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg',
      'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg',
      'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg'
    ],
    rating: 4.6,
    reviewCount: 789,
    priceLevel: 2,
    categories: ['Italian', 'Pizza', 'Casual'],
    cuisine: ['Italian', 'American', 'Pizza'],
    highlights: ['Takeaway', 'Delivery', 'Craft Beer', 'Family-friendly', 'Vegetarian Options', 'Late Night'],
    reviews
  },
  {
    id: 'restaurant-4',
    name: 'Sakura Sushi House',
    description: 'Indulge in premium quality sushi and Japanese specialties at our traditional restaurant in Tokyo. Our master chef, with over 30 years of experience, selects the freshest fish daily from the renowned Tsukiji market. Experience the art of omakase (chef\'s selection) at our intimate sushi counter, or enjoy izakaya-style small plates in our elegant dining room.',
    location: 'Tokyo',
    thumbnail: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
    images: [
      'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
      'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
      'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg',
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg'
    ],
    rating: 4.9,
    reviewCount: 421,
    priceLevel: 4,
    categories: ['Japanese', 'Sushi', 'Fine Dining'],
    cuisine: ['Japanese', 'Sushi', 'Seafood'],
    highlights: ['Omakase', 'Sake Selection', 'Intimate Setting', 'Traditional Experience', 'Dinner Only'],
    reviews
  },
  {
    id: 'restaurant-5',
    name: 'Trattoria Roma',
    description: 'Enjoy authentic Roman cuisine at our family-run trattoria located in a historic building near the Pantheon. Our recipes have been passed down through generations, featuring classic dishes like carbonara, cacio e pepe, and saltimbocca alla romana. Dine in our cozy interior or on our atmospheric piazza-side terrace while savoring wines from local Lazio vineyards.',
    location: 'Rome',
    thumbnail: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
    images: [
      'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
      'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg',
      'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
      'https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg'
    ],
    rating: 4.7,
    reviewCount: 678,
    priceLevel: 2,
    categories: ['Italian', 'Traditional', 'Family-friendly'],
    cuisine: ['Italian', 'Roman', 'Mediterranean'],
    highlights: ['Outdoor Seating', 'Wine Selection', 'Family-run', 'Locally Sourced', 'Historic Setting'],
    reviews
  },
  {
    id: 'restaurant-6',
    name: 'Caldera View Taverna',
    description: 'Dine with the most breathtaking sunset views in Santorini at our cliffside taverna. We serve traditional Greek and Mediterranean cuisine using local ingredients, including fresh-caught seafood, Santorinian tomatoes, and white eggplant. Enjoy classics like moussaka and souvlaki alongside our signature dishes, paired with wines from the island\'s volcanic vineyards.',
    location: 'Santorini',
    thumbnail: 'https://images.pexels.com/photos/3775352/pexels-photo-3775352.jpeg',
    images: [
      'https://images.pexels.com/photos/3775352/pexels-photo-3775352.jpeg',
      'https://images.pexels.com/photos/11291333/pexels-photo-11291333.jpeg',
      'https://images.pexels.com/photos/11290687/pexels-photo-11290687.jpeg',
      'https://images.pexels.com/photos/11291366/pexels-photo-11291366.jpeg'
    ],
    rating: 4.8,
    reviewCount: 543,
    priceLevel: 3,
    categories: ['Greek', 'Seafood', 'Scenic'],
    cuisine: ['Greek', 'Mediterranean', 'Seafood'],
    highlights: ['Outdoor Seating', 'Sunset View', 'Wine Selection', 'Locally Sourced', 'Romantic Atmosphere'],
    reviews
  },
  {
    id: 'restaurant-7',
    name: 'Café Montmartre',
    description: 'Experience Parisian café culture at our charming establishment in the artistic Montmartre district. Enjoy classic French pastries, light bistro fare, and exceptional coffee in a setting that has inspired artists for generations. Our terrace offers perfect people-watching, while our interior retains authentic Art Nouveau details from the early 1900s.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
    images: [
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
      'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      'https://images.pexels.com/photos/2919590/pexels-photo-2919590.jpeg'
    ],
    rating: 4.5,
    reviewCount: 321,
    priceLevel: 2,
    categories: ['French', 'Café', 'Breakfast'],
    cuisine: ['French', 'Café', 'Bakery'],
    highlights: ['Outdoor Seating', 'Historic Setting', 'People Watching', 'Coffee', 'Pastries', 'Breakfast'],
    reviews
  },
  {
    id: 'restaurant-8',
    name: 'Seafood Beach Grill',
    description: 'Enjoy the freshest seafood right on the beach at our relaxed beachfront grill in Bali. Watch the sunset over the ocean as you dine with your feet in the sand. Our grill masters prepare the day\'s catch to perfection, accompanied by tropical cocktails and local Balinese side dishes. Don\'t miss our famous grilled fish in banana leaf and seafood platters to share.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/2253688/pexels-photo-2253688.jpeg',
    images: [
      'https://images.pexels.com/photos/2253688/pexels-photo-2253688.jpeg',
      'https://images.pexels.com/photos/3296397/pexels-photo-3296397.jpeg',
      'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg',
      'https://images.pexels.com/photos/1093136/pexels-photo-1093136.jpeg'
    ],
    rating: 4.6,
    reviewCount: 456,
    priceLevel: 2,
    categories: ['Seafood', 'Grill', 'Beach'],
    cuisine: ['Seafood', 'Indonesian', 'Grill'],
    highlights: ['Beachfront', 'Sunset View', 'Fresh Seafood', 'Outdoor Seating', 'Live Music', 'Cocktails'],
    reviews
  }
];

const attractions: Attraction[] = [
  {
    id: 'attraction-1',
    name: 'Eiffel Tower',
    description: 'The iconic wrought-iron tower that has become a global symbol of France. Built by Gustave Eiffel for the 1889 World\'s Fair, it offers breathtaking views of Paris from its three observation levels. Visit during the day for panoramic views of the cityscape, or at night when the tower sparkles with thousands of lights for five minutes every hour.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
    images: [
      'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
      'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg',
      'https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg',
      'https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg'
    ],
    rating: 4.7,
    reviewCount: 5432,
    price: 25,
    categories: ['Historic', 'Landmark', 'Views'],
    duration: '2-3 hours',
    highlights: ['Spectacular city views', 'Restaurant on the second floor', 'Light show at night', 'Historical exhibitions'],
    tips: ['Book tickets online to avoid long lines', 'Visit just before sunset to experience both day and night views', 'Consider taking the stairs to the first level to avoid elevator queues'],
    reviews
  },
  {
    id: 'attraction-2',
    name: 'Sacred Monkey Forest Sanctuary',
    description: 'A natural reserve and temple complex in Ubud that\'s home to over 700 Balinese long-tailed macaques. Explore the lush forest with ancient temples and stone sculptures, all while observing the monkeys in their natural habitat. The sanctuary is dedicated to promoting harmonious relationships between humans, monkeys, and nature, following the Hindu principle of Tri Hita Karana.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/2286361/pexels-photo-2286361.jpeg',
    images: [
      'https://images.pexels.com/photos/2286361/pexels-photo-2286361.jpeg',
      'https://images.pexels.com/photos/2865903/pexels-photo-2865903.jpeg',
      'https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg',
      'https://images.pexels.com/photos/60835/peacock-white-zoo-rain-60835.jpeg'
    ],
    rating: 4.5,
    reviewCount: 3245,
    price: 10,
    categories: ['Nature', 'Cultural', 'Wildlife'],
    duration: '1-2 hours',
    highlights: ['Observe macaques in their natural habitat', 'Beautiful ancient temples', 'Lush forest trails', 'Cultural experience'],
    tips: ['Keep valuable items secure as monkeys may grab them', 'Don\'t bring food or plastic bags', 'Avoid direct eye contact with monkeys as they interpret it as a threat'],
    reviews
  },
  {
    id: 'attraction-3',
    name: 'Metropolitan Museum of Art',
    description: 'One of the world\'s largest and most prestigious art museums, with a collection spanning 5,000 years of world culture. The Met\'s collection includes more than two million works, from ancient Egyptian artifacts to contemporary art. Highlights include an extensive collection of European paintings, an American Wing, and impressive displays of costumes, musical instruments, and arms and armor.',
    location: 'New York',
    thumbnail: 'https://images.pexels.com/photos/9008895/pexels-photo-9008895.jpeg',
    images: [
      'https://images.pexels.com/photos/9008895/pexels-photo-9008895.jpeg',
      'https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg',
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
      'https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg'
    ],
    rating: 4.8,
    reviewCount: 4567,
    price: 25,
    categories: ['Museums', 'Art', 'Cultural'],
    duration: '3-4 hours',
    highlights: ['Vast collection spanning 5,000 years', 'Egyptian Temple of Dendur', 'European Masters paintings', 'Rooftop garden with city views', 'Frequently changing special exhibitions'],
    tips: ['The recommended admission is optional - you can pay what you wish', 'Visit early on weekdays to avoid crowds', 'Download the Met app for guided tours', 'The museum is closed on Wednesdays'],
    reviews
  },
  {
    id: 'attraction-4',
    name: 'Tokyo Skytree',
    description: 'The tallest tower in Japan and the second tallest structure in the world, offering spectacular panoramic views of Tokyo and beyond. On clear days, you can even see Mount Fuji. The tower houses two observation decks, restaurants, shops, and an aquarium. Its innovative design combines modern technology with traditional Japanese aesthetics, inspired by the principles of old Tokyo.',
    location: 'Tokyo',
    thumbnail: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
    images: [
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
      'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      'https://images.pexels.com/photos/5169146/pexels-photo-5169146.jpeg'
    ],
    rating: 4.6,
    reviewCount: 3421,
    price: 30,
    categories: ['Landmark', 'Views', 'Modern'],
    duration: '2-3 hours',
    highlights: ['Spectacular panoramic views', 'Glass floor sections for thrilling perspectives', 'Shopping and dining complex at the base', 'Special light-up displays at night'],
    tips: ['Visit on weekdays and early morning to avoid crowds', 'Check weather forecasts for the best visibility', 'Purchase tickets in advance to avoid lines', 'Try to time your visit for sunset for day and night views'],
    reviews
  },
  {
    id: 'attraction-5',
    name: 'Colosseum',
    description: 'The largest ancient amphitheater ever built and an iconic symbol of Imperial Rome. Completed in 80 AD, it once hosted gladiatorial contests, public spectacles, animal hunts, executions, and theatrical dramas. Today, visitors can explore the arena floor, underground chambers, and multiple levels of seating that once accommodated up to 80,000 spectators, and learn about the fascinating history of this UNESCO World Heritage site.',
    location: 'Rome',
    thumbnail: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg',
    images: [
      'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg',
      'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg',
      'https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg',
      'https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg'
    ],
    rating: 4.8,
    reviewCount: 6789,
    price: 18,
    categories: ['Historic', 'Ancient', 'UNESCO'],
    duration: '2-3 hours',
    highlights: ['Marvel at ancient Roman engineering', 'Access to the arena floor', 'Underground chambers where gladiators and animals waited', 'Multimedia exhibits explaining the Colosseum\'s history'],
    tips: ['Buy combined tickets with the Roman Forum and Palatine Hill online', 'Consider a guided tour to fully appreciate the history', 'Visit early morning or late afternoon to avoid crowds and heat in summer', 'Bring water and wear comfortable shoes'],
    reviews
  },
  {
    id: 'attraction-6',
    name: 'Oia Sunset Point',
    description: 'The most famous spot in Santorini to witness the breathtaking sunset over the Aegean Sea. Located in the picturesque village of Oia, with its iconic white-washed buildings and blue domes, this viewpoint offers unobstructed panoramas of the sun sinking into the sea, painting the sky in spectacular hues of orange, pink, and purple, while illuminating the caldera and surrounding islands.',
    location: 'Santorini',
    thumbnail: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    images: [
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      'https://images.pexels.com/photos/3224231/pexels-photo-3224231.jpeg',
      'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg',
      'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg'
    ],
    rating: 4.9,
    reviewCount: 3421,
    price: 0,
    categories: ['Scenic', 'Romantic', 'Photography'],
    duration: '1-2 hours',
    highlights: ['World-famous sunset views', 'Picturesque white Cycladic architecture', 'Spectacular caldera vistas', 'Romantic atmosphere'],
    tips: ['Arrive at least 1-2 hours before sunset to secure a good spot', 'Consider watching from a restaurant with a reservation instead of the crowded main viewpoint', 'Bring a camera with plenty of battery and storage', 'Stay a bit after sunset when the crowds disperse for peaceful blue hour photos'],
    reviews
  },
  {
    id: 'attraction-7',
    name: 'Louvre Museum',
    description: 'The world\'s largest art museum and a historic monument in Paris. Home to thousands of works of art, including the Mona Lisa and the Venus de Milo, the museum is housed in the Louvre Palace, originally built as a fortress in the late 12th century. The museum\'s glass pyramid entrance, designed by I.M. Pei, has become an iconic symbol of Paris in its own right.',
    location: 'Paris',
    thumbnail: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    images: [
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
      'https://images.pexels.com/photos/3186036/pexels-photo-3186036.jpeg',
      'https://images.pexels.com/photos/3863807/pexels-photo-3863807.jpeg',
      'https://images.pexels.com/photos/7593923/pexels-photo-7593923.jpeg'
    ],
    rating: 4.7,
    reviewCount: 7654,
    price: 15,
    categories: ['Museums', 'Art', 'Historic'],
    duration: '3-5 hours',
    highlights: ['Home to the Mona Lisa', 'Vast collection of Egyptian antiquities', 'Greek and Roman sculptures', 'Napoleon III Apartments', 'Iconic glass pyramid'],
    tips: ['Purchase tickets online to skip the entrance lines', 'Visit during evening hours on Wednesdays and Fridays for smaller crowds', 'Get a museum map or app to navigate the massive collections', 'Don\'t try to see everything in one visit - focus on specific sections'],
    reviews
  },
  {
    id: 'attraction-8',
    name: 'Tegallalang Rice Terraces',
    description: 'Spectacular terraced rice fields set on the slopes across the valley, offering a picturesque view that spreads down and away to the rice paddies. These stunning rice terraces in Ubud showcase the Balinese traditional irrigation system called subak, which is said to have been passed down by a holy man named Rsi Markandeya in the 8th century. Besides being a popular spot for tourists to take photos, the terraced field is a great example of sustainable agriculture.',
    location: 'Bali',
    thumbnail: 'https://images.pexels.com/photos/3394171/pexels-photo-3394171.jpeg',
    images: [
      'https://images.pexels.com/photos/3394171/pexels-photo-3394171.jpeg',
      'https://images.pexels.com/photos/2662792/pexels-photo-2662792.jpeg',
      'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg',
      'https://images.pexels.com/photos/6690011/pexels-photo-6690011.jpeg'
    ],
    rating: 4.6,
    reviewCount: 2345,
    price: 5,
    categories: ['Nature', 'Cultural', 'Photography'],
    duration: '1-2 hours',
    highlights: ['Stunning panoramic views', 'Traditional Balinese farming techniques', 'Terraced landscapes', 'Swing and adventure activities', 'Local craft shops'],
    tips: ['Visit early morning for the best light and fewer tourists', 'Small donations are expected at various viewing points', 'Wear comfortable shoes as paths can be slippery', 'Bring cash for local crafts and refreshments'],
    reviews
  }
];

export const mockData = {
  destinations,
  hotels,
  restaurants,
  attractions,
  reviews
};