export type Language = 'ID' | 'EN';

export interface Translations {
  nav: {
    home: string;
    tourPackage: string;
    destination: string;
    aboutUs: string;
    travelBlog: string;
    testimonials: string;
    planMyTrip: string;
    chatWhatsApp: string;
  };
  hero: {
    tag: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    explorePackages: string;
    viewDestinations: string;
    quickWhatsApp: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
    islandHoppingTag: string;
    customItineraries: string;
    searchDestination: string;
    searchDates: string;
    searchGuests: string;
    searchTripsBtn: string;
    whereToPlaceholder: string;
  };
  whyUs: {
    kicker: string;
    headline: string;
    subheadline: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    howItWorksKicker: string;
    howItWorksTitle: string;
    howItWorksSub: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    startPlanningBtn: string;
  };
  packages: {
    kicker: string;
    headline: string;
    subheadline: string;
    all: string;
    beachRelax: string;
    snorkeling: string;
    islandHopping: string;
    overland: string;
    priceLabel: string;
    flexibleDays: string;
    privateGroup: string;
    fromLabel: string;
    orderNow: string;
    customTripBannerTitle: string;
    customTripBannerDesc: string;
    consultCustomTripBtn: string;
  };
  destinations: {
    kicker: string;
    headline: string;
    subheadline: string;
    locationSubtitle: string;
    viewDetails: string;
    whiteSandTag: string;
    whiteSandTitle: string;
    whiteSandDesc: string;
  };
  about: {
    kicker: string;
    headline: string;
    subheadline: string;
    check1: string;
    check2: string;
    check3: string;
    meetTeamBtn: string;
  };
  blog: {
    kicker: string;
    headline: string;
    subheadline: string;
    allArticles: string;
    readArticle: string;
  };
  testimonials: {
    kicker: string;
    headline: string;
    subheadline: string;
    ratingScore: string;
    verifiedCount: string;
    safeBoatsLabel: string;
    allReviews: string;
    couples: string;
    families: string;
    adventurers: string;
    writeReviewBtn: string;
    ctaBannerTitle: string;
    ctaBannerDesc: string;
    planAdventureBtn: string;
  };
  finalCta: {
    kicker: string;
    headline: string;
    subheadline: string;
    emailPlaceholder: string;
    getTipsBtn: string;
    chatWithUsTitle: string;
    chatWithUsSub: string;
    planMyTripTitle: string;
    planMyTripSub: string;
  };
  footer: {
    desc: string;
    exploreTitle: string;
    popularTitle: string;
    contactTitle: string;
    allRights: string;
    privacy: string;
    terms: string;
    officialOperator: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ID: {
    nav: {
      home: 'Beranda',
      tourPackage: 'Paket Wisata',
      destination: 'Destinasi',
      aboutUs: 'Tentang Kami',
      travelBlog: 'Blog Wisata',
      testimonials: 'Ulasan',
      planMyTrip: 'Rancang Trip',
      chatWhatsApp: 'Chat via WhatsApp'
    },
    hero: {
      tag: 'Tour & Travel · Banggai Paradise',
      headlinePart1: 'Pilihan terbaik',
      headlinePart2: 'mitra perjalanan Anda',
      subheadline: 'Perjalanan kepulauan eksklusif didampingi pemandu lokal berlisensi. Terpercaya, profesional, dan dirancang khusus sesuai cara Anda menikmati liburan.',
      explorePackages: 'Jelajahi Paket Wisata',
      viewDestinations: 'Lihat Destinasi',
      quickWhatsApp: 'Konsultasi WhatsApp',
      trustPoint1: 'Terpercaya & Profesional',
      trustPoint2: 'Pemandu Lokal Berlisensi',
      trustPoint3: 'Trip Privat Fleksibel',
      islandHoppingTag: 'Island Hopping',
      customItineraries: 'Itinerary kustom',
      searchDestination: 'Destinasi',
      searchDates: 'Tanggal Perjalanan',
      searchGuests: 'Jumlah Peserta',
      searchTripsBtn: 'Cari Trip',
      whereToPlaceholder: 'Mau ke mana? (Semua Banggai)'
    },
    whyUs: {
      kicker: '— MENGAPA BANGGAI PARADISE —',
      headline: 'Terpercaya dan profesional, dari halo hingga sampai jumpa',
      subheadline: 'Setiap detail perjalanan diatur langsung oleh tim lokal yang menguasai kepulauan, sehingga Anda dapat menikmati petualangan tanpa rasa cemas.',
      p1Title: 'Terpercaya & Profesional',
      p1Desc: 'Komunikasi transparan, layanan terpercaya, dan perencanaan matang dari pesan pertama hingga kepulangan Anda.',
      p2Title: 'Pemandu Lokal Ramah',
      p2Desc: 'Pemandu lokal hangat dan berlisensi yang siap menunjukkan pantai rahasia serta kisah di balik keindahan pulau.',
      p3Title: 'Perjalanan yang Disesuaikan',
      p3Desc: 'Keluarga, pasangan, sahabat, atau kantor — kami sesuaikan rute dengan tempo, minat, dan anggaran Anda.',
      howItWorksKicker: '— CARA KERJA —',
      howItWorksTitle: 'Tiga langkah mudah menuju surga kepulauan',
      howItWorksSub: 'Bebas ribet, tanpa biaya tersembunyi, dan pendampingan menyeluruh.',
      step1Title: 'Bagikan rencana impian Anda',
      step1Desc: 'Tentukan tanggal, destinasi favorit, dan pengalaman yang Anda inginkan bersama tim kami.',
      step2Title: 'Kami rancang itinerary terbaik',
      step2Desc: 'Tim ahli kami menyusun jadwal perjalanan jelas dengan harga transparan dan fleksibel.',
      step3Title: 'Kemas koper dan nikmati',
      step3Desc: 'Tiba di Banggai dengan santai, biarkan tim lokal mengurus transportasi, kapal, dan dokumentasi drone Anda.',
      startPlanningBtn: 'Mulai Rancang Liburan Anda'
    },
    packages: {
      kicker: '— PAKET WISATA —',
      headline: 'Pilih liburan pulau impian Anda',
      subheadline: 'Itinerary pilihan yang dirancang dengan dedikasi lokal, fasilitas lengkap, kapal cepat berstandar, dan tanggal fleksibel.',
      all: 'Semua Paket',
      beachRelax: 'Pantai & Santai',
      snorkeling: 'Snorkeling & Diving',
      islandHopping: 'Island Hopping',
      overland: 'Jelajah Darat (Overland)',
      priceLabel: 'HARGA',
      flexibleDays: 'Hari Fleksibel',
      privateGroup: 'Privat atau Rombongan',
      fromLabel: 'Mulai Dari',
      orderNow: 'Pesan Sekarang',
      customTripBannerTitle: 'Butuh Paket Kustom atau Rombongan Perusahaan?',
      customTripBannerDesc: 'Kami melayani corporate gathering, honeymoon trip, photography tour, dan private yacht charter di seluruh Kepulauan Banggai.',
      consultCustomTripBtn: 'Konsultasi Custom Trip'
    },
    destinations: {
      kicker: '— DESTINASI WISATA —',
      headline: 'Tempat yang layak untuk dijelajahi',
      subheadline: 'Air laut sebening kristal, danau cermin purba, pantai tenang berpasir putih, dan alam yang masih asri belum terjamah.',
      locationSubtitle: 'Kepulauan Banggai, Sulawesi Tengah',
      viewDetails: 'Lihat detail destinasi',
      whiteSandTag: 'PANTAI',
      whiteSandTitle: 'Pantai Pasir Putih',
      whiteSandDesc: 'Pasir lembut sehalus bedak, kelapa condong tropis, dan perairan toska tanpa batas.'
    },
    about: {
      kicker: '— TENTANG KAMI —',
      headline: 'Hati lokal, cerita kepulauan',
      subheadline: 'Banggai Paradise didirikan oleh putra daerah yang mencintai tanah kelahirannya. Kami berbagi surga yang kami cintai dengan cara yang ramah dan lestari.',
      check1: 'Itinerary transparan dan harga jujur tanpa biaya terselubung',
      check2: 'Trip privat yang hangat, tertata rapi, dan personal',
      check3: 'Pendampingan penuh dari konsultasi awal hingga Anda terbang pulang',
      meetTeamBtn: 'Kenali Tim Kami'
    },
    blog: {
      kicker: '— BLOG WISATA —',
      headline: 'Cerita & panduan liburan',
      subheadline: 'Tips praktis, rekomendasi rahasia, dan catatan budaya dari pemimpin ekspedisi lokal kami.',
      allArticles: 'Semua artikel',
      readArticle: 'Baca artikel'
    },
    testimonials: {
      kicker: '— CERITA WISATAWAN —',
      headline: 'Disukai petualang dari seluruh penjuru dunia',
      subheadline: 'Cerita nyata dan pengalaman jujur dari wisatawan yang telah menjelajahi danau kristal dan laguna tersembunyi Banggai.',
      ratingScore: '★ 4.96',
      verifiedCount: '450+ Ekspedisi Terverifikasi',
      safeBoatsLabel: '100% Pemandu lokal & kapal aman',
      allReviews: 'Semua Ulasan',
      couples: 'Pasangan & Honeymoon',
      families: 'Keluarga',
      adventurers: 'Petualang & Teman',
      writeReviewBtn: 'Tulis Ulasan',
      ctaBannerTitle: 'Ingin merasakan pengalaman magis yang sama di Banggai?',
      ctaBannerDesc: 'Diskusikan rencana liburan impian Anda bersama pemandu lokal kami. Fleksibel, privat, dan gratis drone 4K.',
      planAdventureBtn: 'Rancang Liburan Anda'
    },
    finalCta: {
      kicker: '— AYO BERLAYAR —',
      headline: 'Siap untuk petualangan Anda berikutnya?',
      subheadline: 'Beri tahu kami tanggal dan impian perjalanan Anda. Seluruh kebutuhan tour Anda akan kami tangani tuntas.',
      emailPlaceholder: 'Masukkan alamat email Anda',
      getTipsBtn: 'Dapatkan Panduan',
      chatWithUsTitle: 'Chat bersama kami',
      chatWithUsSub: 'Respon cepat dari tim lokal via WhatsApp',
      planMyTripTitle: 'Rancang trip saya',
      planMyTripSub: 'Dapatkan proposal itinerary kustom'
    },
    footer: {
      desc: 'Mitra perjalanan terbaik Anda untuk liburan pulau yang tak terlupakan. Terpercaya, profesional, dan berkomitmen pada pariwisata ramah lingkungan.',
      exploreTitle: 'Jelajah',
      popularTitle: 'Populer',
      contactTitle: 'Kontak',
      allRights: 'Seluruh hak cipta dilindungi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      officialOperator: 'Operator Wisata Resmi Kepulauan Banggai'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      tourPackage: 'Tour Package',
      destination: 'Destination',
      aboutUs: 'About Us',
      travelBlog: 'Travel Blog',
      testimonials: 'Testimonials',
      planMyTrip: 'Plan My Trip',
      chatWhatsApp: 'Chat via WhatsApp'
    },
    hero: {
      tag: 'Tour & Travel · Banggai Paradise',
      headlinePart1: 'Your best choice',
      headlinePart2: 'travel partner',
      subheadline: 'Handcrafted island journeys led by friendly local experts. Trusted, professional and made around the way you love to travel.',
      explorePackages: 'Explore Packages',
      viewDestinations: 'View Destinations',
      quickWhatsApp: 'WhatsApp Inquire',
      trustPoint1: 'Trusted & professional',
      trustPoint2: 'Local certified guides',
      trustPoint3: 'Tailor-made private trips',
      islandHoppingTag: 'Island Hopping',
      customItineraries: 'Custom itineraries',
      searchDestination: 'Destination',
      searchDates: 'Travel Dates',
      searchGuests: 'Guests',
      searchTripsBtn: 'Search Trips',
      whereToPlaceholder: 'Where to? (All Banggai)'
    },
    whyUs: {
      kicker: '— WHY BANGGAI PARADISE —',
      headline: 'Trusted and professional, from hello to goodbye',
      subheadline: 'Every detail is handled by a local team that knows the islands, so you can simply enjoy the journey.',
      p1Title: 'Trusted & Professional',
      p1Desc: 'Clear communication, reliable service and careful planning from the first message to your return home.',
      p2Title: 'Friendly Local Guides',
      p2Desc: 'Warm, knowledgeable guides who show you hidden beaches and the island stories behind them.',
      p3Title: 'Tailor-Made Journeys',
      p3Desc: 'Families, couples, friends or teams, we shape each trip to your pace, interests and budget.',
      howItWorksKicker: '— HOW IT WORKS —',
      howItWorksTitle: 'Three simple steps to your island escape',
      howItWorksSub: 'Clear, transparent, and completely stress-free island vacation.',
      step1Title: 'Share your dream trip',
      step1Desc: 'Tell us your dates, group and the kind of experience you want.',
      step2Title: 'We craft your plan',
      step2Desc: 'Our team designs a clear itinerary with honest pricing, then fine-tunes it with you.',
      step3Title: 'Pack and enjoy',
      step3Desc: 'Show up, relax and let your local guides take care of everything else.',
      startPlanningBtn: 'Start Planning Your Trip'
    },
    packages: {
      kicker: '— TOUR PACKAGE —',
      headline: 'Pick your island escape',
      subheadline: 'Handpicked itineraries curated with local passion, complete transparent inclusions, and flexible dates.',
      all: 'All Packages',
      beachRelax: 'Beach & Relax',
      snorkeling: 'Snorkeling & Diving',
      islandHopping: 'Island Hopping',
      overland: 'Overland Explorer',
      priceLabel: 'PRICE',
      flexibleDays: 'Flexible Days',
      privateGroup: 'Private or Group',
      fromLabel: 'From',
      orderNow: 'Order Now',
      customTripBannerTitle: 'Need a Custom Itinerary or Corporate Gathering?',
      customTripBannerDesc: 'We specialize in private island charters, couple honeymoons, drone photography tours, and corporate retreats across Banggai.',
      consultCustomTripBtn: 'Inquire Custom Trip'
    },
    destinations: {
      kicker: '— DESTINATION —',
      headline: 'Places worth the journey',
      subheadline: 'Crystal-clear water, quiet beaches and island life that still feels untouched.',
      locationSubtitle: 'Banggai Archipelago, Central Sulawesi',
      viewDetails: 'View destination details',
      whiteSandTag: 'BEACH',
      whiteSandTitle: 'White-Sand Beaches',
      whiteSandDesc: 'Soft sand, swaying palms and endless turquoise lagoon.'
    },
    about: {
      kicker: '— ABOUT US —',
      headline: 'Local hearts, island stories',
      subheadline: 'Banggai Paradise Tour & Travel is built by people who call these islands home. We share the places we love, the right way.',
      check1: 'Clear itineraries and honest prices without hidden fees',
      check2: 'Small, personal and well-organized private trips',
      check3: 'Support from planning until you are safely back home',
      meetTeamBtn: 'Meet Our Team'
    },
    blog: {
      kicker: '— TRAVEL BLOG —',
      headline: 'Stories & travel tips',
      subheadline: 'Practical guides, insider recommendations, and cultural notes from our local expedition leaders.',
      allArticles: 'All articles',
      readArticle: 'Read article'
    },
    testimonials: {
      kicker: '— TRAVELER STORIES —',
      headline: 'Loved by adventurers from around the world',
      subheadline: 'Real stories and honest experiences from travelers who explored the crystal waters, mirror lakes, and secret lagoons of Banggai.',
      ratingScore: '★ 4.96',
      verifiedCount: '450+ Verified Expeditions',
      safeBoatsLabel: '100% Local guides & safe boats',
      allReviews: 'All Reviews',
      couples: 'Couples & Honeymoon',
      families: 'Families',
      adventurers: 'Adventurers & Groups',
      writeReviewBtn: 'Write Review',
      ctaBannerTitle: 'Ready to experience the same magic in Banggai?',
      ctaBannerDesc: 'Discuss your dream island vacation with our local guides. Flexible routes, private trips, and free 4K drone footage.',
      planAdventureBtn: 'Plan Your Adventure'
    },
    finalCta: {
      kicker: "— LET'S GO —",
      headline: 'Ready for your next adventure?',
      subheadline: 'Tell us your dates and your dream trip. We will take care of the rest.',
      emailPlaceholder: 'Your email address',
      getTipsBtn: 'Get travel tips',
      chatWithUsTitle: 'Chat with us',
      chatWithUsSub: 'Quick answers from our team via WhatsApp',
      planMyTripTitle: 'Plan my trip',
      planMyTripSub: 'Get a custom itinerary proposal'
    },
    footer: {
      desc: 'Your best choice travel partner for unforgettable island journeys. Trusted, professional, and dedicated to sustainable hospitality.',
      exploreTitle: 'Explore',
      popularTitle: 'Popular',
      contactTitle: 'Contact',
      allRights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      officialOperator: 'Official Banggai Tour Operator'
    }
  }
};
