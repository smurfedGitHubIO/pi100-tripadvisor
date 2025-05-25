import { writable } from 'svelte/store';

// Mock data for infrastructures
const infrastructureData = [
  {
    id: 1,
    name: "Cultural Center of the Philippines",
    location: "Manila",
    address: "CCP Complex, Roxas Boulevard, Pasay City, Metro Manila",
    shortDescription: "The iconic bridge connecting the islands of Leyte and Samar, often called 'The Bridge of Love'.",
    description: "The San Juanico Bridge is the longest bridge in the Philippines spanning a body of water, with a length of 2.16 kilometers (1.34 mi). It was built as part of the Pan-Philippine Highway now called the Maharlika Highway, a network of roads, bridges, and ferry services that connect the islands of Luzon, Samar, Leyte, and Mindanao.",
    yearBuilt: "1969-1973",
    cost: 48000000,
    price: 150,
    architect: "Designed by the international engineering firm Parsons Brinkerhoff",
    images: [
      "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4064436/pexels-photo-4064436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4064226/pexels-photo-4064226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4064224/pexels-photo-4064224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11492206/pexels-photo-11492206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/4947810/pexels-photo-4947810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1975",
    history: "Ang Cultural Center of the Philippines o Sentrong Pangkultura ng Pilipinas (CCP) ay itinatag noong 1966 sa utos ni Imelda Marcos, ang dating Unang Ginang ng Pilipinas, sa ilalim ng administrasyon ni Pangulong Ferdinand Marcos. Layunin nitong maging pangunahing institusyon para sa pangalaga, pagtataguyod, at pagpapaunlad ng sining at kulturang Pilipino. Nais ng CCP na gawing abot-kaya ang sining para sa mas maraming mamamayan at itanghal ang Pilipinas sa pandaigdigang entablado ng sining at kultura.\
    \
Dinisenyo ng Pambansang Alagad ng Sining para sa Arkitektura na si Leandro V. Locsin, ang CCP ay pormal na binuksan noong 1969 sa pamamagitan ng isang engrandeng pagtatanghal na pinamagatang Golden Salakot: Isang Dularawan. Ito ang pinakaunang estrukturang itinayo bilang bahagi ng tinaguriang “City of Man,” ang grandyosong bisyon ni Imelda Marcos na gawing sentro ng sining, kagandahan, at modernidad ang lungsod ng Maynila.",
    controversy: "Hindi lamang ito simpleng gusali para sa pagtatanghal. Ang CCP ay ginamit ng administrasyong Marcos bilang simbolo ng soft power at state propaganda, na nagpapakita ng imahe ng isang moderno, organisado, at makasining na pamahalaan. Kasama ng iba pang mga proyektong tulad ng Folk Arts Theater at Philippine International Convention Center (PICC), ang CCP ay bahagi ng mas malawak na arkitekturang monumental. Ito ay binubuo ng mga estrukturang may malalaking sukat, modernong disenyo, at matitibay na materyales na may layuning ipakita ang kapangyarihan at kaunlaran ng Bagong Lipunan",
    rating: 4.7,
    reviews: [
      {
        name: "Carlos Mendoza",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-12-15",
        title: "Engineering Marvel",
        comment: "This bridge is truly an engineering marvel, especially considering when it was built. The views from the bridge are spectacular, and learning about its history was fascinating. A must-visit for anyone interested in Philippine infrastructure.",
        source: "GuiltTripAdvisor",},
      {
        name: "Francesca Lopez",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-10-22",
        title: "Beautiful but Controversial",
        comment: "The bridge itself is impressive and the views are amazing. Our tour guide provided interesting information about the construction and its controversial history. Worth visiting, but I wish there were more informational plaques about its historical context.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Andrew Santiago",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-08-05",
        title: "Historical Significance",
        comment: "I came here specifically to learn about Marcos-era infrastructure and wasn't disappointed. The bridge is not only functional but beautiful. The tour provided balanced information about both the engineering achievements and the political context of its construction.",
        source: "Facebook"
      },
      {
        name: "Maria Santos",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-06-17",
        title: "Nice Bridge, Limited Facilities",
        comment: "The bridge itself is impressive, but there are limited facilities for tourists. It would be nice to have a proper viewing deck and more educational materials. The historical tour was informative but brief.",
        source: "GuiltTripAdvisor"
      }
    ]
  },
  {
    id: 2,
    name: "Folk Arts Theater",
    location: "Manila",
    address: "CCP Complex, Roxas Boulevard, Manila",
    shortDescription: "The premier arts and culture complex showcasing Philippine and international performances and exhibitions.",
    description: "The Cultural Center of the Philippines (CCP) is a complex of buildings designed by Leandro V. Locsin, built on a reclaimed land along Roxas Boulevard in Manila. It was established to preserve, develop and promote arts and culture in the Philippines. The CCP was initiated by First Lady Imelda Marcos in 1966.",
    yearBuilt: "1966-1969",
    cost: 35000000,
    price: 200,
    architect: "Leandro V. Locsin",
    images: [
      "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6039244/pexels-photo-6039244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1970",
    history: "The main building, designed by National Artist for Architecture Leandro V. Locsin, was built in 1969. The CCP was inaugurated on September 8, 1969, with a performance of 'Dularawan,' a musical epic based on Filipino folk traditions. It became the centerpiece of Imelda Marcos' vision for the 'City of Man.'",
    controversy: "While the CCP has been praised for its architectural significance and contribution to Philippine arts, it has been criticized for its lavish construction during a time of economic hardship. Critics argue it represented the Marcos regime's focus on creating a façade of progress through grand projects while neglecting basic needs.",
    rating: 4.5,
    reviews: [
      {
        name: "Rafael Cruz",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-11-30",
        title: "Architectural Masterpiece",
        comment: "The brutalist architecture is simply stunning. We attended a ballet performance and the acoustics were excellent. The guided tour of the building provided fascinating insights into its design and historical context.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Isabella Reyes",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-09-14",
        title: "Cultural Hub with a Complex Past",
        comment: "The CCP offers excellent performances and exhibitions. The building itself is impressive, though showing its age in some areas. The historical exhibit about its creation during the Marcos era was thought-provoking and balanced.",
        source: "Instagram"
      },
      {
        name: "Jun Tanaka",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-07-20",
        title: "World-Class Venue",
        comment: "I was impressed by the quality of performances and the grand architecture. The building itself is a work of art, and learning about its history added another dimension to my visit. The sunset view over Manila Bay from the complex is spectacular.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Elena Gomez",
        avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-05-05",
        title: "Beautiful but Needs Renovation",
        comment: "The architecture is impressive and the performances are good, but some areas of the building need renovation. The historical tour focused too much on glorifying the structure without adequate context about the controversies surrounding its construction.",
        source: "Facebook",
        response: "Thank you for your feedback. We're continuously working on improving our facilities and educational materials to provide a more comprehensive historical context."
      }
    ]
  },
  {
    id: 3,
    name: "Philippine International Convention Center",
    location: "Quezon City",
    address: "East Avenue, Quezon City, Metro Manila",
    shortDescription: "A specialized medical facility focusing on cardiovascular care, established during the Marcos administration.",
    description: "The Philippine Heart Center is a government-owned and controlled corporation and specialty hospital dedicated to cardiovascular care. It was established on February 14, 1975, under Presidential Decree No. 673, signed by President Ferdinand Marcos. It was part of a series of specialized medical centers established during the Marcos era.",
    yearBuilt: "1973-1975",
    cost: 85000000,
    price: 100,
    architect: "Jorge Ramos and Associates",
    images: [
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1976",
    history: "The Philippine Heart Center was inaugurated on February 14, 1975, Valentine's Day, with Dr. Avenilo P. Aventura as its first Executive Director. It was established as part of the First Lady Imelda Marcos' project to develop specialized medical centers to improve healthcare in the Philippines.",
    controversy: "While the Heart Center has provided crucial specialized care to many Filipinos, critics point out that its establishment came at a time when basic healthcare services remained inadequate for many citizens. Some question whether resources should have been directed toward improving primary healthcare instead of specialized facilities accessible primarily to those who could afford them.",
    rating: 4.3,
    reviews: [
      {
        name: "Roberto Lim",
        avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-12-05",
        title: "Lifesaving Institution",
        comment: "My father received treatment here in the 1980s and again recently. The quality of care has always been excellent. The historical tour of the facility was fascinating, explaining how it was established and has evolved over the decades.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Sophia Rodriguez",
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-10-10",
        title: "Important Historical Healthcare Facility",
        comment: "I visited as part of a medical history tour, and it was enlightening to see how specialized healthcare developed in the Philippines. The architecture is interesting, and the museum display about its founding provides good historical context.",
        source: "GuiltTripAdvisor",
        response: "Thank you for visiting our facility and appreciating our historical significance in Philippine healthcare."
      },
      {
        name: "Michael Tan",
        avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-08-22",
        title: "Mixed Feelings",
        comment: "While the facility itself is impressive and the care is good, I felt the historical presentation glossed over some of the controversies about healthcare priorities during the Marcos era. Would appreciate a more balanced historical perspective.",
        source: "Facebook"
      },
      {
        name: "Fatima Santos",
        avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-06-30",
        title: "Medical Excellence",
        comment: "My mother had heart surgery here and received excellent care. The modern facilities belie the age of the institution. It's fascinating to see a Marcos-era project that continues to serve Filipinos well today, regardless of the controversies of that time.",
        source: "Instagram"
      }
    ]
  },
  {
    id: 4,
    name: "PHILCITE",
    location: "Morong, Bataan",
    address: "Napot Point, Morong, Bataan",
    shortDescription: "The never-operational nuclear power plant that became one of the most controversial projects of the Marcos era.",
    description: "The Bataan Nuclear Power Plant (BNPP) is a nuclear power plant located on a 389-hectare reservation at Napot Point in Morong, Bataan. It was the Philippines' only attempt at building a nuclear power plant, but it never became operational due to safety concerns and the fall of the Marcos regime.",
    yearBuilt: "1976-1984",
    cost: 2300000000,
    price: 500,
    architect: "Burns and Roe (Engineering firm)",
    images: [
      "https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4992438/pexels-photo-4992438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/2934284/pexels-photo-2934284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1982",
    history: "Pinagawa ni Imelda ang Philippine Center for International Trade and Exhibitions (PHILCITE) dahil hinangad niyang magkaroon ng espasyo para sa internasyonal na kalakalan. Katulad ng karamihan sa mga gusali ng CCP Complex, ang PHILCITE ay dinisenyo ni Leandro Locsin. Mayroon itong lawak na 5,400 square meters at taas na 16 meters. Patunay sa pagka-engrande ng gusali ang pagkakaroon nito ng modernong information center, mahigit 10 exhibition areas, at anim na project screens. \
    \
 Sang-ayon sa tema ng mga gusaling ipinatayo sa ilalim ni Imelda, ang PHILCITE ay tinawag ng dating First Lady na “Forum for Filipino Enterprise” bilang “nostalgic allegory” para sa ancient Rome at “utopian metaphor” para sa New Society ng mga Marcos.",
    controversy: "Ngunit, ang gusali–katulad ng ibang mga gusali sa CCP Complex–ay naging sanhi ng malaking pangungutang mga Marcos sa mga international financial institutions. Mula rin sa Proclamation No. 1611 noong January 21, 1977, isinautos ni Marcos Sr. ang Chamber of Commerce na magsagawa ng malawakang fund campaign para lamang matugunan ang mga gastos para sa Philippine International Trade Fair na isinagawa sa PHILCITE. \
\
Sa huli, ang PHILCITE ay dinemolish noong 1990’s at pinalitan ng Star City ng mga Elizalde.",
    rating: 4.0,
    reviews: [
      {
        name: "Jason Wong",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-11-20",
        title: "Fascinating Historical Site",
        comment: "This is an absolute must-visit for anyone interested in engineering, history, or politics. The tour is comprehensive and doesn't shy away from the controversies. Standing inside a complete but never-used nuclear plant is a unique experience.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Amelia Romualdez",
        avatar: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-09-25",
        title: "Educational but Depressing",
        comment: "It's fascinating to see the plant and learn its history, but also depressing to think about the billions spent on a facility that never produced electricity. The tour could provide more balanced information about the corruption allegations.",
        source: "Facebook"
      },
      {
        name: "Daniel Park",
        avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-07-15",
        title: "Engineering Time Capsule",
        comment: "As an engineer, visiting this facility was like stepping into a time capsule of 1970s-80s nuclear technology. The tour was informative and the guides knowledgeable. The controversial aspects of its history make it all the more interesting.",
        source: "GuiltTripAdvisor",
        response: "Thank you for your review! We're glad you appreciated the technical aspects of the facility along with its historical significance."
      },
      {
        name: "Carmen Jimenez",
        avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-05-18",
        title: "Monument to Ambition and Failure",
        comment: "This site stands as both a technological marvel and a cautionary tale about corruption and misplaced priorities. The tour is comprehensive and doesn't whitewash the controversial aspects. Worth the trip from Manila for anyone interested in Philippine history.",
        source: "Instagram"
      }
    ]
  },
  {
    id: 5,
    name: "Manila Film Center",
    location: "Manila",
    address: "CCP Complex, Roxas Boulevard, Manila",
    shortDescription: "An architectural showcase built primarily from coconut lumber and materials, commissioned by Imelda Marcos.",
    description: "The Coconut Palace, also known as Tahanang Pilipino, is a government building located in the Cultural Center of the Philippines Complex. It was commissioned by Former First Lady Imelda Marcos in 1978 to showcase Filipino craftsmanship and ingenuity, as well as the versatility of the coconut as a material.",
    yearBuilt: "1978-1981",
    cost: 37000000,
    price: 300,
    architect: "Francisco Mañosa",
    images: [
      "https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6186830/pexels-photo-6186830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1981",
    history: "The Coconut Palace was built in 1978-1981 and features an octagonal shape and extensive use of coconut products, including lumber, shells, and coconut husks. It was originally intended to host Pope John Paul II during his 1981 visit to the Philippines, but the Pope declined to stay there, reportedly finding it too opulent in a country with widespread poverty.",
    controversy: "The Coconut Palace has been criticized as a symbol of the Marcos regime's excesses. Built at a cost of approximately 37 million pesos (equivalent to about $5 million at the time), it was funded through the coconut levy imposed on coconut farmers, many of whom lived in poverty. Critics argue that the money should have been used to improve the livelihoods of these farmers instead.",
    rating: 4.2,
    reviews: [
      {
        name: "Teresa Villaruel",
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-12-18",
        title: "Stunning Craftsmanship",
        comment: "The use of coconut in every aspect of this building is remarkable. The woodwork is exquisite, and the tour guides provide detailed information about both the architectural features and the controversial history of the building.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Richard Lee",
        avatar: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-10-05",
        title: "Beautiful but Troubling",
        comment: "While the palace is beautiful and showcases amazing craftsmanship, it's hard to ignore the context of its creation. The tour could do a better job of addressing the controversy surrounding the coconut levy funds used to build it.",
        source: "Facebook",
        response: "Thank you for your feedback. We're continuously working to improve our tours to provide a more comprehensive historical context."
      },
      {
        name: "Anna Liza Mercado",
        avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-08-12",
        title: "Unique Architecture",
        comment: "The architecture is truly unique and the integration of coconut materials is impressive. The historical information provided gives good context to the Marcos era's focus on grand showcases while acknowledging the controversies.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Juan Carlos Rivera",
        avatar: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-06-01",
        title: "Filipino Craftsmanship Showcase",
        comment: "Whatever one thinks of the Marcos era, this building is a testament to Filipino craftsmanship and creativity. The detailed woodwork and innovative use of coconut materials are worth seeing. The historical context provided is balanced and informative.",
        source: "Instagram"
      }
    ]
  },
  {
    id: 6,
    name: "Tahanang Filipino (Coconut Palace)",
    location: "Manila",
    address: "CCP Complex, Roxas Boulevard, Manila",
    shortDescription: "An open-air theater built to host the 1974 Miss Universe Pageant and other cultural performances during the Marcos era.",
    description: "The Folk Arts Theater is a covered, open-air amphitheater located in the Cultural Center of the Philippines Complex. It was built in just 77 days specifically to host the 1974 Miss Universe Pageant held in Manila. The theater was designed to showcase Filipino indigenous architecture while accommodating large audiences for cultural performances.",
    yearBuilt: "1974",
    cost: 15000000,
    price: 150,
    architect: "Leandro V. Locsin",
    images: [
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/795662/pexels-photo-795662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11431628/pexels-photo-11431628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    historicalImage: "https://images.pexels.com/photos/3867521/pexels-photo-3867521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1974",
    history: "The Folk Arts Theater was constructed in 1974 in a record-breaking 77 days to serve as the venue for the 1974 Miss Universe Pageant, which the Philippines hosted during martial law. After the pageant, it became a venue for cultural performances, particularly those highlighting Filipino traditional and folk arts.",
    controversy: "While less controversial than other Marcos-era projects, the Folk Arts Theater has been cited as an example of the regime's focus on constructing grand showcases for international audiences while martial law was in effect. Critics argue that the rapid construction and lavish international events were designed to present a positive image of the Philippines that masked the political repression occurring at the time.",
    rating: 3.8,
    reviews: [
      {
        name: "Paulo Mendoza",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-11-10",
        title: "Historical Performance Venue",
        comment: "Attended a cultural performance here and was struck by the venue's history. The architecture is showing its age but still impressive. The exhibit about the 1974 Miss Universe pageant was particularly interesting as a snapshot of how the Marcos regime used international events.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Luisa Garcia",
        avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-09-19",
        title: "Needs Renovation",
        comment: "The historical significance is undeniable, but the facility needs major renovation. The exhibits about its creation during martial law are informative but could be more comprehensive in addressing the political context of the time.",
        source: "Facebook"
      },
      {
        name: "Benjamin Tan",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        date: "2023-07-30",
        title: "Architectural Innovation",
        comment: "As an architecture student, I found this building fascinating. Built in just 77 days, it showcases Leandro Locsin's genius in creating a functional space that incorporates Filipino design elements. The historical tour provides good context about its creation.",
        source: "GuiltTripAdvisor",
        response: "Thank you for appreciating the architectural aspects of the Folk Arts Theater. We're proud to showcase National Artist Locsin's work and its historical significance."
      },
      {
        name: "Gabriela Santos",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-05-25",
        title: "Interesting History, Dated Facility",
        comment: "The cultural performance was good, but the venue is showing its age. The historical exhibit about the Miss Universe pageant and martial law era was interesting but felt somewhat sanitized. Worth visiting for the historical significance.",
        source: "Instagram"
      }
    ]
  }
];

// Create and export the writable store
export const infrastructureStore = writable(infrastructureData);