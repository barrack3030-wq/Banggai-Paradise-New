import { TourPackage, Destination, BlogPost, Testimonial } from '../types';
import { assetUrl } from '../utils/assetUrl';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'paisu-pok-peleng-3d2n',
    name: 'Paisu Pok & Peleng Wonder',
    subtitle: 'Crystal Mirror Lake & Jungle Oasis',
    badge: 'Best Seller',
    category: 'relax',
    duration: '3 Days 2 Nights',
    groupType: 'Private or Small Group',
    priceIdr: 2850000,
    priceUsd: 185,
    image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
    rating: 4.95,
    reviewCount: 142,
    shortDesc: 'Jelajahi danau kaca sebening cermin Danau Paisu Pok, segarnya Air Terjun Piala, dan santai di Pantai Mandel dengan pasir putih selembut tepung.',
    highlights: [
      'Berenang & berkano di danau kaca Paisu Pok',
      'Air Terjun Piala dengan air biru bertingkat',
      'Santai sunset di Pantai Mandel yang eksotis',
      'Dokumentasi video drone 4K & foto cinematic gratis'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival Luwuk — Peleng Island Crossing',
        description: 'Penjemputan di Bandara Syukuran Aminuddin Amir Luwuk (LUW). Melakukan penyeberangan kapal cepat ke Pulau Peleng. Check-in homestay/resort lokal, menikmati sunset tepi pantai.',
        spots: ['Bandara Luwuk', 'Pelabuhan Luwuk', 'Pulau Peleng', 'Sunset Point']
      },
      {
        day: 2,
        title: 'The Magic of Paisu Pok Lake & Piala Waterfall',
        description: 'Menuju Danau Paisu Pok di desa Luk Panenteng. Berkano di atas air sebening kristal dengan panorama batang kayu purba di dasar danau. Siang hari mengunjungi Air Terjun Piala berundak alami.',
        spots: ['Danau Paisu Pok', 'Luk Panenteng', 'Air Terjun Piala', 'Desa Wisata Lukminanga']
      },
      {
        day: 3,
        title: 'Mandel Beach & Return Crossing to Luwuk',
        description: 'Morning walk di Pantai Mandel, kelapa muda segar, hunting foto kelapa condong ikonik, lalu penyeberangan kembali ke Luwuk untuk flight kepulangan.',
        spots: ['Pantai Mandel', 'Oleh-oleh Khas Banggai', 'Bandara Luwuk']
      }
    ],
    included: [
      'Transportasi darat ber-AC selama tour di Pulau Peleng',
      'Tiket kapal penyeberangan Luwuk - Peleng PP (VIP/Executive)',
      'Akomodasi penginapan 2 malam pilihan',
      'Makan 3x sehari (kuliner khas lokal segar & seafood)',
      'Dokumentasi 4K drone & kamera mirrorless profesional',
      'Seluruh tiket masuk destinasi & retribusi desa adat',
      'Pemandu lokal berlisensi (Bilingual guide)',
      'Alat snorkeling & jaket pelampung (life jacket standar SNI)'
    ],
    excluded: [
      'Tiket pesawat dari/ke kota asal menuju Luwuk (LUW)',
      'Keperluan pribadi & pengeluaran di luar paket',
      'Tipping sukarela untuk kru & guide lokal'
    ]
  },
  {
    id: 'sombori-labengki-expedition-4d3n',
    name: 'Sombori & Island Hopping Expedition',
    subtitle: 'The Majestic Karst Lagoon of Banggai',
    badge: 'Featured',
    category: 'island-hopping',
    duration: '4 Days 3 Nights',
    groupType: 'Private Charter or Group',
    priceIdr: 4250000,
    priceUsd: 275,
    image: assetUrl('assets/images/banggai_sombori_islands_1793766898898.jpg'),
    rating: 4.98,
    reviewCount: 98,
    shortDesc: 'Petualangan pulau eksklusif mengarungi gugusan tebing karst Sombori, laguna toska rahasia, dan desa terapung suku Bajo yang ramah.',
    highlights: [
      'Gugusan tebing karst megah mirip Raja Ampat',
      'Trekking ke puncak tebing Tebing Kahyangan Sombori',
      'Laguna toska tersembunyi Gua Berlian & Danau Air Asin',
      'Interaksi hangat dengan komunitas Suku Bajo lokal'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Meeting Point Luwuk — Sailing to South Archipelago',
        description: 'Meeting point di Luwuk, persiapan logistik kapal cepat wisata, briefing keselamatan pelayaran, berlayar melintasi perairan biru Banggai Laut.',
        spots: ['Pelabuhan Marina Luwuk', 'Perairan Selat Peleng', 'Basecamp Sombori']
      },
      {
        day: 2,
        title: 'Gua Berlian, Tebing Kahyangan & Hidden Lagoon',
        description: 'Menjelajahi keajaiban stalaktit berkilau di Gua Berlian, trekking santai menikmati panorama puncak Kahyangan, dan berenang di laguna toska tenang.',
        spots: ['Gua Berlian', 'Tebing Kahyangan', 'Laguna Rahasia Sombori', 'Danau Kunci']
      },
      {
        day: 3,
        title: 'Bajo Sea Village & Sandbar Sunset',
        description: 'Kunjungan budaya ke perkampungan terapung suku laut Bajo, menikmati fresh grilled fish tangkapan nelayan, dan sunset di pasir timbul Pulau Mbokita.',
        spots: ['Desa Terapung Mbokita', 'Pasir Timbul', 'Gua Tengkorak Karst']
      },
      {
        day: 4,
        title: 'Morning Snorkel & Return Journey to Mainland',
        description: 'Sesi snorkeling pagi dengan terumbu karang warna-warni sebelum berlayar kembali ke Luwuk. Transfer ke bandara.',
        spots: ['Spot Snorkeling Karang Bintang', 'Luwuk City Souvenir', 'Bandara Luwuk']
      }
    ],
    included: [
      'Kapal cepat wisata (speedboat privat twin-engine) selama 4 hari',
      'Bahan bakar kapal & kapten berpengalaman serta kru lokal',
      'Penginapan cottage terapung di Sombori 3 malam',
      'Makan lengkap (fresh seafood barbecue, sarapan, & bekal pulau)',
      'Dokumentasi drone pilot profesional (video cinematic 4K & reels)',
      'Perizinan konservasi kawasan laut & guide lokal',
      'Alat snorkeling lengkap & pelampung'
    ],
    excluded: [
      'Tiket pesawat menuju Luwuk',
      'Kebutuhan belanja pribadi'
    ]
  },
  {
    id: 'snorkeling-jellyfish-3d2n',
    name: 'Snorkeling & Stingless Jellyfish Sanctuary',
    subtitle: 'Swim with Gentle Golden Jellyfish',
    badge: 'Eco Adventure',
    category: 'adventure',
    duration: '3 Days 2 Nights',
    groupType: 'Private or Small Group',
    priceIdr: 3100000,
    priceUsd: 199,
    image: assetUrl('assets/images/banggai_snorkeling_coral_1793766898966.jpg'),
    rating: 4.92,
    reviewCount: 76,
    shortDesc: 'Pengalaman magis berenang di Danau Ubur-Ubur tanpa sengat Mbuang-Mbuang dan snorkeling di terumbu karang hidup penuh ikan nemo.',
    highlights: [
      'Berenang bersama ribuan ubur-ubur emas tanpa sengat',
      'Taman terumbu karang terawat dengan visibility hingga 25 meter',
      'Ekowisata berbasis pelestarian terumbu karang lokal',
      'Foto underwater dan video drone resolusi tinggi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Luwuk — Banggai Laut Crossing',
        description: 'Perjalanan laut menuju Banggai Laut. Menikmati perairan tenang, singgah di pulau-pulau kecil tak berpenghuni dengan pantai karang putih.',
        spots: ['Pelabuhan Banggai', 'Pantai Oyama', 'Homestay Ekowisata']
      },
      {
        day: 2,
        title: 'Mbuang-Mbuang Jellyfish Lake Exploration',
        description: 'Memasuki danau air asin tersembunyi habitat ubur-ubur Mastigias tanpa sengat. Mengikuti panduan ramah lingkungan, dilanjutkan snorkeling di terumbu karang luar.',
        spots: ['Danau Ubur-Ubur Mbuang-Mbuang', 'Pintu Laguna Batu', 'Taman Koral Karang']
      },
      {
        day: 3,
        title: 'Pulau Dua Sunrise & Departure',
        description: 'Mendaki bukit Pulau Dua menyaksikan matahari terbit di atas lautan luas, jembatan kayu estetik, lalu kembali ke Luwuk.',
        spots: ['Pulau Dua (Pulo Dua)', 'Bukit Savanna', 'Bandara Luwuk']
      }
    ],
    included: [
      'Speedboat transfer & island cruise',
      'Penginapan 2 malam di Banggai Laut',
      'Konsumsi penuh 3x sehari',
      'Retribusi konservasi Danau Ubur-ubur Mbuang-Mbuang',
      'Alat snorkeling & life jacket',
      'Dokumentasi underwater (GoPro 4K) & drone overhead',
      'Local eco-guide pendamping'
    ],
    excluded: [
      'Tiket pesawat PP',
      'Pengeluaran pribadi'
    ]
  },
  {
    id: 'pulo-dua-overland-2d1n',
    name: 'Pulo Dua & Tropical Coast Getaway',
    subtitle: 'Rolling Green Savanna & Azure Sea Bridge',
    badge: 'Most Popular',
    category: 'overland',
    duration: '2 Days 1 Night',
    groupType: 'Family & Group Friendly',
    priceIdr: 1850000,
    priceUsd: 120,
    image: assetUrl('assets/images/banggai_pulodua_coasthill_1793781298326.jpg'),
    rating: 4.89,
    reviewCount: 115,
    shortDesc: 'Trip akhir pekan favorit! Menjelajahi bukit hijau Teletubbies Pulo Dua dengan jembatan kayu panjang yang membentang di atas karang kristal.',
    highlights: [
      'Pemandangan 360 derajat perbukitan dan lautan luas',
      'Jembatan kayu panjang ikonik Pulo Dua untuk spot foto terbaik',
      'Pantai berpasir putih sepi dan tenang untuk bersantai',
      'Jadwal santai yang sangat cocok untuk keluarga'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Luwuk to Balantak — Pulo Dua Sunset Climb',
        description: 'Menyusuri jalur darat pantai timur Sulawesi menuju Balantak. Menyeberang dengan perahu tradisional ke Pulo Dua. Trekking tangga kayu ke puncak bukit saat matahari terbenam.',
        spots: ['Pesisir Balantak', 'Dermaga Pulo Dua', 'Puncak Bukit Teletubbies']
      },
      {
        day: 2,
        title: 'Pulo Dua Sunrise & Coastal Snorkel — Return',
        description: 'Sunrise spektakuler dengan latar langit jingga keemasan. Berenang santai di air laut jernih sebelum kembali ke kota Luwuk untuk kuliner khas coto dan kopi.',
        spots: ['Sunrise Point', 'Karang Dangkal Pulo Dua', 'Kota Luwuk']
      }
    ],
    included: [
      'Mobil wisata ber-AC Luwuk - Balantak PP',
      'Perahu kayu tradisional penyeberangan Pulo Dua',
      'Penginapan 1 malam di cottage tepi laut Balantak',
      'Makan & air mineral',
      'Tiket masuk kawasan wisata',
      'Pemandu lokal ramah & dokumentasi foto/drone'
    ],
    excluded: [
      'Tiket pesawat ke Luwuk',
      'Belanja oleh-oleh pribadi'
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'paisu-pok',
    name: 'Danau Paisu Pok',
    tagline: 'Danau Cermin Terbening di Nusantara',
    location: 'Desa Luk Panenteng, Pulau Peleng, Banggai Kepulauan',
    category: 'lake',
    image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
    description: 'Tersembunyi di rimbunnya hutan tropis Peleng, Danau Paisu Pok memiliki air yang begitu jernih hingga perahu kayu seolah melayang di udara. Kejernihannya memungkinkan Anda melihat bebatuan purba dan batang pohon yang terawetkan di kedalaman 10 meter.',
    bestTime: 'Pukul 08.00 - 13.00 saat sinar matahari menembus kanopi hutan',
    activities: ['Berkano / Stand-up paddle', 'Berenang di air sejuk', 'Fotografi & Video Drone', 'Jelajah hutan sekitar'],
    facts: [
      'Air tawar bersumber dari mata air karst alami',
      'Suhu air sejuk 22-24°C sepanjang tahun',
      'Dikelola ramah lingkungan bersama masyarakat desa adat Luk Panenteng'
    ]
  },
  {
    id: 'sombori-archipelago',
    name: 'Kepulauan Sombori',
    tagline: 'Gugusan Karst Magis & Laguna Toska',
    location: 'Perairan Selatan Banggai & Morowali',
    category: 'island',
    image: assetUrl('assets/images/banggai_sombori_islands_1793766898898.jpg'),
    description: 'Sering dijuluki sebagai "Raja Ampat Sulawesi", Sombori menyuguhkan pemandangan spektakuler tebing karst purba yang menjulang dari laut berwarna hijau zamrud dan toska. Laguna tersembunyi dan gua-gua stalaktit menanti untuk dijelajahi.',
    bestTime: 'April hingga November saat ombak tenang dan langit cerah',
    activities: ['Island hopping speedboat', 'Trekking Tebing Kahyangan', 'Eksplorasi Gua Berlian', 'Kunjungan suku Bajo'],
    facts: [
      'Puluhan tebing karst vertikal dengan keanekaragaman hayati tinggi',
      'Air tenang alami terlindung dari ombak samudera',
      'Surga bagi pencinta fotografi drone dan lanskap'
    ]
  },
  {
    id: 'danau-ubur-ubur',
    name: 'Danau Ubur-Ubur Mbuang-Mbuang',
    tagline: 'Berenang Bersama Ribuan Ubur-Ubur Jinak',
    location: 'Desa Mbuang-Mbuang, Banggai Laut',
    category: 'underwater',
    image: assetUrl('assets/images/banggai_snorkeling_coral_1793766898966.jpg'),
    description: 'Salah satu dari sedikit danau ubur-ubur tanpa sengat di dunia. Ribuan ubur-ubur emas (Mastigias papua) berevolusi tanpa predator selama ribuan tahun, sehingga Anda dapat berenang bebas di dekat mereka tanpa rasa khawatir tersengat.',
    bestTime: 'Pagi hingga siang hari saat ubur-ubur naik mengikuti cahaya matahari',
    activities: ['Snorkeling tanpa fin (eco-friendly)', 'Underwater macro photography', 'Edukasi konservasi laut'],
    facts: [
      'Dilarang menggunakan sunblock berbahan kimia dan fin kaku',
      'Kejernihan air sangat terjaga oleh regulasi ketat desa',
      'Spesies langka yang dilindungi dunia'
    ]
  },
  {
    id: 'pantai-mandel',
    name: 'Pantai Mandel & Mbuang',
    tagline: 'Garis Pantai Tropis Sunyi Berpasir Putih Halus',
    location: 'Pesisir Barat Pulau Peleng, Banggai Kepulauan',
    category: 'beach',
    image: assetUrl('assets/images/banggai_white_sand_beach_1793766899675.jpg'),
    description: 'Pantai tropis impian dengan hamparan pasir putih sehalus bedak dan deretan pohon kelapa yang condong ke arah laut biru. Suasananya sunyi dan tenang, memberikan pengalaman liburan pulau pribadi yang sesungguhnya.',
    bestTime: 'Sore hari untuk menikmati golden sunset di bibir pantai',
    activities: ['Santai kelapa muda', 'Berenang di ombak tenang', 'Piknik pantai privat', 'Camping tepi laut'],
    facts: [
      'Gradasi warna air dari bening transparan hingga biru laut dalam',
      'Jauh dari keramaian turis massal',
      'Spot terbaik untuk relaksasi dan detox dari kebisingan kota'
    ]
  },
  {
    id: 'pulo-dua',
    name: 'Pulo Dua & Balantak',
    tagline: 'Perbukitan Hijau Savanna & Jembatan Laut Estetik',
    location: 'Kecamatan Balantak, Kabupaten Banggai',
    category: 'island',
    image: assetUrl('assets/images/banggai_pulodua_coasthill_1793781298326.jpg'),
    description: 'Ikon wisata alam Balantak yang memadukan bukit hijau Teletubbies dengan laut biru toska bergradasi. Dilengkapi jembatan kayu estetik yang membelah perairan dangkal menuju pulau, menjadikannya salah satu panorama terindah di Sulawesi Tengah.',
    bestTime: 'Pagi hari untuk sunrise atau sore hari menjelang matahari terbenam',
    activities: ['Trekking puncak bukit', 'Fotografi jembatan kayu', 'Berenang di air laut jernih', 'Camping tepi bukit'],
    facts: [
      'Panorama 360 derajat perbukitan dan lautan luas Samudra Pasifik',
      'Jembatan kayu panjang yang ikonik membentang di atas karang',
      'Akses mudah dari Luwuk dengan perjalanan darat berpemandangan indah'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'island-hopping-first-timers',
    title: 'Island Hopping for First-Timers: How to Plan the Perfect Banggai Trip',
    slug: 'island-hopping-banggai-guide',
    category: 'Travel Guide',
    readTime: '5 min read',
    publishedDate: '12 October 2026',
    author: 'Reza Pratama (Founder & Local Expedition Leader)',
    image: assetUrl('assets/images/banggai_sombori_islands_1793766898898.jpg'),
    summary: 'Dari rute penerbangan menuju Bandara Luwuk (LUW), memilih kapal cepat yang aman, hingga waktu terbaik menghindari gelombang musiman di Kepulauan Banggai.',
    content: [
      'Kepulauan Banggai di Sulawesi Tengah adalah salah satu surga tersembunyi Indonesia yang kini mulai mencuri perhatian wisatawan dunia. Namun karena lokasinya yang masih murni dan belum terjamah pariwisata massal, perencanaan yang matang sangat menentukan kenyamanan perjalanan Anda.',
      '1. Cara Menuju ke Banggai: Pintu gerbang utama adalah Bandara Syukuran Aminuddin Amir di Luwuk (kode: LUW). Terdapat penerbangan langsung harian dari Makassar (UPG) dan Manado (MDC) menggunakan maskapai Lion Air, Wings Air, atau Batik Air.',
      '2. Waktu Terbaik Berkunjung: Musim terbaik untuk berlayar dan island hopping adalah bulan April hingga November. Pada periode ini, laut cenderung tenang seperti cermin dan langit biru cerah, sangat sempurna untuk fotografi drone dan snorkeling.',
      '3. Apa Saja yang Wajib Dibawa: Dry bag tahan air (15-20L), sepatu karang (water shoes), baju renang berlengan panjang anti-UV (rash guard), dan kamera anti air (GoPro/DJI). Bersama Banggai Paradise, Anda tidak perlu khawatir karena dokumentasi drone 4K sudah termasuk cuma-cuma!'
    ]
  },
  {
    id: 'paisu-pok-crystal-lake-secrets',
    title: 'Menyingkap Rahasia Danau Paisu Pok: Danau Kaca Tersembunyi di Peleng',
    slug: 'paisu-pok-crystal-lake-secrets',
    category: 'Local Stories',
    readTime: '4 min read',
    publishedDate: '28 September 2026',
    author: 'Siti Nurhaliza (Local Culture & Nature Guide)',
    image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
    summary: 'Mengapa air Danau Paisu Pok bisa begitu jernih seperti melayang? Simak cerita kearifan lokal masyarakat Desa Luk Panenteng yang menjaga kemurnian danau ini.',
    content: [
      'Kata "Paisu Pok" dalam bahasa suku asli Banggai berarti "Air Hitam" atau "Air Gelap" — namun jangan salah sangka, warna gelap tersebut berasal dari kedalaman danau dan refleksi rimbunnya hutan tropis serta lumut purba di dasar danau, sementara airnya sendiri sebening kaca tanpa distorsi.',
      'Kearifan lokal desa melarang keras membuang sampah, mencuci dengan sabun kimia di area danau, ataupun merusak bebatuan purba. Hasilnya adalah ekosistem danau air tawar paling lestari yang pernah Anda temui di Indonesia.',
      'Tips fotografi: Waktu terbaik mengambil foto perahu melayang adalah pukul 09.00 hingga 11.30 pagi, ketika matahari berada tepat di sudut yang membiaskan cahaya menembus air hingga ke dasar danau.'
    ]
  },
  {
    id: 'snorkeling-jellyfish-conservation',
    title: 'Snorkeling Basics: Menyelam di Danau Ubur-Ubur Tanpa Mengganggu Ekosistem',
    slug: 'snorkeling-basics-jellyfish-banggai',
    category: 'Eco Tips',
    readTime: '3 min read',
    publishedDate: '15 September 2026',
    author: 'Capt. Hendra (Banggai Marine Safety Officer)',
    image: assetUrl('assets/images/banggai_snorkeling_coral_1793766898966.jpg'),
    summary: 'Etika penting berenang di danau ubur-ubur tanpa sengat: tidak memakai fin keras, menghindari tabir surya kimiawi berbahaya, dan teknik bergerak halus.',
    content: [
      'Berenang di Danau Ubur-ubur Mbuang-Mbuang adalah salah satu pengalaman paling damai dalam hidup. Ubur-ubur ini sangat sensitif dan lembut; tubuh mereka 95% terdiri dari air.',
      'Aturan emas utama: Gunakan life jacket untuk mengapung santai tanpa perlu mengayuhkan kaki secara agresif. Jangan menyentuh atau mengangkat ubur-ubur keluar dari permukaan air karena mereka tidak dapat bernapas di udara bebas.',
      'Banggai Paradise berkomitmen pada pariwisata berkelanjutan (sustainable eco-tourism). Setiap tamu kami dampingi secara privat untuk memastikan keindahan alam ini tetap abadi bagi generasi mendatang.'
    ]
  }
];

export const WHY_CHOOSE_US_FEATURES = [
  {
    number: '01',
    title: 'Professional Local Guide',
    description: 'Pemandu lokal asli berlisensi HPI yang lahir dan besar di Banggai. Ramah, menguasai medan, dan mengetahui spot rahasia terindah di pulau.',
    iconName: 'UserCheck'
  },
  {
    number: '02',
    title: 'Free Drone Documentation',
    description: 'Gratis dokumentasi video drone 4K dan foto cinematic mirrorless di setiap trip. Siap posting ke Instagram dan TikTok Anda.',
    iconName: 'Camera'
  },
  {
    number: '03',
    title: 'Comfortable Transportation',
    description: 'Armada darat mobil bersih ber-AC dan kapal cepat wisata (speedboat) dengan standar keamanan maritim & rompi pelampung lengkap.',
    iconName: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Flexible Private Trip',
    description: 'Bebas atur tanggal keberangkatan dan kustomisasi rute sesuai preferensi keluarga, pasangan, maupun grup kantor tanpa digabung orang asing.',
    iconName: 'Compass'
  },
  {
    number: '05',
    title: 'Complete Land & Sea Experience',
    description: 'Kombinasi lengkap eksplorasi darat (danau kaca purba, air terjun, bukit savana) serta bahari (laguna karst toska, terumbu karang, danau ubur-ubur).',
    iconName: 'MapPin'
  }
];

export const THREE_STEPS = [
  {
    step: 1,
    title: 'Share your dream trip',
    description: 'Pilih paket yang Anda sukai atau tentukan destinasi, tanggal, dan jumlah peserta perjalanan Anda.',
    accentColor: '#0EA5E9'
  },
  {
    step: 2,
    title: 'We craft your plan',
    description: 'Tim ahli kami menyiapkan itinerary detail, estimasi waktu, serta penawaran harga terbaik dan transparan.',
    accentColor: '#14B8A6'
  },
  {
    step: 3,
    title: 'Pack and enjoy',
    description: 'Tiba di Luwuk Banggai dengan tenang. Seluruh transportasi, penginapan, dan dokumentasi diurus tuntas.',
    accentColor: '#F97316'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Dimas & Anindya',
    role: 'Couple Travelers',
    location: 'Jakarta Selatan',
    avatar: '💑',
    rating: 5,
    date: 'Oktober 2026',
    tripPackage: 'Paisu Pok & Peleng Wonder (3D2N)',
    title: 'Danau Paisu Pok lebih magis dari ekspektasi!',
    comment: 'Awalnya sempat ragu karena akses ke pulau Peleng, tapi tim Banggai Paradise membuat semuanya sangat nyaman dari dijemput di Bandara Luwuk sampai penyeberangan speedboat VIP. Air danau Paisu Pok benar-benar seperti kaca! Hasil video drone 4K yang dikasih gratis hasilnya sinematik banget buat reels.',
    highlightSpot: 'Danau Paisu Pok & Pantai Mandel',
    verified: true,
    userType: 'Couple'
  },
  {
    id: 'testi-2',
    name: 'Marcus Vance',
    role: 'Travel Photographer',
    location: 'Sydney, Australia',
    avatar: '📷',
    rating: 5,
    date: 'September 2026',
    tripPackage: 'Sombori & Island Hopping (4D3N)',
    title: 'Raja Ampat of Sulawesi without the tourist crowds',
    comment: 'Sombori Archipelago blew my mind. Crystal clear turquoise lagoons, dramatic vertical karst cliffs, and zero cruise ship crowds. Capt. Hendra navigated secret tidal lagoons with utmost safety. Banggai Paradise is genuinely local, ethical, and top-tier in hospitality.',
    highlightSpot: 'Tebing Kahyangan & Gua Berlian',
    verified: true,
    userType: 'Solo Adventurer'
  },
  {
    id: 'testi-3',
    name: 'Keluarga Hartono (5 Pax)',
    role: 'Family Vacation',
    location: 'Surabaya, Jawa Timur',
    avatar: '👨‍👩‍👧‍👦',
    rating: 5,
    date: 'Agustus 2026',
    tripPackage: 'Snorkeling & Jellyfish Sanctuary (3D2N)',
    title: 'Aman untuk anak-anak, berenang dengan ubur-ubur tanpa sengat!',
    comment: 'Bawa 2 anak umur 8 dan 11 tahun awalnya agak was-was. Tapi guide Banggai Paradise sabar sekali, life jacket anak-anak sangat proper dan standar SNI. Anak-anak sangat takjub bisa menyentuh ubur-ubur emas jinak tanpa rasa gatal atau tersengat. Makanan seafood bakarnya segar sekali!',
    highlightSpot: 'Danau Ubur-Ubur Mbuang-Mbuang',
    verified: true,
    userType: 'Family'
  },
  {
    id: 'testi-4',
    name: 'Nadia & Travel Squad (6 Pax)',
    role: 'Group of Friends',
    location: 'Bandung',
    avatar: '🎒',
    rating: 5,
    date: 'Juli 2026',
    tripPackage: 'Pulo Dua & Tropical Coast (2D1N)',
    title: 'Sunset terindah di bukit Pulo Dua dan jembatan kayu!',
    comment: 'Trip weekend yang super worth it! Mobil penjemputan bersih, ber-AC dingin, dan supirnya sangat ramah. Pas sampai di jembatan kayu Pulo Dua pas golden hour, view perbukitan savana ketemu laut toska gak ada lawan. Terima kasih tim Banggai Paradise!',
    highlightSpot: 'Bukit Teletubbies Pulo Dua',
    verified: true,
    userType: 'Group Friends'
  },
  {
    id: 'testi-5',
    name: 'Clarissa Tan & Kevin',
    role: 'Honeymooners',
    location: 'Singapore',
    avatar: '💍',
    rating: 5,
    date: 'Juni 2026',
    tripPackage: 'Custom Private Honeymoon (4D3N)',
    title: 'Flawless private romantic getaway',
    comment: 'We wanted an intimate getaway away from typical commercial resort islands. Banggai Paradise tailored a private boat cruise just for the two of us. Candlelight beach dinner with fresh coconut and private sunset watching. The team even surprised us with a custom edited anniversary video!',
    highlightSpot: 'Private Mandel Beach Picnic',
    verified: true,
    userType: 'Couple'
  },
  {
    id: 'testi-6',
    name: 'Bramantyo & Tim Komunitas',
    role: 'Diving & Drone Club',
    location: 'Makassar',
    avatar: '🤿',
    rating: 5,
    date: 'Mei 2026',
    tripPackage: 'Ultimate Banggai Overland & Sea (5D4N)',
    title: 'Organisasi lapangan sangat rapi & kapten kapal berpengalaman',
    comment: 'Sebagai grup pecinta bahari, kami sangat menghargai kapten kapal yang paham pasang surut air dan spot diving dengan visibility tinggi. Logistik makanan, air bersih, dan penginapan cottage terapung sangat terjaga. Pasti akan repeat trip tahun depan!',
    highlightSpot: 'Spot Karang Peleng & Sombori',
    verified: true,
    userType: 'Group Friends'
  }
];
