export interface Infrastructure {
  id: number;
  slug: string;
  name: string;
  location: string;
  year: string;
  description: string;
  shortDescription: string;
  price: string;
  rating: number;
  images: string[];
  reviews: Review[];
  features: string[];
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
}

export const infrastructures: Infrastructure[] = [
  {
    id: 1,
    slug: 'cultural-center-of-the-philippines',
    name: 'Cultural Center of the Philippines',
    location: 'Pasay City, Metro Manila',
    year: '1966',
    shortDescription: 'Ang Cultural Center of the Philippines (CCP) ay ipinagawa noong 1969 bilang pangunahing tanghalan ng sining at kultura sa bansa at nananatiling aktibo hanggang ngayon bilang sentro ng mga pagtatanghal at gawaing kultural.',
    description: `Ang Cultural Center of the Philippines o Sentrong Pangkultura ng Pilipinas (CCP) ay itinatag noong 1966 sa utos ni Imelda Marcos, ang dating Unang Ginang ng Pilipinas, sa ilalim ng administrasyon ni Pangulong Ferdinand Marcos. Layunin nitong maging pangunahing institusyon para sa pangalaga, pagtataguyod, at pagpapaunlad ng sining at kulturang Pilipino. Nais ng CCP na gawing abot-kaya ang sining para sa mas maraming mamamayan at itanghal ang Pilipinas sa pandaigdigang entablado ng sining at kultura.\n
    Dinisenyo ng Pambansang Alagad ng Sining para sa Arkitektura na si Leandro V. Locsin, ang CCP ay pormal na binuksan noong 1969 sa pamamagitan ng isang engrandeng pagtatanghal na pinamagatang Golden Salakot: Isang Dularawan. Ito ang pinakaunang estrukturang itinayo bilang bahagi ng tinaguriang “City of Man,” ang grandyosong bisyon ni Imelda Marcos na gawing sentro ng sining, kagandahan, at modernidad ang lungsod ng Maynila.`,
    price: 'Php 35,000,000',
    rating: 2.2,
    images: [
      '/images/Infra/CCP/1.jpg',
      '/images/Infra/CCP/2.JPG',
      '/images/Infra/CCP/3.jpg',
      '/images/Infra/CCP/4.jpg',
      '/images/Infra/CCP/5.JPG',
    ],
    reviews: [
      {
        id: 1,
        name: 'Angel Reve Gelangre',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        date: 'October 12, 2024',
        rating: 1,
        comment: `Ang Cultural Center of the Philippines (CCP) ay isang estrukturang itinayo hindi lamang para sa sining at kultura kundi bilang simbolo ng kapangyarihan, ambisyon at pagpapakitang-gilas ng rehimeng Marcos. Sa kabila ng pormal na layunin nitong itaguyod ang kultura ng Pilipinas, ang CCP ay naging sagisag ng elitismo at eksklusibong akses sa sining na hindi abot ng karaniwang mamamayan.\n
        Hindi maikakailang nagbigay ang CCP ng plataporma para sa maraming artistikong produksyon, ngunit hindi nito binubura ang katotohanang ito’y bunga ng maluhong ambisyon at layuning pampulitika. Ang gusaling ito ay itinatag sa isang panahong ginamit ang sining upang patahimikin ang masa at pagandahin ang imahe ng isang diktadurya. Ngayon, habang patuloy ang operasyon ng CCP bilang institusyong pangkultura, ang anino ng kasaysayan nito ay nananatili.`,
        helpful: 5
      },
      {
        id: 2,
        name: 'Anonymous (isang lokal na pintor)',
        avatar: '/images/Reviewer/Anonymous.jpg',
        date: 'October 12, 2024',
        rating: 1,
        comment: `Pinuna noon ni Benigno ‘Ninoy’ Aquino Jr. sa kanyang talumpati na “A Pantheon for Imelda” ang pagpapagawa ng Cultural Center of the Philippines sa gitna ng paghihirap ng mga Pilipino. Ayon sa kanya, ang gusaling ito ay hindi simbolo ng kultura kundi ng labis na karangyaan at pagwawaldas sa pera ng bayan. Tinawag niya itong “monument of shame,” sapagkat sa halip na magsilbing bukas at inklusibong tahanan ng sining para sa mamamayan, itinindig ito para sa pansariling ambisyon at pampulitikal na interes ng mga nasa kapangyarihan.\n
        Nabatid kong tunay ang sinasabi noon ni Ninoy dahil bagamat mayroong lugar para sa mga sining pero ang utang na natamo ay ramdam pa rin natin hanggang ngayon.`,
        helpful: 1
      },
    ],
    features: [
      'Panoramic views of San Juanico Strait',
      'Architectural marvel with 43 spans',
      'Historical landmark',
      'Connects Samar and Leyte islands',
      'Excellent photography spot',
      'Recently added lighting system for night viewing'
    ]
  },
  {
    id: 2,
    slug: 'folk-arts-theater',
    name: 'Folk Arts Theater',
    location: 'Pasay City, Metro Manila',
    year: '1974',
    shortDescription: 'Ipinatayo ni Imelda Marcos ang Folk Arts Theater noong 1974 para sa Miss Universe pageant at kalaunan ay ginamit bilang entablado ng mga iba’t ibang pagtatanghal.',
    description: `Ang Folk Arts Theater, na kilala ngayon bilang Tanghalang Francisco Balagtas, ay matatagpuan sa loob ng Cultural Center of the Philippines (CCP) Complex. Ipinatayo ito noong 1974 sa utos ni Imelda Marcos, bilang tugon sa desisyong idaos sa Pilipinas ang Miss Universe 1974. Bukod sa pagiging venue ng Miss Universe, nakita rin ni Imelda ang teatro bilang isang permanenteng tahanan ng sining, isang espasyo kung saan maipapamalas at mapapalaganap ang pagiging malikhain ng mga Pilipino. Ang layunin nito ay itanghal, isulong, at ipagdiwang ang kulturang Pilipino, habang nagsisilbi rin bilang isang entablado para sa mga lokal at internasyonal na pagtatanghal.\n
    Dinisenyo ito ng Pambansang Alagad ng Sining sa Arkitektura na si Leandro Locsin at itinayo sa loob lamang ng 77 araw, isang pambihirang gawaing iniuugnay sa matayog na bisyon ng administrasyong Marcos. Sa oras ng pagkakakumpleto, ito ang naging pinakamalaking single-span building sa buong bansa. Ang arkitektura nito ay nagpapakita ng estilong brutalismo na makikita sa malawak nitong bubong at sa mga kongkretong pader.\n
    Hindi maikakaila ang malalim na ugnayan ng gusali sa bisyon at propaganda ng rehimeng Marcos. Tulad ng ibang gusali sa CCP Complex, ginamit ang teatro bilang entablado ng mga seremonyang pampubliko na naglalayong magpakita ng pagkakaisa ng mamamayan at patatagin ang imahe ng pamahalaan.`,
    price: 'Php 50,000,000',
    rating: 2.05,
    images: [
      '/images/Infra/Folk Arts Theater/1.jpg',
      '/images/Infra/Folk Arts Theater/2.jpg',
      '/images/Infra/Folk Arts Theater/3.jpg',
      '/images/Infra/Folk Arts Theater/4.jpg',
      '/images/Infra/Folk Arts Theater/5.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Angel Gelangre',
        avatar: '/images/Team/Gelangre.jpg',
        date: 'October 20, 2024',
        rating: 5,
        comment: `Ang Folk Arts Theater ay isa na namang monumento ng ilusyon ng diktadurya. Itinayo ito sa loob lamang ng 77 araw para ipagdaos ang Miss Universe Pageant noong 1974, isang palabas na isinagawa sa gitna ng matinding krisis pang-ekonomiya, kawalan ng trabaho, at lumalalang karahasang pulitikal sa ilalim ng Batas Militar. Habang libo-libong Pilipino ang naghihirap sa lansangan, pinilit ang konstruksyon ng gusaling ito sa pamamagitan ng sapilitang paggawa at paggamit ng pondo mula sa kaban ng bayan. Ipinagmalaki ang proyekto bilang patunay ng kaunlaran ng Pilipinas sa mata ng mundo, subalit ang katotohanan ay isa itong pagtatangkang tabunan ang bulok na sistemang umiiral sa ilalim ng rehimeng Marcos. Ginamit ang sining bilang instrumento ng propaganda, isang paraan upang palabasin na maayos at masigla ang kalagayan ng bansa kahit na salungat ito sa nararanasan ng karaniwang mamamayan.\n
        Sa halip na ituon ang pondo sa mga serbisyong panlipunan tulad ng mga ospital, paaralan, at pabahay para sa lumalalang kalagayan ng mga Pilipino, mas pinili ng pamahalaan na magpatayo ng engrandeng gusali para ipakita ang mapanlinlang na representasyon nila ng kaunlaran. Inilunsad ang mga proyektong tulad nito upang ilihis ang pansin sa tunay na lagay ng bansa. Sa ganitong paraan, ang Folk Arts Theater ay hindi lamang gusali kundi simbolo ng panlilinlang, isang konkretong paalala kung paano ginamit ang arkitektura para burahin ang katotohanan at patahimikin ang masa.`,
        helpful: 35
      },
      {
        id: 2,
        name: 'Anonymous (mambabasa ng akda ni Talitha Espiritu)',
        avatar: '/images/Reviewer/Anonymous.jpg',
        date: 'September 15, 2024',
        rating: 4,
        comment: 'Batay sa akda ni Talitha Espiritu na “The Marcos Romance and the Cultural Center of the Philippines: The Melodrama of a Therapeutic Cultural Policy,” ibinahagi niya rito na bagamat ipinakilala ang Folk Arts Theater bilang isang pasilidad para sa pagtatanghal at pagpapalaganap ng kulturang bayan, ginamit ito bilang entablado ng propaganda para sa mga internasyonal na bisita gaya ng sa Miss Universe 1974. Ang mga palabas tulad ng Kasaysayan ng Lahi ay nagmistulang makulay na pagtatanghal ng pagkakaisa ng bansa, ngunit sa likod nito ay ang sapilitang paglahok ng mga katutubong grupo na itinuring bilang mga "live displays.” Sa halip na tunay itanghal at kilalanin ang kultura ng bayan, naging kasangkapan ang teatro sa pagpapalaganap ng magandang imahe ng administrasyon habang patuloy na inaapi at isinasantabi ang mismong mga komunidad na kinakatawan nito.',
        helpful: 18
      },
      {
        id: 3,
        name: 'Miguel Ramos',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        date: 'August 5, 2024',
        rating: 5,
        comment: 'As an architecture enthusiast, I was mesmerized by Locsin\'s design. The CCP stands as a testament to Filipino creativity and vision, despite its complicated historical context.',
        helpful: 27
      }
    ],
    features: [
      'Multiple performance venues including the Main Theater',
      'Art galleries with rotating exhibitions',
      'Brutalist architecture by National Artist Leandro Locsin',
      'Library and archives for arts research',
      'Regular schedule of performances including ballet, theater, and music',
      'Seaside location with views of Manila Bay'
    ]
  },
  {
    id: 3,
    slug: 'picc',
    name: 'Philippine International Convention Center',
    location: 'Pasay City, Metro Manila',
    year: '1980',
    shortDescription: 'Itinayo ang Philippine International Convention Center (PICC) noong 1976 bilang kauna-unahang convention center sa Asya, at nananatili itong aktibong ginagamit para sa mga malalaking kaganapan hanggang ngayon.',
    description: `Ang ideya para sa PICC ay nagsimula kay Imelda Marcos matapos niyang mapagtanto na itinuturing ang Pilipinas bilang posibleng lugar para sa mga pandaigdigang kumperensya ng United Nations. Kinumpirma ang mga kaisipang ito noong 1976 nang magpasya ang Pilipinas na maging host ng pinagsamang pagpupulong ng World Bank-IMF. Simula noon, ang PICC ay nag-host ng iba't ibang mahahalagang kaganapan tulad ng Miss Universe 1994 Pageant, World Bank’s International Monetary Fund Annual Meeting, APEC Summit, ASEAN Summit, World Law Conference, at iba't ibang konsiyerto.\n
    Nagsimula ang konstruksyon ng PICC noong Setyembre 1974. Idinisenyo ito ni Leandro V. Locsin (isang Filipino National Artist) kasama ang Trans-Asia Philippines Inc. bilang mga inhinyero at ang H. R. Lopez Company bilang tagapamahala ng proyekto. Ang arkitektura nito ay brutalist, at ang napakalaki, parihabang harapan, patag na bloke, at paggamit ng mga cantilever ay nagbibigay-diin sa natatanging istilo ni Locsin. Natapos ito sa loob lamang ng dalawang taon, bahagyang dahil sa panggigipit ni Imelda, at pinasinayaan noong Setyembre 1976.\n
    Ang PICC ay isa sa mga unang high-tech, "futuristic" na gusali sa bansa dahil sa mataas na antas ng teknikal na sopistikasyon nito para sa dekada 1970. Ito rin ay naging isa sa mga pangunahing kultural at arkitektural na simbolo ng Pilipinas at nagtataglay ng mahahalagang koleksyon ng sining mula sa ilan sa mga kilalang artista ng bansa. Dahil tanyag ang gusali at regular na ginagamit para sa iba’t ibang kaganapan, nakaranas ang PICC ng ilang insidente sa seguridad sa nakaraan, kabilang ang aksidenteng pagkalabit ng baril noong 2019 at isang banta sa bomba noong 2023. Matagumpay na nalutas ang parehong banta nang medyo mabilis at mahusay.\n`,
    price: 'USD 65,000,000',
    rating: 2,
    images: [
      '/images/Infra/PICC/1.jpg',
      '/images/Infra/PICC/2.jpg',
      '/images/Infra/PICC/3.jpg',
      '/images/Infra/PICC/4.jpg',
      '/images/Infra/PICC/5.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Polites, 1977 (verbatim, translated)',
        avatar: '/images/Reviewer/Polites.jpg',
        date: 'October 18, 2024',
        rating: 4,
        comment: `Ito ay dalisay na eskultura. Dalawang malalaking bloke ng masoneriya ang pinaghiwalay at lalo pang hinubog sa pamamagitan ng pag-ukit ng mga bahagi, na nag-iwan ng malalaking nakausling patag na ibabaw na lumalabas mula sa kanilang monolitikong kalatagan. Ang mga inukit na blokeng ito ay inilagay sa tubig, kaya't ang kanilang bigat ay napigilang masyadong lumagpas sa sukat ng tao. Ang kompleks ay isang kahanga-hangang pagpapakita ng matinding bigat na tila lumulutang sa itaas ng lupa nang may tila kawalan ng bigat.`,
        helpful: 42
      },
      {
        id: 2,
        name: 'Raph Dequilla',
        avatar: '/images/Team/Dequilla.jpg',
        date: 'September 25, 2024',
        rating: 1,
        comment: `Alexa play ‘Magasin’ by the Eraserheads\n
        "Siguro'y malapit ka na ring sumali sa Supermodel of the Whole Wide Universe."\n
        Kumpara sa iba pang proyektong edipisyo ng rehimeng Marcos, marahil ang PICC ang isa sa mas matagal at "matagumpay" na proyekto. Ito ay dahil patuloy pa rin itong ginagamit sa mga malalaking kaganapan hanggang ngayon. Ipinagmamalaki pa rin ng sentro ang pagiging pangunahing lugar para sa mga kaganapan sa Maynila at isang heritage building. Sa ganoong paraan, masasabi nating natutupad nito ang layunin nito bilang isang convention center.\n
        "Nakita kita sa isang magasin, at sa sobrang gulat 'di ko napansin."\n
        Gayunpaman, hindi natin dapat kalimutan ang orihinal na layunin ng pagtatayo nito, na upang matugunan ang hangarin ni Imelda na gawing kapansin-pansin ang Pilipinas sa pamamagitan ng ningning at karangyaan. Ang pagtatayo ng isang high-end, teknikal, at kahanga-hangang istraktura ay tila nagpapahiwatig na nais ng mga Marcos na magmukhang dominante sa pandaigdigang saklaw sa maikling panahon. Maaari nating sabihin na ang brutalista at unibersal na arkitektura nito ay naglalayong mas makaakit sa mga dayuhang delegado at kinatawan kaysa maging tunay na representasyon ng ating kultura at at tradisyon. Ang disenyo ay "sumasabay sa uso," at ipinagpapatuloy ang kapus-palad na trend ng mga gusaling nagiging magkakatulad na nawawalan ng anumang bakas ng kultura.`,
        helpful: 29
      },
    ],
    features: [
      'Never-activated 621-megawatt nuclear reactor',
      'Educational guided tours',
      'Panoramic views of the South China Sea',
      'Historical exhibits about the plant\'s construction and controversy',
      'Original control room preserved as it was in the 1980s',
      'Museum showcasing nuclear technology'
    ]
  },
  {
    id: 4,
    slug: 'philcite',
    name: 'PHILCITE',
    location: 'Pasay City, Metro Manila',
    year: '1975',
    shortDescription: 'Ang gusali ay ipinagawa noong 1976 ni Imelda Marcos para maging espasyo ng internasyonal na kalakalan. Ngayon, demolished na ang gusali at pinalitan ng komersyal na amusement park, ang Star City.',
    description: `Pinagawa ni Imelda ang Philippine Center for International Trade and Exhibitions (PHILCITE) dahil hinangad niyang magkaroon ng espasyo para sa internasyonal na kalakalan. Katulad ng karamihan sa mga gusali ng CCP Complex, ang PHILCITE ay dinisenyo ni Leandro Locsin. Mayroon itong lawak na 5,400 square meters at taas na 16 meters. Patunay sa pagka-engrande ng gusali ang pagkakaroon nito ng modernong information center, mahigit 10 exhibition areas, at anim na project screens.\n
    Sang-ayon sa tema ng mga gusaling ipinatayo sa ilalim ni Imelda, ang PHILCITE ay tinawag ng dating First Lady na “Forum for Filipino Enterprise” bilang “nostalgic allegory” para sa ancient Rome at “utopian metaphor” para sa New Society ng mga Marcos.\n
    Ngunit, ang gusali–katulad ng ibang mga gusali sa CCP Complex–ay naging sanhi ng malaking pangungutang mga Marcos sa mga international financial institutions. Mula rin sa Proclamation No. 1611 noong January 21, 1977, isinautos ni Marcos Sr. ang Chamber of Commerce na magsagawa ng malawakang fund campaign para lamang matugunan ang mga gastos para sa Philippine International Trade Fair na isinagawa sa PHILCITE.\n
    Sa huli, ang PHILCITE ay dinemolish noong 1990’s at pinalitan ng Star City ng mga Elizalde.`,
    price: 'Varies by medical service (both private and public options available)',
    rating: 1.95,
    images: [
      '/images/Infra/PHILCITE/1.png',
      '/images/Infra/PHILCITE/2.png',
      '/images/Infra/PHILCITE/3.png',
    ],
    reviews: [
      {
        id: 1,
        name: 'Pat Reyes',
        avatar: '/images/Team/Reyes.jpg',
        date: 'March 2, 2024',
        rating: 2,
        comment: `Alexa play ‘Multo’ by Cup of Joe\n
        Ang PHILCITE ay isang tanda ng kasakiman ng mga Marcos upang ipakita ang kanilang kapangyarihan at impluwensiya. Minadali ang istruktura at sinayang lamang nila ang milyon-milyong kaban ng bayan para lamang sa isang gusali na ngayo’y giniba na at ginagamit na para sa isang komersyal at pribadong negosyo. Hindi naging sulit ang milyones na nagastos ng taong bayan. Sa halip na gamitin ito ng mga Marcos para sa taong bayan, ito ay ginamit nila para sa sariling interes at pagpapakita ng gilas sa taon ng pagsasagawa ng IMF World Conference dito sa bansa.\n
        Ayon kay Gerard Lico (2003), isa sa naging instrumento ng rehimeng Marcos ang myth of monumentalism. Makikita ang kapangyarihan ng mga diktador base sa size at volume ng mga ipinatayo na gusali. Nabanggit ni Lico (2003) ang konsepto ng Panopticon kung saan ang naglalakihang mga gusali ay nagbibigay ng takot sa mga pinamumunuan na tila ba’y mayroong “omnipresence” si Marcos Sr. na laging nakatingin at nagbabantay sa kanilang mga ginagawa.\n
        Sa kaso ng PHILCITE, ang pagpapakita ng kanilang kapangyarihan at ang pagkakagiba ng istruktura na ito ay isang multo ng mga nasayang na pera ng bayan. Isa itong multo na bagamat wala na ang pisikal na kaanyuan ng gusali, ang kasaysayan at ang utang ng Pilipinas ay patuloy na sinusundan ang buong bansa.`,
        helpful: 48
      },
      {
        id: 2,
        name: 'Fred Elizalde',
        avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
        date: 'September 30, 2020',
        rating: 4,
        comment: `Ako ang naging chairman ng PHILCITE at naging malaking tulong ang dating First Lady Imelda Marcos upang magkaroon kami ng pondo at sa maikling oras ay makapag-imbita ng iba’t ibang bansa sa Philippine International Trade Fair, isang konsepto ng trade fair na naglalayong ma-enganyo ang mga dayuhang negosyante na makilahok.\n
        Bagamat giniba ito ay malaki pa rin ang pakinabang ng espasyo ng PHILCITE dahil dito itinayo ang Star City na pagmamay-ari ng aking pamilya.`,
        helpful: 32
      },
      {
        id: 3,
        name: 'Sofia Cruz',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        date: 'August 15, 2024',
        rating: 5,
        comment: 'The Heart Center stands as proof that not all infrastructure projects from that period were wasteful. This institution has saved countless lives and continues to be at the forefront of cardiac care in the region.',
        helpful: 52
      }
    ],
    features: [
      'Specialized cardiovascular care facilities',
      'Advanced cardiac diagnostic equipment',
      'Catheterization laboratories',
      'Cardiac surgery theaters',
      'Training programs for cardiac specialists',
      'Both private and public ward options',
      'Research department for cardiovascular diseases'
    ]
  },
  {
    id: 5,
    slug: 'manila-film-center',
    name: 'Manila Film Center',
    location: 'Pasay City, Metro Manila',
    year: '1981',
    shortDescription: 'Naging isang “mass mausoleum” matapos malibing ang ilang mga trabahador dahil sa gumuhong bubong noong 1981. Tanda ang gusali sa maluhong karakter ni Imelda na handang isakripisyo ang buhay ng mga mas nakabababa upang makuha ang kanyang gusto. ',
    description: `Ang Manila Film Center ay itinayo noong 1981 sa utos ni Imelda Marcos. Layunin nitong maging pangunahing tanghalan ng pelikulang Pilipino at pandaigdigang sinema, at magsilbing sentro ng kaalaman at pagpapalitan ng kultura sa pamamagitan ng pelikula. Isa ito sa mga pangunahing proyekto ng tinaguriang “City of Man,” ang grandyosong bisyon ni Imelda Marcos na gawing sentro ng sining, kultura, at modernidad ang lungsod ng Maynila.\n
    Dinisenyo ni Froilan Hong at pinangasiwaan ng pintor at direktor na si Behn Cervantes bilang artistic director, ang Manila Film Center ay itinayo sa loob lamang ng 77 araw upang umabot sa deadline ng unang Manila International Film Festival noong Enero 1982. Sa kabila ng pagmamadali sa konstruksyon, isinagawa ito sa istilong Neoclassical at ginamitan ng mga modernong materyales upang bigyang anyo ang isang makabagong templong pangkultura.\n
    Sa hangarin ni Imelda Marcos na gawing pelikulang kabisera ng Asya ang Maynila na maihahambing sa Cannes, inilunsad ang proyekto na agad umani ng atensyon mula sa pandaigdigang midya. Subalit, minadali ang pagtatayo ng Manila Film Center, na nauwi sa mga padalus-dalos na desisyon gaya ng pagpapatuloy ng konstruksiyon kahit kulang sa kahandaan. Habang ginagawa ang ikaanim na palapag, gumuho ang istruktura at marami sa mga manggagawa ang na-trap at bumaon sa mabilis matuyong semento. Ayon sa ilang ulat, piniling ipagpatuloy ang konstruksiyon sa halip na iligtas ang mga biktima, at tinambakan na lamang ng bagong semento ang lugar upang ituloy ang pagtatayo (Magno 1998, 172).\n
    Ang trahedyang ito ay nananatiling isa sa mga pinakakontrobersyal na bahagi ng kasaysayan ng proyektong pangkultura ng Marcos regime. Bagamat itinayo ito bilang simbolo ng sining at pag-unlad, ang Manila Film Center ay naging paalala ng kawalang-habag at sakripisyo ng buhay ng mga manggagawang Pilipino alang-alang sa imahe ng modernidad. Tulad ng CCP at PICC, ito ay bahagi ng arkitekturang monumental ng Bagong Lipunan—malalaking estruktura na may layuning ipakita ang kapangyarihan, kaunlaran, at pambansang prestihiyo. Ngunit sa kabila ng marangyang disenyo, dala rin nito ang bigat ng kasaysayan at ang mga boses ng mga naisantabi sa ngalan ng propaganda.`,
    price: 'USD 25,000,000',
    rating: 1.65,
    images: [
      '/images/Infra/Manila Film Center/1.jpg',
      '/images/Infra/Manila Film Center/2.jpg',
      '/images/Infra/Manila Film Center/3.jpg',
      '/images/Infra/Manila Film Center/4.jpg',
      '/images/Infra/Manila Film Center/5.jpg'
    ],
    reviews: [
      {
        id: 1,
        name: 'Anonymous',
        avatar: '/images/Reviewer/Anonymous.jpg',
        date: 'January 5, 1996',
        rating: 1,
        comment: 'Nawalan ako ng ama dahil sa trahedyang pagguho ng Manila Film Center. Hindi ito basta tourist spot—ito’y libingan ng mga kaluluwang kinalimutan, na isinakripisyo para sa isang maluho at mapanlinlang na proyekto. Hindi madaling tumayo rito at isipin na ang bawat haligi ay itinayo sa ibabaw ng mga katawan, at hanggang ngayon, walang hustisya. Hindi ko mairerekomenda ang pagbisita sa lugar na ito na puno ng kasaysayan ng kalupitan at pagwawalang-bahala sa buhay ng tao',
        helpful: 169
      },
      {
        id: 2,
        name: 'Imelda Marcos',
        avatar: '/images/Reviewer/Imelda.jpg',
        date: 'January 4, 1996',
        rating: 5,
        comment: 'Napakaganda ng Manila Film Center! Isang simbolo ito ng pangarap at karangyaan, na itinayo para iangat ang kultura at sining ng bansa. Hindi dapat magpatalo sa mga intriga at negatibong balita tungkol dito. Sa halip, bisitahin ninyo at damhin ang kagandahan at legacy na naiwan ko. Wala nang makakapantay dito!',
        helpful: 15012
      },
    ],
    features: [
      'Open-air amphitheater with 10,000 seating capacity',
      'Distinctive folded-plate roof design',
      'Part of the CCP Complex along Manila Bay',
      'Historically significant as the 1974 Miss Universe venue',
      'Hosts traditional Filipino performances',
      'Designed by National Artist Leandro Locsin'
    ]
  },
  {
    id: 6,
    slug: 'tahanang-filipino',
    name: 'Tahanang Filipino (Coconut Palace)',
    location: 'Pasay City, Metro Manila',
    year: '1978',
    shortDescription: 'Ninais ni Imelda ng isang “100 percent” na Pilipinong bahay. Umabot sa 37 million pesos ang paggawa sa Coconut Palace na binubuo ng 70 percent na coconut at 30 percent na indigenous materials.',
    description: `Ang Coconut Palace ay ipinag-utos ipatayo ng dating First Lady Imelda Marcos upang matupad ang hangarin niyang “100 percent Filipino house.” Layunin nitong ipakita ang ganda at yaman ng Pilipinas sa pamamagitan ng isang gusaling nakatuon sa gamit ng niyog—isa sa pangunahing likas na yaman ng bansa. Kaiba sa iba pang mga gusali na idinisenyo ni Leandro Locsin, ang Coconut Palace ay disenyo ni Francisco Mañosa. Ang pagkakaiba nila ay makikita sa istilo ng arkitektura: habang si Locsin ay kilala sa modernong estilo, ginamit ni Mañosa sa Coconut Palace ang lokal at katutubong materyales at tradisyunal na konsepto, lalo na ang paggamit ng niyog bilang pangunahing elemento sa gusali.  Ang gusali ay gawa sa humigit-kumulang 70% ng mga produktong niyog na sumailalim pa sa mga kemikal na proseso, kabilang ang kahoy, ugat, puno, balat, bunga, bulaklak, at bao ng niyog.\n
    Ang Coconut Palace ay isang malaking proyekto na gumamit ng tinatayang 2,000 puno ng niyog na higit sa 70 taon na ang tanda. Ang bubong ay gawa sa mga tabla ng niyog, ang mga haligi ay mula sa katawan ng puno, at ang mga pader ay binuo gamit ang tinatawag na “coconut bricks” na hinaluan ng hibla ng lana at semento mula sa balat ng niyog. Bukod pa rito, ang gate ng palasyo ay pinalamutian ng mga heometrikong disenyo mula sa mahigit 4,000 balat ng niyog. Sa loob ng palasyo, makikita rin ang iba’t ibang produkto mula sa niyog. Isa sa mga tampok nito ay ang 36-na talampakang hapag-kainan na nilagyan ng 47,000 piraso ng balat ng niyog na may iba’t ibang hugis.\n
    Dagdag pa sa sobrang kagarbohan ng Coconut Palace, napag-alaman din na ang nakuhang pondo nito mula sa coconut levy, na dapat ay perang gagamitin sa paglago ng coconut industry at pagtulong sa mga coconut farmers, sa halip ay ginamit para sa sariling interes ni Imelda. Inilagay ang pera scholarship program ng dating First Lady at binigay sa mga proyekto niya na Miss Universe, World Chess Championship, at iba pa.\n
    Matapos ang pagkakatapos nito noong 1981, nagsilbi ang Coconut Palace sa iba’t ibang layunin: mula sa pagiging opisina ng pamahalaan, hanggang sa lunan ng mga sosyal at opisyal na pagtitipon.`,
    price: 'Php 37,000,000',
    rating: 2.5,
    images: [
      '/images/Infra/Tahanang Filipino (Coconut Palace)/1.jpg',
      '/images/Infra/Tahanang Filipino (Coconut Palace)/2.jpg',
      '/images/Infra/Tahanang Filipino (Coconut Palace)/3.jpg',
      '/images/Infra/Tahanang Filipino (Coconut Palace)/4.png',
      '/images/Infra/Tahanang Filipino (Coconut Palace)/5.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Shane Saludares',
        avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
        date: 'October 15, 2024',
        rating: 1,
        comment: `Ang pagkakagawa sa Coconut Palace ay detalyado at malinaw na pinag-isipan mula sa konsepto hanggang sa disenyo. Ginamit dito ang niyog—isang puno na may malaking papel sa ekonomiya at kultura ng Pilipinas. Sa katunayan, madalas itong tinatawag na "Tree of Life" dahil halos lahat ng bahagi nito ay may gamit: mula sa kahoy, ugat, balat, bao, bulaklak, bunga, hanggang sa dagta. Ang malikhaing paggamit sa bawat bahagi ng niyog sa pagbuo ng palasyo ay tunay na kahanga-hanga, at nagbibigay ng pambihirang pagkakakilanlan sa estruktura. Dahil dito, maraming turista at bisita ang naaakit sa lugar, at maari itong maging mapagkakakitaang venue para sa mga pagtitipon, kasalan, o iba pang mahahalagang okasyon.\n
        Gayunpaman, kung masusuri natin ang kasaysayan sa likod ng Coconut Palace, mas mauunawaan natin ang masalimuot na kahulugan nito. Ang pagpapatayo ng palasyo ay hindi lamang tungkol sa sining at likha, kundi tungkol din sa pampulitikang imahe at propaganda. Makikita rito ang tinatawag na "edifice complex", kung saan ang mga lider ay may labis na pagnanais na magpatayo ng mga engrandeng gusali upang ipakita ang kaunlaran, kapangyarihan, at karangyaan—kahit na taliwas ito sa aktwal na kalagayan ng bayan.\n
        Ipinatayo ni Imelda Marcos ang Coconut Palace upang ipakita ang isang maganda at mayamang mukha ng Pilipinas. Ngunit, kung titingin tayo lampas sa magandang disenyo ng gusali, ang realidad ng kahirapang nararanasan ng mga Pilipino noong panahong iyon ang makikita natin pati na rin ang mga na agrabyado katulad ng mga coconut farmers para sa lang sa wili ng mga may kapangyarihan.\n
        Sa huli, ang Coconut Palace ay isang istrukturang maaaring hangaan sa aspetong arkitektural, ngunit nagiging simbolo rin ito ng mapanlinlang na representasyon ng yaman—isang magandang mukha na tumatakip sa tunay na sakit ng lipunan. Isa itong paalala kung paanong ang kagandahan ng isang gusali ay maaring magtago ng masalimuot na katotohanan ng kasaysayan.`,
        helpful: 41
      },
      {
        id: 2,
        name: 'Francisco Mañosa',
        avatar: '/images/Reviewer/Anonymous.jpg',
        date: 'September 27, 2024',
        rating: 2,
        comment: `Ako ang arkitekto ng Coconut Palace at natuwa ang dating First Lady sa aking disenyo. Ang sinabi niya: “It is an architectural masterpiece, reflective of the Filipino people’s culture and their loftiest aspirations free from the vestiges of colonialism. It is a repository of native materials to show the Filipinos and the world that the Philippines is truly a rich country. Everything is 100 percent Filipino, from rooftop to floor to the ideas…It is also a concrete example of what the New Society has imbibed in the arts, particularly architecture. Before, people used to idolize everything western or foreign. Now, he is proud of his race and finds beauty in his own land. `,
        helpful: 27
      },
    ],
    features: [
      'Neoclassical design inspired by the Parthenon',
      'Site of the 1982 Manila International Film Festival',
      'Historical significance related to the Marcos era',
      'Subject of numerous paranormal investigations',
      'Located within the CCP Complex',
      'Limited public access except during special events'
    ]
  }
];