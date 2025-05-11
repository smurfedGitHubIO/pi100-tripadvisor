import type { Review } from '../types/infrastructure';

const reviews: Review[] = [
  {
    id: '101',
    infrastructureId: '1',
    userName: 'TravelLover88',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 5,
    date: '2023-04-15',
    title: 'Absolute paradise!',
    comment: 'Our stay at Oceanview Resort was nothing short of magical. The staff went above and beyond to make our honeymoon special. The infinity pool overlooking the ocean is even more breathtaking than the photos. We particularly enjoyed the sunrise yoga sessions and the spa treatments. The food at all restaurants was exceptional - don\'t miss the seafood dinner on the beach! Will definitely return for our anniversary.',
    helpfulCount: 43,
    userContributions: 27,
    userLocation: 'Toronto, Canada',
    stayDate: 'March 2023',
    tripType: 'couples',
    photos: [
      {
        url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
        alt: 'Resort view from our room'
      },
      {
        url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
        alt: 'Romantic dinner setup on the beach'
      }
    ]
  },
  {
    id: '102',
    infrastructureId: '1',
    userName: 'WorldExplorer',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    rating: 4,
    date: '2023-03-22',
    title: 'Beautiful property, minor service issues',
    comment: 'The resort is stunning and the location is unbeatable. Our villa had incredible ocean views and the private plunge pool was perfect. The spa treatments were excellent and the breakfast buffet had amazing variety. However, we experienced some slow service at the restaurants and had to wait quite a bit for our room to be ready at check-in. Despite these minor issues, we had a wonderful stay and would recommend it.',
    helpfulCount: 19,
    userContributions: 42,
    userLocation: 'Melbourne, Australia',
    stayDate: 'February 2023',
    tripType: 'family',
    photos: [
      {
        url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        alt: 'Infinity pool at sunset'
      }
    ]
  },
  {
    id: '103',
    infrastructureId: '1',
    userName: 'LuxurySeeker',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
    date: '2023-02-18',
    title: 'Worth every penny!',
    comment: 'This resort defines luxury in every sense. From the moment we arrived, we were treated like royalty. The attention to detail is impressive - from the fresh flowers daily to the personalized welcome amenities. Our beachfront villa was spacious and beautifully designed with local elements. The private butler service was exceptional. We particularly enjoyed the cooking class with the head chef and the sunset cruise. While it\'s certainly not budget-friendly, the experience justifies the cost. A truly memorable stay!',
    helpfulCount: 31,
    userContributions: 15,
    userLocation: 'New York, USA',
    stayDate: 'January 2023',
    tripType: 'couples'
  },
  {
    id: '104',
    infrastructureId: '2',
    userName: 'MountainLover',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    date: '2023-02-28',
    title: 'Perfect winter getaway',
    comment: 'Alpine Mountain Retreat exceeded all our expectations. The location is perfect - we could ski directly from the property to the lifts. Our room had breathtaking views of the mountains, and the traditional Swiss decor added to the authentic experience. The cheese fondue at the restaurant was the best we\'ve ever had, and the wellness area was perfect after a day on the slopes. The staff were incredibly knowledgeable about the area and helped us plan our daily activities. We\'ve already booked for next winter!',
    helpfulCount: 28,
    userContributions: 19,
    userLocation: 'Chicago, USA',
    stayDate: 'February 2023',
    tripType: 'friends',
    photos: [
      {
        url: 'https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg',
        alt: 'View from our room'
      }
    ]
  },
  {
    id: '105',
    infrastructureId: '2',
    userName: 'AdventureFamily',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4,
    date: '2023-01-15',
    title: 'Great family ski vacation',
    comment: 'We had a wonderful stay with our two children (ages 8 and 10). The family suite was spacious and comfortable, and the kids loved the special welcome gifts. The ski school pick-up service was very convenient, and the staff were patient and helpful with all our equipment. The half-board meal plan offered excellent variety, though the restaurant gets quite busy at peak times. The only reason for 4 instead of 5 stars is that the WiFi was a bit unreliable in our room. Overall, an excellent choice for families!',
    helpfulCount: 15,
    userContributions: 23,
    userLocation: 'London, UK',
    stayDate: 'December 2022',
    tripType: 'family'
  },
  {
    id: '106',
    infrastructureId: '3',
    userName: 'FoodCritic',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 5,
    date: '2023-05-22',
    title: 'Culinary perfection',
    comment: 'As someone who has dined at many Michelin-starred restaurants around the world, I can confidently say that Gastronomic Delight offers one of the most memorable dining experiences. We opted for the tasting menu with wine pairing, and each course was a masterpiece of flavor, technique, and presentation. The sommelier\'s selections were inspired, and the staff\'s knowledge of each dish and wine was impressive. The renovated 19th-century building provides a sophisticated yet comfortable atmosphere. This restaurant deserves all the accolades it receives.',
    helpfulCount: 47,
    userContributions: 61,
    userLocation: 'San Francisco, USA',
    photos: [
      {
        url: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg',
        alt: 'Exquisite dish presentation'
      }
    ]
  },
  {
    id: '107',
    infrastructureId: '3',
    userName: 'ParisianFoodie',
    userAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    rating: 4,
    date: '2023-04-18',
    title: 'Almost perfect evening',
    comment: 'The food at Gastronomic Delight is undeniably excellent. Each dish showcased creativity while respecting classical French techniques. The standout was the duck with cherry gastrique - simply magnificent. The reason for 4 stars instead of 5 is that we felt slightly rushed between courses, and the dining room became quite noisy as the evening progressed. That said, the wine list is exceptional with some rare finds, and the desserts are worth saving room for. Make reservations well in advance, especially for weekend evenings.',
    helpfulCount: 23,
    userContributions: 38,
    userLocation: 'Brussels, Belgium'
  },
  {
    id: '108',
    infrastructureId: '4',
    userName: 'HistoryBuff',
    userAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    rating: 5,
    date: '2023-03-12',
    title: 'Unforgettable historical experience',
    comment: 'The Ancient Temples Tour was the highlight of our Cambodia trip. Our guide, Sopheap, was incredibly knowledgeable about Khmer history and architecture, bringing the temples to life with fascinating stories and details. The itinerary was well-planned, starting with less-visited temples before heading to Angkor Wat, which meant we avoided the worst of the crowds. The sunrise at Angkor Wat is a must, despite the early wake-up call. The small group size (just 6 people) allowed for a more personalized experience, and the provided lunch was delicious. If you\'re interested in photography, let your guide know - Sopheap showed us the best spots for amazing shots.',
    helpfulCount: 52,
    userContributions: 34,
    userLocation: 'Vancouver, Canada',
    photos: [
      {
        url: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
        alt: 'Sunrise at Angkor Wat'
      },
      {
        url: 'https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg',
        alt: 'Temple carvings'
      }
    ]
  },
  {
    id: '109',
    infrastructureId: '5',
    userName: 'LuxuryVillaTraveler',
    userAvatar: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg',
    rating: 5,
    date: '2023-06-10',
    title: 'A slice of heaven on the Amalfi Coast',
    comment: 'Villa Mirador exceeded our already high expectations. The photos don\'t do justice to the breathtaking views from every terrace. The villa itself is a perfect blend of historic charm and modern comfort. The four bedrooms are all spacious and well-appointed, with the master suite being particularly spectacular. The kitchen is a chef\'s dream, though we mostly used the services of the private chef recommended by the concierge (worth every euro!). The infinity pool overlooking the Mediterranean was where we spent most of our days, and the gardens are beautifully maintained. The location is perfect - secluded and private, yet just a short drive to Positano and Amalfi. Special thanks to the concierge team who arranged a private boat tour of Capri and a wonderful in-villa pizza-making class for our family. This was truly a once-in-a-lifetime vacation.',
    helpfulCount: 38,
    userContributions: 22,
    userLocation: 'Boston, USA',
    photos: [
      {
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        alt: 'View from the infinity pool'
      }
    ]
  },
  {
    id: '110',
    infrastructureId: '6',
    userName: 'WildlifePhotographer',
    userAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    rating: 5,
    date: '2023-07-22',
    title: 'Beyond our wildest dreams',
    comment: 'As a wildlife photographer, I\'ve been on many safaris, but the Serengeti Safari Experience was in a league of its own. Our guide, Joseph, had an uncanny ability to track animals and position us perfectly for viewing and photography. We were fortunate to witness the wildebeest migration crossing the Mara River - an awe-inspiring spectacle. The accommodations struck the perfect balance between authentic safari atmosphere and luxury. Falling asleep to the sounds of the wilderness and waking up to giraffes outside our tent was magical. The camp staff remembered our preferences from day one, and the food was surprisingly gourmet considering the remote location. The small group size ensured a personalized experience, and the vehicles were comfortable with guaranteed window seats. If you\'re considering a safari in Tanzania, look no further.',
    helpfulCount: 64,
    userContributions: 47,
    userLocation: 'Seattle, USA',
    photos: [
      {
        url: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
        alt: 'Lion pride at sunset'
      },
      {
        url: 'https://images.pexels.com/photos/19855144/pexels-photo-19855144/free-photo-of-safari-tourists-in-a-car-watching-giraffes.jpeg',
        alt: 'Wildebeest crossing the river'
      }
    ]
  }
];

export default reviews;