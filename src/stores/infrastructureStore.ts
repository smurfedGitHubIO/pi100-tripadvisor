import { writable } from 'svelte/store';
import folk1 from '$lib/assets/images/Infra/Folk Arts Theater/1.jpg';
import folk2 from '$lib/assets/images/Infra/Folk Arts Theater/2.jpg';
import folk3 from '$lib/assets/images/Infra/Folk Arts Theater/3.jpg';
import folk4 from '$lib/assets/images/Infra/Folk Arts Theater/4.jpg';
import folk5 from '$lib/assets/images/Infra/Folk Arts Theater/5.jpg';
import mfc1 from '$lib/assets/images/Infra/Manila Film Center/1.jpg';
import mfc2 from '$lib/assets/images/Infra/Manila Film Center/2.jpg';
import mfc3 from '$lib/assets/images/Infra/Manila Film Center/3.jpg';
import mfc4 from '$lib/assets/images/Infra/Manila Film Center/4.jpg';
import mfc5 from '$lib/assets/images/Infra/Manila Film Center/5.jpg';

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
    architect: "Parsons Brinkerhoff",
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
    rating: 2.0,
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
    cost: 40000000,
    price: 200,
    architect: "Leandro V. Locsin",
    images: [ folk1, folk2, folk3, folk4, folk5],
    historicalImage: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1970",
    history: "Ang Folk Arts Theater, na kilala ngayon bilang Tanghalang Francisco Balagtas, ay matatagpuan sa loob ng Cultural Center of the Philippines (CCP) Complex. Ipinatayo ito noong 1974 sa atas ni Imelda Marcos, bilang tugon sa desisyong idaos sa Pilipinas ang Miss Universe 1974. Dahil gaganapin ang patimpalak sa panahon ng tag-ulan, kinailangan ng isang saradong teatro na may sapat na kapasidad para sa hindi bababa sa walong libong manonood. Sa halip na magtayo ng pansamantalang tolda, nagpasya ang pamahalaan na magpatayo ng isang matibay at maraming gamit na estruktura na kayang itayo sa loob ng napakaikling panahon.\
Bukod sa pagiging venue ng Miss Universe, nakita rin ni Imelda ang teatro bilang isang permanenteng tahanan ng sining-bayan, isang espasyo kung saan ang \"arts of the people\" ay maipapamalas at mapapalaganap. Ang layunin nito ay itanghal, isulong, at ipagdiwang ang kulturang Pilipino, habang nagsisilbi rin bilang isang entablado para sa mga lokal at internasyonal na pagtatanghal.\
Dinisenyo ito ng Pambansang Alagad ng Sining sa Arkitektura na si Leandro Locsin at itinayo sa loob lamang ng 77 araw, isang pambihirang gawaing iniuugnay sa determinasyon at grandyosong bisyon ng administrasyong Marcos. Sa oras ng pagkakakumpleto, ito ang naging pinakamalaking single-span building sa buong bansa. Ang arkitektura nito ay nagpapakita ng estilong brutalismo na makikita sa malawak nitong bubong na tila nakalutang sa ere at sa mga hilaw, hindi tinapalan, at hubad na kongkretong pader. Ang monumentalidad ng gusali ay nagpapahiwatig ng kapangyarihan, katatagan, at ambisyon ng estado.",
    controversy: "Hindi maikakaila ang malalim na ugnayan ng gusali sa bisyon at propaganda ng rehimeng Marcos. Bahagi ito ng tinaguriang \"edifice complex\" ni Imelda, ang pagkahumaling sa pagtatayo ng malalaking gusali bilang simbolo ng pambansang pag-unlad at karangalan. Tulad ng ibang gusali sa CCP Complex, ginamit ang teatro bilang entablado ng mga seremonyang pampubliko na naglalayong magpakita ng pagkakaisa at lehitimasyon ng rehimen.",
    rating: 1.5,
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
    cost: 3600000000,
    price: 150,
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
    history: "Ang ideya para sa PICC ay nagsimula kay Imelda Marcos matapos niyang mapagtanto na itinuturing ang Pilipinas bilang posibleng lugar para sa mga pandaigdigang kumperensya ng United Nations. Kinumpirma ang mga kaisipang ito noong 1976 nang magpasya ang Pilipinas na maging host ng pinagsamang pagpupulong ng World Bank-IMF. Simula noon, ang PICC ay nag-host ng iba't ibang mahahalagang kaganapan tulad ng Miss Universe Pageant, World Bank’s International Monetary Fund Annual Meeting, APEC Summit, ASEAN Summit, World Law Conference, at iba't ibang konsiyerto.\
Nagsimula ang konstruksyon ng PICC noong Setyembre 1974. Idinisenyo ito ni Leandro V. Locsin (isang Filipino National Artist) kasama ang Trans-Asia Philippines Inc. bilang mga inhinyero at ang H. R. Lopez Company bilang tagapamahala ng proyekto. Ang arkitektura nito ay brutalist, at ang napakalaki, parihabang harapan, patag na bloke, at paggamit ng mga cantilever ay nagbibigay-diin sa natatanging istilo ni Locsin. Natapos ito sa loob lamang ng dalawang taon, bahagyang dahil sa panggigipit ni Imelda, at pinasinayaan noong Setyembre 1976.",
    controversy: "Ang PICC ay isa sa mga unang high-tech, \"futuristic\" na gusali sa bansa dahil sa mataas na antas ng teknikal na sopistikasyon nito para sa dekada 1970. Ito rin ay naging isa sa mga pangunahing cultural at arkitektural na simbolo ng Pilipinas at nagtataglay ng mahahalagang koleksyon ng sining mula sa ilan sa mga kilalang artista ng bansa. Dahil sa mataas na pagtingin dito, nakaranas ang PICC ng ilang insidente sa seguridad sa nakaraan, kabilang ang aksidenteng pagkalabit ng baril noong 2019 at isang banta sa bomba noong 2023. Matagumpay na nalutas ang parehong banta nang medyo mabilis at mahusay.",
    rating: 1.6,
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
    rating: 1.0,
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
    location: "Manilatest",
    address: "CCP Complex, Roxas Boulevard, Manila",
    shortDescription: "An architectural showcase built primarily from coconut lumber and materials, commissioned by Imelda Marcos.",
    description: "The Coconut Palace, also known as Tahanang Pilipino, is a government building located in the Cultural Center of the Philippines Complex. It was commissioned by Former First Lady Imelda Marcos in 1978 to showcase Filipino craftsmanship and ingenuity, as well as the versatility of the coconut as a material.",
    yearBuilt: "1978-1981",
    cost: 37000000,
    price: 300,
    architect: "Francisco Mañosa",
    images: [ mfc1, mfc2, mfc3, mfc4, mfc5 ],
    historicalImage: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    historicalImageYear: "1981",
    history: "Ang Manila Film Center ay itinayo noong 1981 sa utos ni Imelda Marcos. Layunin nitong maging pangunahing tanghalan ng pelikulang Pilipino at pandaigdigang sinema, at magsilbing sentro ng kaalaman at pagpapalitan ng kultura sa pamamagitan ng pelikula. Isa ito sa mga pangunahing proyekto ng tinaguriang “City of Man,” ang grandyosong bisyon ni Imelda Marcos na gawing sentro ng sining, kultura, at modernidad ang lungsod ng Maynila.\
Dinisenyo ni Froilan Hong at pinangasiwaan ng pintor at direktor na si Behn Cervantes bilang artistic director, ang Manila Film Center ay itinayo sa loob lamang ng 77 araw upang umabot sa deadline ng unang Manila International Film Festival noong Enero 1982. Sa kabila ng pagmamadali sa konstruksyon, isinagawa ito sa istilong Neoclassical at ginamitan ng mga modernong materyales upang bigyang anyo ang isang makabagong templong pangkultura.",
    controversy: "Bilang bahagi ng ambisyosong layunin ni Imelda Marcos na gawing pelikulang kabisera ng Asya ang Maynila na makapapantay sa Cannes, naging laman ng mga pandaigdigang pahayagan ang proyektong ito. Subalit, ang mabilisang pagtatayo ng Manila Film Center ay nagbunga ng padalus-dalos na desisyon, kabilang na ang pagpapatuloy ng konstruksiyon sa kabila ng kakulangan sa kahandaan. Habang ginagawa ang ikaanim na palapag ng gusali, gumuho ang istruktura at bumaon sa mabilis matuyong semento ang hindi matukoy na bilang ng mga manggagawa. Ayon sa ilang ulat, hindi ipinahinto ang konstruksiyon upang iligtas ang mga biktima, at agad itong tinambakan ng bagong semento upang ituloy ang pagtatayo (Magno 1998, 172).\
Ang trahedyang ito ay nananatiling isa sa mga pinakakontrobersyal na bahagi ng kasaysayan ng proyektong pangkultura ng Marcos regime. Bagamat itinayo ito bilang simbolo ng sining at pag-unlad, ang Manila Film Center ay naging paalala ng kawalang-habag at sakripisyo ng buhay ng mga manggagawang Pilipino alang-alang sa imahe ng modernidad. Tulad ng CCP at PICC, ito ay bahagi ng arkitekturang monumental ng Bagong Lipunan—malalaking estruktura na may layuning ipakita ang kapangyarihan, kaunlaran, at pambansang prestihiyo. Ngunit sa kabila ng marangyang disenyo, dala rin nito ang bigat ng kasaysayan at ang mga boses ng mga naisantabi sa ngalan ng propaganda.",
    rating: 1.2,
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
    history: "Ang Coconut Palace ay ipinag-utos ipatayo noong 1978 ng dating First Lady Imelda Marcos bilang paghahanda sa inaasahang pagbisita ni Pope John Paul II. Layunin nitong ipakita ang ganda at yaman ng Pilipinas sa pamamagitan ng isang gusaling nakatuon sa gamit ng niyog—isa sa pangunahing likas na yaman ng bansa. Kaiba sa iba pang mga gusali na idinisenyo ni Leandro Locsin, ang Coconut Palace ay disenyo ni Francisco Mañosa. Ang pagkakaiba nila ay makikita sa istilo ng arkitektura: habang si Locsin ay kilala sa modernong estilo, ginamit ni Mañosa sa Coconut Palace ang lokal at katutubong materyales at tradisyunal na konsepto, lalo na ang paggamit ng niyog bilang pangunahing elemento sa gusali.  Ang gusali ay gawa sa humigit-kumulang 70% ng mga produktong niyog na sumailalim pa sa mga kemikal na proseso, kabilang ang kahoy, ugat, puno, balat, bunga, bulaklak, at bao ng niyog.\
Subalit sa kabila ng engrandeng disenyo at layunin, tinanggihan ng Santo Papa ang alok na manatili sa Coconut Palace. Ayon sa kanya, hindi nararapat ang ganitong karangyaan sa isang bansang lugmok sa matinding kahirapan.",
    controversy: "Ang Coconut Palace ay isang malaking proyekto na gumamit ng tinatayang 2,000 puno ng niyog na higit sa 70 taon na ang tanda. Ang bubong ay gawa sa mga tabla ng niyog, ang mga haligi ay mula sa katawan ng puno, at ang mga pader ay binuo gamit ang tinatawag na “coconut bricks” na hinaluan ng hibla ng lana at semento mula sa balat ng niyog. Bukod pa rito, ang gate ng palasyo ay pinalamutian ng mga heometrikong disenyo mula sa mahigit 4,000 balat ng niyog. Sa loob ng palasyo, makikita rin ang iba’t ibang produkto mula sa niyog. Isa sa mga tampok nito ay ang 36-na talampakang hapag-kainan na nilagyan ng 47,000 piraso ng balat ng niyog na may iba’t ibang hugis.\
Matapos ang pagkakatapos nito noong 1981, nagsilbi ang Coconut Palace sa iba’t ibang layunin: mula sa pagiging opisina ng pamahalaan, hanggang sa lunan ng mga sosyal at opisyal na pagtitipon.",
    rating: 1.8,
    reviews: [
      {
        name: "Shane Lovely Joy Saludares",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        date: "2023-11-10",
        title: "Historical Performance Venue",
        comment: "Ang pagkakagawa sa Coconut Palace ay detalyado at malinaw na pinag-isipan mula sa konsepto hanggang sa disenyo. Ginamit dito ang niyog—isang puno na may malaking papel sa ekonomiya at kultura ng Pilipinas. Sa katunayan, madalas itong tinatawag na \"Tree of Life\" dahil halos lahat ng bahagi nito ay may gamit: mula sa kahoy, ugat, balat, bao, bulaklak, bunga, hanggang sa dagta. Ang malikhaing paggamit sa bawat bahagi ng niyog sa pagbuo ng palasyo ay tunay na kahanga-hanga, at nagbibigay ng pambihirang pagkakakilanlan sa estruktura. Dahil dito, maraming turista at bisita ang naaakit sa lugar, at maari itong maging mapagkakakitaang venue para sa mga pagtitipon, kasalan, o iba pang mahahalagang okasyon.\
        Gayunpaman, kung masusuri natin ang kasaysayan sa likod ng Coconut Palace, mas mauunawaan natin ang masalimuot na kahulugan nito. Ang pagpapatayo ng palasyo ay hindi lamang tungkol sa sining at likha, kundi tungkol din sa pampulitikang imahe at propaganda. Makikita rito ang tinatawag na \"edifice complex\", kung saan ang mga lider ay may labis na pagnanais na magpatayo ng mga engrandeng gusali upang ipakita ang kaunlaran, kapangyarihan, at karangyaan—kahit na taliwas ito sa aktwal na kalagayan ng bayan.\
        Ipinatayo ni Imelda Marcos ang Coconut Palace upang ipakita sa Pope John Paul II ang isang maganda at mayamang mukha ng Pilipinas. Ngunit sa halip na humanga, tinanggihan ng Santo Papa ang alok na tumuloy sa palasyo. Sa kanyang simpleng desisyon, nakita ang kanyang katalinuhan, malasakit, at paninindigan sa prinsipyo. Naiintindihan niya ang realidad ng kahirapang nararanasan ng mga Pilipino noong panahong iyon, at hindi siya pumayag na makiisa sa isang palabas ng karangyaan habang naghihirap ang nakararami.\
        Sa huli, ang Coconut Palace ay isang istrukturang maaaring hangaan sa aspetong arkitektural, ngunit nagiging simbolo rin ito ng mapanlinlang na representasyon ng yaman—isang magandang mukha na tumatakip sa tunay na sakit ng lipunan. Isa itong paalala kung paanong ang kagandahan ng isang gusali ay maaring magtago ng masalimuot na katotohanan ng kasaysayan.",
        source: "GuiltTripAdvisor"
      },
      {
        name: "Pope John Paul II",
        avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        date: "2023-09-19",
        title: "Needs Renovation",
        comment: "Ako si Pope John Paul II, at sa panahon ng aking inaasahang pagbisita sa Pilipinas, ipinag-utos ni dating Unang Ginang Imelda Marcos ang pagpapatayo ng isang gusali bilang aking matutuluyan—ang tinatawag ngayong Coconut Palace.\
Nang makita ko ito, hindi ko maikakailang ito ay isang engrandeng obra—marangya at puno ng simbolismo ng likas na yaman ng bansa, lalo na ang niyog. Ngunit sa aking pagtanaw sa kapaligiran at kalagayan ng mga mamamayan, tila ba ang karangyaan ng gusaling ito ay malayo sa katotohanang sinasapitan ng maraming Pilipino.",
        source: "Facebook"
      }
    ]
  }
];

// Create and export the writable store
export const infrastructureStore = writable(infrastructureData);