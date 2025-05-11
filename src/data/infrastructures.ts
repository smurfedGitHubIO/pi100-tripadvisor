import type { Infrastructure } from '../types/types';

export const infrastructures: Infrastructure[] = [
  {
    id: 1,
    name: "Coastal Paradise Resort",
    location: "Malibu, California",
    description: "Experience the ultimate beachfront luxury at Coastal Paradise Resort. Nestled along the pristine shores of Malibu, this exclusive retreat offers panoramic ocean views, private beach access, and world-class amenities. Each spacious suite features a private balcony, premium bedding, and state-of-the-art technology. Indulge in our award-winning spa, infinity pool, and gourmet restaurants serving locally-sourced cuisine. Perfect for romantic getaways or family vacations, our attentive staff ensures a personalized experience that exceeds expectations.",
    shortDescription: "Luxury beachfront resort with panoramic ocean views and world-class amenities.",
    price: 599,
    currency: "USD",
    rating: 4.7,
    reviewCount: 452,
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg"
    ],
    amenities: ["Free WiFi", "Spa", "Pool", "Gym", "Restaurant", "Room Service", "Beach Access"],
    reviews: [
      {
        id: 1,
        username: "TravelLover22",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        rating: 5,
        date: "March 15, 2024",
        comment: "Absolutely stunning property with impeccable service. The ocean view from our suite was breathtaking. Worth every penny!"
      },
      {
        id: 2,
        username: "BeachExplorer",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        rating: 4,
        date: "February 28, 2024",
        comment: "Beautiful resort with excellent amenities. Staff was very attentive. Only downside was the crowded pool area during peak hours."
      },
      {
        id: 3,
        username: "LuxurySeeker",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        rating: 5,
        date: "January 12, 2024",
        comment: "One of the best resorts I've ever stayed at. The food at the restaurant was exceptional and the spa treatments were divine."
      }
    ]
  },
  {
    id: 2,
    name: "Alpine Retreat Lodge",
    location: "Aspen, Colorado",
    description: "Discover the magic of the mountains at Alpine Retreat Lodge. Situated in the heart of Aspen, this rustic-luxe property offers direct access to world-class skiing in winter and spectacular hiking trails in summer. Our timber-framed lodge features cozy fireplaces, authentic mountain décor, and stunning views from every window. Relax in our outdoor hot tubs after a day on the slopes, enjoy locally-inspired cuisine at our on-site restaurant, or unwind with a craft cocktail in our intimate lounge. With personalized concierge service and thoughtful amenities, we create unforgettable mountain memories.",
    shortDescription: "Rustic-luxe mountain lodge with ski access and stunning Alpine views.",
    price: 479,
    currency: "USD",
    rating: 4.8,
    reviewCount: 328,
    images: [
      "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg",
      "https://images.pexels.com/photos/11408255/pexels-photo-11408255.jpeg",
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
      "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg"
    ],
    amenities: ["Free WiFi", "Hot Tub", "Ski-in/Ski-out", "Fireplace", "Restaurant", "Bar", "Concierge"],
    reviews: [
      {
        id: 1,
        username: "SnowBunny",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        rating: 5,
        date: "March 2, 2024",
        comment: "Perfect ski-in/ski-out location! The lodge is beautiful and cozy with amazing mountain views. We'll definitely be back next season."
      },
      {
        id: 2,
        username: "MountainClimber",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        rating: 5,
        date: "February 15, 2024",
        comment: "Exceeded all expectations. The hot tubs overlooking the mountains were incredible after a long day of skiing."
      },
      {
        id: 3,
        username: "NatureExplorer",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        rating: 4,
        date: "January 30, 2024",
        comment: "Beautiful property with excellent service. The rooms were spacious and comfortable. Only wish the restaurant had more vegetarian options."
      }
    ]
  },
  {
    id: 3,
    name: "Urban Oasis Hotel",
    location: "New York City, New York",
    description: "Experience the pulse of the city at Urban Oasis Hotel, a sleek boutique property in the heart of Manhattan. Our sophisticated rooms and suites offer a tranquil retreat from the urban excitement, with premium bedding, designer amenities, and floor-to-ceiling windows showcasing spectacular city views. Located steps from world-class shopping, dining, and attractions, we put the best of New York City at your doorstep. Enjoy craft cocktails at our rooftop bar, savor innovative cuisine at our signature restaurant, or work out in our 24-hour fitness center. Our knowledgeable concierge team can arrange exclusive experiences to make your stay truly memorable.",
    shortDescription: "Sophisticated boutique hotel in the heart of Manhattan with rooftop views.",
    price: 399,
    currency: "USD",
    rating: 4.6,
    reviewCount: 512,
    images: [
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
      "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/2606517/pexels-photo-2606517.jpeg",
      "https://images.pexels.com/photos/5782604/pexels-photo-5782604.jpeg"
    ],
    amenities: ["Free WiFi", "Rooftop Bar", "Restaurant", "24-Hour Fitness Center", "Concierge", "Room Service", "Business Center"],
    reviews: [
      {
        id: 1,
        username: "CityExplorer",
        avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        rating: 5,
        date: "March 10, 2024",
        comment: "Perfect location for exploring NYC! The rooftop bar has amazing views of the skyline. The staff was incredibly helpful with recommendations."
      },
      {
        id: 2,
        username: "LuxuryTraveler",
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        rating: 4,
        date: "February 25, 2024",
        comment: "Stylish hotel with comfortable rooms. Great central location. The only drawback was street noise, but that's expected in Manhattan."
      },
      {
        id: 3,
        username: "BusinessTripper",
        avatar: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
        rating: 5,
        date: "January 18, 2024",
        comment: "Excellent business hotel with good amenities. The staff was professional and accommodating. Will definitely stay here again on my next NYC trip."
      }
    ]
  },
  {
    id: 4,
    name: "Tropical Haven Resort",
    location: "Kauai, Hawaii",
    description: "Discover paradise at Tropical Haven Resort, an oceanfront sanctuary on Kauai's breathtaking North Shore. Our lush 22-acre property features elegant bungalows nestled among tropical gardens, each offering private lanais and stunning ocean or garden views. Unwind on our secluded beach, snorkel in crystal-clear waters teeming with colorful marine life, or relax by our lagoon-style pools. Indulge in authentic Hawaiian cuisine at our open-air restaurant using ingredients from our organic garden. Experience traditional island activities including lei making, hula lessons, and torch lighting ceremonies. Our commitment to sustainable luxury ensures an authentic Hawaiian experience in harmony with nature.",
    shortDescription: "Luxury oceanfront resort on Kauai's North Shore with authentic Hawaiian experiences.",
    price: 649,
    currency: "USD",
    rating: 4.9,
    reviewCount: 387,
    images: [
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
    ],
    amenities: ["Free WiFi", "Private Beach", "Pools", "Spa", "Restaurant", "Water Sports", "Cultural Activities"],
    reviews: [
      {
        id: 1,
        username: "IslandDreamer",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
        rating: 5,
        date: "March 5, 2024",
        comment: "Absolute paradise! The location is stunning and the staff made us feel like family. The cultural activities added so much to our experience."
      },
      {
        id: 2,
        username: "BeachLover",
        avatar: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg",
        rating: 5,
        date: "February 20, 2024",
        comment: "The most beautiful resort we've ever stayed at. The private beach was incredible and the food at the restaurant was outstanding. Worth every penny!"
      },
      {
        id: 3,
        username: "SunSeeker",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        rating: 4,
        date: "January 25, 2024",
        comment: "Gorgeous property with excellent amenities. The bungalows are spacious and beautifully appointed. Only complaint was occasional slow service at the restaurant."
      }
    ]
  },
  {
    id: 5,
    name: "Historic Chateau Inn",
    location: "Loire Valley, France",
    description: "Step back in time at the Historic Chateau Inn, an exquisitely restored 16th-century castle nestled among the vineyards of the Loire Valley. Our elegant chateau blends historic charm with modern luxury, featuring opulent suites with period furnishings, marble bathrooms, and panoramic views of the manicured gardens and surrounding countryside. Dine on gourmet French cuisine in our Michelin-starred restaurant, where our chef creates seasonal menus using produce from our kitchen gardens and local artisanal producers. Explore our extensive wine cellar with tastings guided by our sommelier, relax in our spa housed in the ancient stone cellars, or enjoy activities including horseback riding and hot air balloon tours over the picturesque valley.",
    shortDescription: "Restored 16th-century chateau in the Loire Valley with Michelin-starred dining.",
    price: 799,
    currency: "EUR",
    rating: 4.8,
    reviewCount: 246,
    images: [
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
      "https://images.pexels.com/photos/5059724/pexels-photo-5059724.jpeg",
      "https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg"
    ],
    amenities: ["Free WiFi", "Michelin-starred Restaurant", "Wine Cellar", "Spa", "Gardens", "Horseback Riding", "Balloon Tours"],
    reviews: [
      {
        id: 1,
        username: "HistoryBuff",
        avatar: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg",
        rating: 5,
        date: "March 12, 2024",
        comment: "A truly magical experience! Staying in a real chateau was like stepping into a fairy tale. The attention to historic detail while providing modern luxury was impressive."
      },
      {
        id: 2,
        username: "WineLover",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
        rating: 5,
        date: "February 8, 2024",
        comment: "Exceptional in every way. The wine cellar tour was outstanding and the restaurant deserves more than its one Michelin star. A memorable stay!"
      },
      {
        id: 3,
        username: "LuxuryExplorer",
        avatar: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
        rating: 4,
        date: "January 15, 2024",
        comment: "Beautiful chateau with impeccable service. The grounds are stunning and the rooms are very comfortable. Only wished for better lighting in the bathrooms."
      }
    ]
  },
  {
    id: 6,
    name: "Desert Mirage Resort",
    location: "Sedona, Arizona",
    description: "Find serenity at Desert Mirage Resort, where luxury meets the mystical beauty of Sedona's red rock landscape. Our adobe-style resort is designed to harmonize with the surrounding desert environment, offering spacious casitas with private patios, indoor-outdoor showers, and breathtaking views. Rejuvenate at our award-winning spa with treatments inspired by Native American healing traditions, cool off in our infinity pool overlooking the dramatic rock formations, or practice yoga on our scenic deck as the sun rises. Savor Southwest cuisine with a modern twist at our restaurant, using ingredients sourced from local farms and our own herb garden. Our expert guides can arrange personalized adventures including jeep tours, vortex hikes, and stargazing experiences in the pristine desert night.",
    shortDescription: "Luxury desert resort nestled among Sedona's majestic red rocks with holistic spa.",
    price: 529,
    currency: "USD",
    rating: 4.7,
    reviewCount: 374,
    images: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg"
    ],
    amenities: ["Free WiFi", "Spa", "Infinity Pool", "Yoga Studio", "Restaurant", "Guided Tours", "Stargazing"],
    reviews: [
      {
        id: 1,
        username: "DesertDreamer",
        avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
        rating: 5,
        date: "March 8, 2024",
        comment: "The most peaceful retreat I've ever experienced. The setting among the red rocks is spectacular and the spa treatments were transformative."
      },
      {
        id: 2,
        username: "WellnessTraveler",
        avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
        rating: 5,
        date: "February 17, 2024",
        comment: "A perfect blend of luxury and nature. The sunrise yoga sessions were incredible and our casita was beautifully appointed with amazing views."
      },
      {
        id: 3,
        username: "AdventureSeeker",
        avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
        rating: 4,
        date: "January 22, 2024",
        comment: "Stunning property in an unbeatable location. The jeep tour arranged by the concierge was a highlight. Only downside was spotty WiFi in some areas."
      }
    ]
  }
];