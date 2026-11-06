import { Language } from '../i18n/translations';

/** [time-of-day label, bullet points] */
export type ItinerarySlot = [string, string[]];
export type ItineraryDay = { day: string; title: string; slots: ItinerarySlot[] };

/**
 * Day-by-day outlines for each private-trip package.
 *
 * These are route suggestions built only from the destinations listed for each package.
 * They intentionally contain no prices, hotel names or fixed departure times: the final order,
 * timings and inclusions are confirmed in the written proposal (boats, weather and local conditions apply).
 * The luwuk-stopover outline mirrors LuwukStopoverPage (1-day version) so the Spanish page matches the ID/EN pages.
 * The custom-banggai-trip entry describes how a custom route is prepared rather than a fixed route.
 */
export const packageItineraries: Record<string, Record<Language, ItineraryDay[]>> = {
  'luwuk-one-day': {
    ID: [
      { day: 'Hari 1', title: 'Air terjun dan pesisir Luwuk', slots: [
        ['Pagi — Penjemputan di Luwuk', ['Penjemputan di titik yang disepakati di Luwuk', 'Perkenalan singkat dengan pemandu dan rencana hari itu']],
        ['Siang — Air Terjun Piala', ['Mengunjungi kawasan Air Terjun Piala', 'Waktu untuk menikmati alam sekitar dan fotografi', 'Jeda makan siang']],
        ['Sore — Pesisir Kilo 5', ['Menuju kawasan pesisir Kilo 5', 'Menikmati suasana pantai dan fotografi']],
        ['Akhir hari — Pengantaran', ['Kembali ke Luwuk dan pengantaran ke titik yang disepakati']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'Waterfall and coastline around Luwuk', slots: [
        ['Morning — Pick-up in Luwuk', ['Pick-up at the agreed point in Luwuk', 'Short introduction to your guide and the plan for the day']],
        ['Midday — Piala Waterfall', ['Visit the Piala Waterfall area', 'Time to enjoy the surroundings and take photos', 'Lunch break']],
        ['Afternoon — Kilo 5 coast', ['Head to the Kilo 5 coastal area', 'Enjoy the beach atmosphere and photography']],
        ['End of day — Drop-off', ['Return to Luwuk and drop-off at the agreed point']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'Cascada y costa de Luwuk', slots: [
        ['Mañana — Recogida en Luwuk', ['Recogida en el punto acordado en Luwuk', 'Breve presentación del guía y del plan del día']],
        ['Mediodía — Cascada de Piala', ['Visita a la zona de la cascada de Piala', 'Tiempo para disfrutar del entorno y hacer fotos', 'Pausa para comer']],
        ['Tarde — Costa de Kilo 5', ['Traslado a la zona costera de Kilo 5', 'Ambiente de playa y tiempo para fotografía']],
        ['Final del día — Regreso', ['Vuelta a Luwuk y despedida en el punto acordado']]
      ] }
    ]
  },

  'luwuk-stopover': {
    ID: [
      { day: 'Hari 1', title: 'Luwuk Stopover — 1 Day Escape', slots: [
        ['11.30 — Tiba di Luwuk', ['Penjemputan oleh tim lokal di bandara atau titik awal yang disepakati', 'Meet and greet dan persiapan perjalanan']],
        ['12.00 — Pickup & makan siang', ['Berangkat dengan private transport', 'Makan siang atau mencoba kuliner lokal']],
        ['13.30 — Explore Piala Waterfall', ['Mengunjungi kawasan Air Terjun Piala', 'Menikmati alam tropis, berenang, dan bersantai', 'Dokumentasi perjalanan']],
        ['15.30 — Kilo 5 & pesisir Luwuk', ['Menuju kawasan pesisir Luwuk', 'Mengunjungi Kilo 5 dan menikmati suasana sore', 'Waktu untuk foto dan bersantai']],
        ['18.30 — Drop-off hotel / bandara', ['Diantar ke hotel atau bandara', 'Perjalanan selesai']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'Luwuk Stopover — 1 Day Escape', slots: [
        ['11:30 — Arrival in Luwuk', ['Pick-up by the local team at the airport or an agreed starting point', 'Meet and greet and trip briefing']],
        ['12:00 — Pickup & lunch', ['Depart by private transport', 'Lunch or a local food experience']],
        ['13:30 — Explore Piala Waterfall', ['Visit the Piala Waterfall area', 'Enjoy the tropical surroundings, swim and relax', 'Trip documentation']],
        ['15:30 — Kilo 5 & Luwuk coastline', ['Head to the Luwuk coastline', 'Visit Kilo 5 and enjoy the afternoon atmosphere', 'Time for photos and relaxing']],
        ['18:30 — Drop-off at hotel / airport', ['Transfer to your hotel or the airport', 'Trip ends']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'Escapada a Luwuk — 1 día', slots: [
        ['11:30 — Llegada a Luwuk', ['Recogida por el equipo local en el aeropuerto o en un punto acordado', 'Bienvenida y explicación del plan']],
        ['12:00 — Recogida y comida', ['Salida en transporte privado', 'Comida o primer contacto con la gastronomía local']],
        ['13:30 — Cascada de Piala', ['Visita a la zona de la cascada de Piala', 'Entorno tropical, baño y descanso', 'Registro fotográfico del viaje']],
        ['15:30 — Kilo 5 y costa de Luwuk', ['Traslado a la costa de Luwuk', 'Visita a Kilo 5 y ambiente de atardecer', 'Tiempo para fotos y descanso']],
        ['18:30 — Traslado al hotel o al aeropuerto', ['Te llevamos al hotel o al aeropuerto', 'Fin del viaje']]
      ] }
    ]
  },

  'luwuk-salakan': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menuju Salakan', slots: [
        ['Tiba di Luwuk & Air Terjun Piala', ['Kedatangan di Luwuk', 'Mengunjungi Air Terjun Piala']],
        ['Pelabuhan & kapal ke Salakan', ['Transfer ke pelabuhan', 'Kapal menuju Salakan; jadwal dan lama penyeberangan dikonfirmasi untuk tanggal perjalananmu dan bergantung pada kondisi laut']],
        ['Check-in hotel', ['Check-in hotel di Salakan']]
      ] },
      { day: 'Hari 2', title: 'Menjelajahi Banggai / Peleng', slots: [
        ['Destinasi hari ini', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Pantai Poganda']]
      ] },
      { day: 'Hari 3', title: 'Eksplorasi pantai & kembali ke Luwuk', slots: [
        ['Destinasi hari ini', ['Pantai Pompon', 'Pantai Mandel']],
        ['Kembali ke Luwuk', ['Perjalanan kembali ke Luwuk sesuai jadwal kapal']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'From Luwuk to Salakan', slots: [
        ['Arrival in Luwuk & Piala Waterfall', ['Arrival in Luwuk', 'Visit Piala Waterfall']],
        ['Harbor & ferry to Salakan', ['Transfer to the harbor', 'Ferry to Salakan; the boat schedule and crossing time are confirmed for your dates and depend on sea conditions']],
        ['Hotel check-in', ['Hotel check-in in Salakan']]
      ] },
      { day: 'Day 2', title: 'Exploring Banggai / Peleng', slots: [
        ['Today\'s destinations', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Poganda Beach']]
      ] },
      { day: 'Day 3', title: 'Beach exploration & return to Luwuk', slots: [
        ['Today\'s destinations', ['Pompon Beach', 'Mandel Beach']],
        ['Return to Luwuk', ['Journey back to Luwuk according to the boat schedule']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'De Luwuk a Salakan', slots: [
        ['Llegada a Luwuk y cascada de Piala', ['Llegada a Luwuk', 'Visita a la cascada de Piala']],
        ['Puerto y barco a Salakan', ['Traslado al puerto', 'Barco a Salakan; el horario y la duración de la travesía se confirman para vuestras fechas y dependen del estado del mar']],
        ['Registro en el hotel', ['Registro en el hotel de Salakan']]
      ] },
      { day: 'Día 2', title: 'Explorando Banggai / Peleng', slots: [
        ['Lugares del día', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Playa de Poganda']]
      ] },
      { day: 'Día 3', title: 'Exploración de playas y regreso a Luwuk', slots: [
        ['Lugares del día', ['Playa de Pompon', 'Playa de Mandel']],
        ['Regreso a Luwuk', ['Viaje de vuelta a Luwuk según el horario del barco']]
      ] }
    ]
  },

  'banggai-four-days': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menuju Salakan', slots: [
        ['Tiba di Luwuk & Air Terjun Piala', ['Kedatangan di Luwuk', 'Mengunjungi Air Terjun Piala']],
        ['Perjalanan ke Salakan', ['Transfer menuju Salakan; jadwal kapal dan kondisi laut dikonfirmasi untuk tanggal perjalananmu']],
        ['Check-in hotel', ['Check-in hotel di Salakan']]
      ] },
      { day: 'Hari 2', title: 'Menjelajahi Banggai / Peleng', slots: [
        ['Destinasi hari ini', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Pantai Poganda']]
      ] },
      { day: 'Hari 3', title: 'Eksplorasi pantai', slots: [
        ['Destinasi hari ini', ['Bontolan', 'Pantai Oyama', 'Long Beach']]
      ] },
      { day: 'Hari 4', title: 'Kembali ke Luwuk', slots: [
        ['Destinasi hari ini', ['Pantai Pompon', 'Pantai Mandel']],
        ['Kembali ke Luwuk', ['Perjalanan kembali ke Luwuk sesuai jadwal kapal']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'From Luwuk to Salakan', slots: [
        ['Arrival in Luwuk & Piala Waterfall', ['Arrival in Luwuk', 'Visit Piala Waterfall']],
        ['Journey to Salakan', ['Transfer to Salakan; the boat schedule and sea conditions are confirmed for your dates']],
        ['Hotel check-in', ['Hotel check-in in Salakan']]
      ] },
      { day: 'Day 2', title: 'Exploring Banggai / Peleng', slots: [
        ['Today\'s destinations', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Poganda Beach']]
      ] },
      { day: 'Day 3', title: 'Beach exploration', slots: [
        ['Today\'s destinations', ['Bontolan', 'Oyama Beach', 'Long Beach']]
      ] },
      { day: 'Day 4', title: 'Return to Luwuk', slots: [
        ['Today\'s destinations', ['Pompon Beach', 'Mandel Beach']],
        ['Return to Luwuk', ['Journey back to Luwuk according to the boat schedule']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'De Luwuk a Salakan', slots: [
        ['Llegada a Luwuk y cascada de Piala', ['Llegada a Luwuk', 'Visita a la cascada de Piala']],
        ['Viaje a Salakan', ['Traslado a Salakan; el horario del barco y el estado del mar se confirman para vuestras fechas']],
        ['Registro en el hotel', ['Registro en el hotel de Salakan']]
      ] },
      { day: 'Día 2', title: 'Explorando Banggai / Peleng', slots: [
        ['Lugares del día', ['Paisu Pok', 'Paisu Batango', 'Kawalu Bay', 'Playa de Poganda']]
      ] },
      { day: 'Día 3', title: 'Exploración de playas', slots: [
        ['Lugares del día', ['Bontolan', 'Playa de Oyama', 'Long Beach']]
      ] },
      { day: 'Día 4', title: 'Regreso a Luwuk', slots: [
        ['Lugares del día', ['Playa de Pompon', 'Playa de Mandel']],
        ['Regreso a Luwuk', ['Viaje de vuelta a Luwuk según el horario del barco']]
      ] }
    ]
  },

  'banggai-five-days': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menuju Salakan', slots: [
        ['Pagi — Memulai di Luwuk', ['Pertemuan dengan pemandu dan persiapan perjalanan', 'Menuju titik penyeberangan sesuai jadwal kapal']],
        ['Siang–sore — Penyeberangan ke Salakan', ['Perjalanan laut menuju Salakan di Pulau Peleng', 'Jadwal kapal dan lama penyeberangan dikonfirmasi untuk tanggal perjalananmu']],
        ['Malam — Check-in dan istirahat', ['Check-in akomodasi dan waktu bebas']]
      ] },
      { day: 'Hari 2', title: 'Salakan dan sekitarnya', slots: [
        ['Pagi–sore — Menjelajahi Salakan', ['Waktu lebih longgar untuk mengenal Salakan dan kawasan sekitarnya', 'Destinasi dipilih bersama sesuai minat dan kondisi lokal']],
        ['Malam — Istirahat', ['Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 3', title: 'Kawasan Danau Paisu Pok', slots: [
        ['Pagi — Menuju Luk Panenteng', ['Berangkat lebih pagi menuju Desa Luk Panenteng lewat jalur darat']],
        ['Siang — Danau Paisu Pok', ['Berjalan kaki dari desa menuju danau', 'Menikmati air yang jernih, fotografi, dan bersantai']],
        ['Sore–malam — Kembali dan istirahat', ['Kembali ke akomodasi', 'Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 4', title: 'Destinasi pesisir pilihan di Peleng', slots: [
        ['Pagi–sore — Destinasi pilihan', ['Satu atau dua destinasi pesisir di Pulau Peleng sesuai kesepakatan, misalnya Pantai Poganda atau Paisu Batango', 'Waktu untuk berenang, bersantai, dan fotografi bila kondisi memungkinkan']],
        ['Malam — Istirahat', ['Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 5', title: 'Kembali ke Luwuk', slots: [
        ['Pagi — Check-out', ['Sarapan, check-out, dan persiapan kembali']],
        ['Siang–sore — Perjalanan pulang', ['Menyeberang kembali ke Luwuk sesuai jadwal kapal', 'Pengantaran ke titik yang disepakati dan trip selesai', 'Sebaiknya jangan memesan penerbangan lanjutan di hari yang sama']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'From Luwuk to Salakan', slots: [
        ['Morning — Start in Luwuk', ['Meet your guide and prepare for the journey', 'Head to the crossing point according to the boat schedule']],
        ['Midday to afternoon — Crossing to Salakan', ['Sea journey to Salakan on Peleng Island', 'Boat schedule and crossing time are confirmed for your travel dates']],
        ['Evening — Check-in and rest', ['Check in to your accommodation and enjoy free time']]
      ] },
      { day: 'Day 2', title: 'Salakan and surroundings', slots: [
        ['Morning to afternoon — Exploring Salakan', ['A more relaxed day to get to know Salakan and the surrounding area', 'Destinations are chosen together depending on interests and local conditions']],
        ['Evening — Rest', ['Dinner and free time']]
      ] },
      { day: 'Day 3', title: 'The Lake Paisu Pok area', slots: [
        ['Morning — Towards Luk Panenteng', ['Early departure by road to Luk Panenteng village']],
        ['Midday — Lake Paisu Pok', ['Walk from the village to the lake', 'Enjoy the clear water, photography and relaxing']],
        ['Afternoon to evening — Return and rest', ['Return to your accommodation', 'Dinner and free time']]
      ] },
      { day: 'Day 4', title: 'Selected coastal stops on Peleng', slots: [
        ['Morning to afternoon — Selected destinations', ['One or two coastal destinations on Peleng Island as agreed, such as Poganda Beach or Paisu Batango', 'Time to swim, relax and take photos when conditions allow']],
        ['Evening — Rest', ['Dinner and free time']]
      ] },
      { day: 'Day 5', title: 'Return to Luwuk', slots: [
        ['Morning — Check-out', ['Breakfast, check-out and preparation for the return']],
        ['Midday to afternoon — Journey back', ['Cross back to Luwuk according to the boat schedule', 'Drop-off at the agreed point and the trip ends', 'Avoid booking an onward flight on the same day']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'De Luwuk a Salakan', slots: [
        ['Mañana — Inicio en Luwuk', ['Encuentro con el guía y preparación del viaje', 'Traslado al punto de embarque según el horario del barco']],
        ['De mediodía a tarde — Travesía a Salakan', ['Travesía marítima hasta Salakan, en la isla de Peleng', 'El horario del barco y la duración de la travesía se confirman para vuestras fechas']],
        ['Noche — Alojamiento y descanso', ['Registro en el alojamiento y tiempo libre']]
      ] },
      { day: 'Día 2', title: 'Salakan y alrededores', slots: [
        ['De mañana a tarde — Conocer Salakan', ['Una jornada más tranquila para conocer Salakan y su entorno', 'Los lugares se eligen entre todos según los intereses y las condiciones locales']],
        ['Noche — Descanso', ['Cena y tiempo libre']]
      ] },
      { day: 'Día 3', title: 'La zona del lago Paisu Pok', slots: [
        ['Mañana — Rumbo a Luk Panenteng', ['Salida temprano por carretera hacia el pueblo de Luk Panenteng']],
        ['Mediodía — Lago Paisu Pok', ['Paseo a pie desde el pueblo hasta el lago', 'Aguas transparentes, fotografía y descanso']],
        ['De tarde a noche — Regreso y descanso', ['Vuelta al alojamiento', 'Cena y tiempo libre']]
      ] },
      { day: 'Día 4', title: 'Paradas costeras seleccionadas en Peleng', slots: [
        ['De mañana a tarde — Lugares seleccionados', ['Uno o dos destinos costeros de la isla de Peleng según lo acordado, como la playa de Poganda o Paisu Batango', 'Tiempo para nadar, descansar y hacer fotos si las condiciones lo permiten']],
        ['Noche — Descanso', ['Cena y tiempo libre']]
      ] },
      { day: 'Día 5', title: 'Regreso a Luwuk', slots: [
        ['Mañana — Salida del alojamiento', ['Desayuno, salida del alojamiento y preparación del regreso']],
        ['De mediodía a tarde — Viaje de vuelta', ['Travesía de regreso a Luwuk según el horario del barco', 'Despedida en el punto acordado y fin del viaje', 'Conviene no reservar un vuelo de conexión el mismo día']]
      ] }
    ]
  },

  'ultimate-banggai': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menuju Salakan', slots: [
        ['Tiba di Luwuk & Air Terjun Piala', ['Kedatangan di Luwuk', 'Mengunjungi Air Terjun Piala']],
        ['Pelabuhan & kapal ke Salakan', ['Transfer ke pelabuhan', 'Kapal menuju Salakan; jadwal dan lama penyeberangan dikonfirmasi untuk tanggal perjalananmu dan bergantung pada kondisi laut']],
        ['Check-in hotel', ['Check-in hotel di Salakan']]
      ] },
      { day: 'Hari 2', title: 'Menjelajahi Banggai / Peleng', slots: [
        ['Destinasi hari ini', ['Pantai Poganda', 'Paisu Pok', 'Paisu Batango', 'Kawalu Bay']]
      ] },
      { day: 'Hari 3', title: 'Eksplorasi pantai', slots: [
        ['Destinasi hari ini', ['Bontolan', 'Pantai Oyama', 'Long Beach']]
      ] },
      { day: 'Hari 4', title: 'Eksplorasi pantai', slots: [
        ['Destinasi hari ini', ['Pantai Mandel', 'Pantai Pompon']],
        ['16.00 — Kembali ke Luwuk', ['Perjalanan kembali ke Luwuk sesuai jadwal kapal']]
      ] },
      { day: 'Hari 5', title: 'Perjalanan sehari ke Kampangar', slots: [
        ['Destinasi hari ini', ['Menjelajahi Desa Kampangar', 'Mengunjungi Pulo Dua', 'Kembali langsung ke Luwuk']]
      ] },
      { day: 'Hari 6', title: 'Luwuk', slots: [
        ['Destinasi hari ini', ['Air Terjun Kamumu', 'Kembali / drop-off di Luwuk']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'From Luwuk to Salakan', slots: [
        ['Arrival in Luwuk & Piala Waterfall', ['Arrival in Luwuk', 'Visit Piala Waterfall']],
        ['Harbor & ferry to Salakan', ['Transfer to the harbor', 'Ferry to Salakan; the boat schedule and crossing time are confirmed for your dates and depend on sea conditions']],
        ['Hotel check-in', ['Hotel check-in in Salakan']]
      ] },
      { day: 'Day 2', title: 'Exploring Banggai / Peleng', slots: [
        ['Today\'s destinations', ['Poganda Beach', 'Paisu Pok', 'Paisu Batango', 'Kawalu Bay']]
      ] },
      { day: 'Day 3', title: 'Beach exploration', slots: [
        ['Today\'s destinations', ['Bontolan', 'Oyama Beach', 'Long Beach']]
      ] },
      { day: 'Day 4', title: 'Beach exploration', slots: [
        ['Today\'s destinations', ['Mandel Beach', 'Pompon Beach']],
        ['16:00 — Return to Luwuk', ['Journey back to Luwuk according to the boat schedule']]
      ] },
      { day: 'Day 5', title: 'Kampangar one-day trip', slots: [
        ['Today\'s destinations', ['Explore Desa Kampangar', 'Visit Pulo Dua', 'Return directly to Luwuk']]
      ] },
      { day: 'Day 6', title: 'Luwuk', slots: [
        ['Today\'s destinations', ['Kamumu Waterfall', 'Return / drop-off in Luwuk']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'De Luwuk a Salakan', slots: [
        ['Llegada a Luwuk y cascada de Piala', ['Llegada a Luwuk', 'Visita a la cascada de Piala']],
        ['Puerto y barco a Salakan', ['Traslado al puerto', 'Barco a Salakan; el horario y la duración de la travesía se confirman para vuestras fechas y dependen del estado del mar']],
        ['Registro en el hotel', ['Registro en el hotel de Salakan']]
      ] },
      { day: 'Día 2', title: 'Explorando Banggai / Peleng', slots: [
        ['Lugares del día', ['Playa de Poganda', 'Paisu Pok', 'Paisu Batango', 'Kawalu Bay']]
      ] },
      { day: 'Día 3', title: 'Exploración de playas', slots: [
        ['Lugares del día', ['Bontolan', 'Playa de Oyama', 'Long Beach']]
      ] },
      { day: 'Día 4', title: 'Exploración de playas', slots: [
        ['Lugares del día', ['Playa de Mandel', 'Playa de Pompon']],
        ['16:00 — Regreso a Luwuk', ['Viaje de vuelta a Luwuk según el horario del barco']]
      ] },
      { day: 'Día 5', title: 'Excursión de un día a Kampangar', slots: [
        ['Lugares del día', ['Explorar el pueblo de Kampangar', 'Visita a Pulo Dua', 'Regreso directo a Luwuk']]
      ] },
      { day: 'Día 6', title: 'Luwuk', slots: [
        ['Lugares del día', ['Cascada de Kamumu', 'Regreso / despedida en Luwuk']]
      ] }
    ]
  },

  'custom-banggai-trip': {
    ID: [
      { day: 'Langkah 1', title: 'Sampaikan rencana perjalananmu', slots: [
        ['Informasi yang dibutuhkan', ['Tanggal perjalanan dan perkiraan jadwal tiba di Luwuk', 'Jumlah peserta dan durasi yang diinginkan']] ] },
      { day: 'Langkah 2', title: 'Pilih prioritas destinasi', slots: [
        ['Contoh pilihan', ['Luwuk, Paisu Pok, Pulau Peleng, Banggai Laut, atau Pulo Dua', 'Tempo perjalanan, kemampuan berenang, kebutuhan makan, dan kebutuhan mobilitas']] ] },
      { day: 'Langkah 3', title: 'Terima usulan rute', slots: [
        ['Isi penawaran tertulis', ['Urutan hari dan destinasi', 'Pilihan transportasi darat dan laut', 'Rincian layanan yang termasuk dan tidak termasuk, serta harga']] ] },
      { day: 'Langkah 4', title: 'Konfirmasi dan berangkat', slots: [
        ['Setelah penawaran disetujui', ['Rute final dikonfirmasi sesuai jadwal kapal, cuaca, dan kondisi lokal', 'Persiapan keberangkatan bersama tim lokal']] ] }
    ],
    EN: [
      { day: 'Step 1', title: 'Share your travel plans', slots: [
        ['What we need', ['Travel dates and your expected arrival in Luwuk', 'Group size and preferred duration']] ] },
      { day: 'Step 2', title: 'Choose your priorities', slots: [
        ['Examples', ['Luwuk, Paisu Pok, Peleng Island, Banggai Laut or Pulo Dua', 'Pace, swimming confidence, dietary needs and mobility requirements']] ] },
      { day: 'Step 3', title: 'Receive a route proposal', slots: [
        ['What the written proposal covers', ['Day order and destinations', 'Land and sea transport options', 'What is and is not included, plus the price']] ] },
      { day: 'Step 4', title: 'Confirm and go', slots: [
        ['Once you approve the proposal', ['The final route is confirmed around boat schedules, weather and local conditions', 'Departure preparation with the local team']] ] }
    ],
    ES: [
      { day: 'Paso 1', title: 'Cuéntanos tu plan de viaje', slots: [
        ['Lo que necesitamos', ['Fechas del viaje y llegada prevista a Luwuk', 'Número de viajeros y duración deseada']] ] },
      { day: 'Paso 2', title: 'Elige tus prioridades', slots: [
        ['Ejemplos', ['Luwuk, Paisu Pok, la isla de Peleng, Banggai Laut o Pulo Dua', 'Ritmo del viaje, soltura en el agua, necesidades de alimentación y movilidad']] ] },
      { day: 'Paso 3', title: 'Recibe una propuesta de ruta', slots: [
        ['Qué incluye la propuesta por escrito', ['Orden de los días y de los destinos', 'Opciones de transporte por tierra y por mar', 'Qué está y qué no está incluido, además del precio']] ] },
      { day: 'Paso 4', title: 'Confirma y viaja', slots: [
        ['Una vez aprobada la propuesta', ['La ruta definitiva se confirma según los horarios de los barcos, el tiempo y las condiciones locales', 'Preparación de la salida con el equipo local']] ] }
    ]
  }
};
