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
 * The luwuk-stopover outline mirrors LuwukStopoverPage so the Spanish page matches the ID/EN pages.
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
      { day: 'Hari 1', title: 'Tiba dan eksplorasi alam Luwuk', slots: [
        ['11.30 — Tiba di Bandara Luwuk', ['Penjemputan di bandara dan meet and greet', 'Persiapan perjalanan bersama tim lokal']],
        ['12.00 — Memulai eksplorasi Luwuk', ['Berangkat dari bandara', 'Makan siang atau mencoba kuliner lokal', 'Menikmati perjalanan dengan lanskap tropis']],
        ['Siang — Air Terjun Piala', ['Mengunjungi kawasan Air Terjun Piala', 'Menjelajahi alam tropis, berenang, dan bersantai', 'Waktu untuk fotografi']],
        ['Sore — Pesisir Luwuk', ['Menuju kawasan pesisir', 'Mengunjungi Kilo 5 atau spot pesisir pilihan', 'Menikmati suasana sore dan fotografi']],
        ['Malam — Check-in dan istirahat', ['Check-in hotel di Luwuk', 'Makan malam dan waktu bebas', 'Bermalam di Luwuk']]
      ] },
      { day: 'Hari 2', title: 'Salodik dan perjalanan pulang', slots: [
        ['Pagi — Sarapan dan check-out', ['Sarapan di hotel', 'Check-out dan berangkat menuju Salodik']],
        ['Pagi–siang — Eksplorasi Salodik', ['Menjelajahi kawasan alam Salodik', 'Mengunjungi air terjun atau spot alam yang sesuai kondisi', 'Berenang, bersantai, dan fotografi', 'Makan siang lokal']],
        ['Sore — Kembali ke Luwuk', ['Perjalanan kembali ke Luwuk', 'City sightseeing jika waktu memungkinkan', 'Transfer menuju Bandara Luwuk dan trip selesai']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'Arrival and nature exploration in Luwuk', slots: [
        ['11:30 — Arrival at Luwuk Airport', ['Airport pick-up and meet and greet', 'Prepare for the journey with the local team']],
        ['12:00 — Start exploring Luwuk', ['Depart from the airport', 'Lunch or local food experience', 'Enjoy the tropical scenery along the way']],
        ['Afternoon — Piala Waterfall', ['Visit the Piala Waterfall area', 'Explore the tropical surroundings, swim and relax', 'Photography time']],
        ['Late afternoon — Luwuk coastline', ['Head towards the coast', 'Visit Kilo 5 or a suitable coastal viewpoint', 'Enjoy the afternoon atmosphere and take photos']],
        ['Evening — Hotel check-in', ['Check in to your hotel in Luwuk', 'Dinner and free time', 'Overnight in Luwuk']]
      ] },
      { day: 'Day 2', title: 'Salodik and departure', slots: [
        ['Morning — Breakfast and check-out', ['Breakfast at the hotel', 'Check out and depart for Salodik']],
        ['Morning to afternoon — Explore Salodik', ['Explore the natural area around Salodik', 'Visit a waterfall or nature spot depending on local conditions', 'Swim, relax and take photos', 'Local lunch']],
        ['Afternoon — Return to Luwuk', ['Travel back to Luwuk', 'City sightseeing if time allows', 'Transfer to Luwuk Airport and trip ends']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'Llegada y naturaleza en Luwuk', slots: [
        ['11:30 — Llegada al aeropuerto de Luwuk', ['Recogida en el aeropuerto y bienvenida', 'Preparación del viaje con el equipo local']],
        ['12:00 — Primeros pasos por Luwuk', ['Salida desde el aeropuerto', 'Comida o primer contacto con la gastronomía local', 'Trayecto entre paisajes tropicales']],
        ['Tarde — Cascada de Piala', ['Visita a la zona de la cascada de Piala', 'Entorno tropical, baño y tiempo de descanso', 'Tiempo para fotografía']],
        ['Última hora de la tarde — Costa de Luwuk', ['Traslado hacia la costa', 'Visita a Kilo 5 o a un mirador costero adecuado', 'Ambiente de atardecer y fotografía']],
        ['Noche — Alojamiento', ['Registro en el hotel de Luwuk', 'Cena y tiempo libre', 'Noche en Luwuk']]
      ] },
      { day: 'Día 2', title: 'Salodik y regreso', slots: [
        ['Mañana — Desayuno y salida del hotel', ['Desayuno en el hotel', 'Salida del hotel rumbo a Salodik']],
        ['De la mañana a la tarde — Salodik', ['Recorrido por el entorno natural de Salodik', 'Visita a una cascada o a un rincón natural según las condiciones locales', 'Baño, descanso y fotografía', 'Comida local']],
        ['Tarde — Vuelta a Luwuk', ['Regreso a Luwuk', 'Paseo por la ciudad si el tiempo lo permite', 'Traslado al aeropuerto de Luwuk y fin del viaje']]
      ] }
    ]
  },

  'luwuk-salakan': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menuju Salakan', slots: [
        ['Pagi — Memulai di Luwuk', ['Pertemuan dengan pemandu dan persiapan perjalanan', 'Menuju titik penyeberangan sesuai jadwal kapal']],
        ['Siang–sore — Penyeberangan ke Salakan', ['Perjalanan laut menuju Salakan', 'Jadwal kapal dan lama penyeberangan dikonfirmasi untuk tanggal perjalananmu dan bergantung pada kondisi laut']],
        ['Malam — Check-in dan istirahat', ['Check-in akomodasi dan waktu bebas', 'Lokasi akomodasi dikonfirmasi dalam penawaran']]
      ] },
      { day: 'Hari 2', title: 'Menjelajahi Kepulauan Banggai', slots: [
        ['Pagi–sore — Destinasi pilihan', ['Mengunjungi destinasi pilihan di Kepulauan Banggai sesuai minat grup, waktu, dan kondisi lokal', 'Waktu untuk fotografi, bersantai, dan makan di sela perjalanan']],
        ['Malam — Istirahat', ['Waktu bebas dan bermalam']]
      ] },
      { day: 'Hari 3', title: 'Kembali ke Luwuk', slots: [
        ['Pagi — Check-out', ['Sarapan, check-out, dan persiapan kembali']],
        ['Siang–sore — Perjalanan pulang', ['Menyeberang kembali ke Luwuk sesuai jadwal kapal', 'Pengantaran ke titik yang disepakati dan trip selesai']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'From Luwuk to Salakan', slots: [
        ['Morning — Start in Luwuk', ['Meet your guide and prepare for the journey', 'Head to the crossing point according to the boat schedule']],
        ['Midday to afternoon — Crossing to Salakan', ['Sea journey to Salakan', 'Boat schedule and crossing time are confirmed for your dates and depend on sea conditions']],
        ['Evening — Check-in and rest', ['Check in to your accommodation and enjoy free time', 'Accommodation location is confirmed in your proposal']]
      ] },
      { day: 'Day 2', title: 'Exploring the Banggai Islands', slots: [
        ['Morning to afternoon — Selected destinations', ['Visit selected destinations in the Banggai Islands, depending on group interests, time and local conditions', 'Time for photography, relaxing and meals along the way']],
        ['Evening — Rest', ['Free time and overnight stay']]
      ] },
      { day: 'Day 3', title: 'Return to Luwuk', slots: [
        ['Morning — Check-out', ['Breakfast, check-out and preparation for the return']],
        ['Midday to afternoon — Journey back', ['Cross back to Luwuk according to the boat schedule', 'Drop-off at the agreed point and the trip ends']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'De Luwuk a Salakan', slots: [
        ['Mañana — Inicio en Luwuk', ['Encuentro con el guía y preparación del viaje', 'Traslado al punto de embarque según el horario del barco']],
        ['De mediodía a tarde — Travesía a Salakan', ['Travesía marítima hasta Salakan', 'El horario del barco y la duración de la travesía se confirman para vuestras fechas y dependen del estado del mar']],
        ['Noche — Alojamiento y descanso', ['Registro en el alojamiento y tiempo libre', 'La ubicación del alojamiento se confirma en la propuesta']]
      ] },
      { day: 'Día 2', title: 'Descubrir las islas Banggai', slots: [
        ['De mañana a tarde — Lugares seleccionados', ['Visita a lugares seleccionados de las islas Banggai según los intereses del grupo, el tiempo y las condiciones locales', 'Tiempo para fotografía, descanso y comidas durante el recorrido']],
        ['Noche — Descanso', ['Tiempo libre y noche en el alojamiento']]
      ] },
      { day: 'Día 3', title: 'Regreso a Luwuk', slots: [
        ['Mañana — Salida del alojamiento', ['Desayuno, salida del alojamiento y preparación del regreso']],
        ['De mediodía a tarde — Viaje de vuelta', ['Travesía de regreso a Luwuk según el horario del barco', 'Despedida en el punto acordado y fin del viaje']]
      ] }
    ]
  },

  'banggai-four-days': {
    ID: [
      { day: 'Hari 1', title: 'Dari Luwuk menyeberang ke Pulau Peleng', slots: [
        ['Pagi — Memulai di Luwuk', ['Pertemuan dengan pemandu dan persiapan perjalanan', 'Menuju titik penyeberangan sesuai jadwal kapal']],
        ['Siang–sore — Penyeberangan ke Peleng', ['Perjalanan laut menuju Pulau Peleng', 'Lama penyeberangan bergantung pada jadwal kapal dan kondisi laut, jadi hari pertama sengaja dibuat ringan']],
        ['Malam — Check-in dan istirahat', ['Check-in akomodasi dan waktu bebas', 'Lokasi akomodasi dikonfirmasi dalam penawaran']]
      ] },
      { day: 'Hari 2', title: 'Kawasan Danau Paisu Pok', slots: [
        ['Pagi — Menuju Luk Panenteng', ['Berangkat lebih pagi menuju Desa Luk Panenteng lewat jalur darat', 'Perjalanan darat cukup panjang, jadi berangkat pagi memberi waktu lebih lega di danau']],
        ['Siang — Danau Paisu Pok', ['Berjalan kaki dari desa menuju danau', 'Menikmati air yang jernih dan suasana sekitar danau', 'Waktu untuk fotografi dan bersantai']],
        ['Sore–malam — Kembali dan istirahat', ['Kembali ke akomodasi', 'Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 3', title: 'Destinasi pesisir pilihan di Peleng', slots: [
        ['Pagi–sore — Destinasi pilihan', ['Satu atau dua destinasi di Pulau Peleng sesuai minat, misalnya kawasan pesisir seperti Pantai Poganda atau Paisu Batango, selama masuk dalam itinerary yang disepakati', 'Lebih sedikit lokasi dengan waktu yang lebih lama, bukan banyak perpindahan']],
        ['Malam — Istirahat', ['Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 4', title: 'Kembali ke Luwuk', slots: [
        ['Pagi — Check-out', ['Sarapan, check-out, dan persiapan kembali']],
        ['Siang–sore — Perjalanan pulang', ['Menyeberang kembali ke Luwuk sesuai jadwal kapal', 'Pengantaran ke titik yang disepakati dan trip selesai', 'Sebaiknya jangan memesan penerbangan lanjutan di hari yang sama']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'Crossing from Luwuk to Peleng Island', slots: [
        ['Morning — Start in Luwuk', ['Meet your guide and prepare for the journey', 'Head to the crossing point according to the boat schedule']],
        ['Midday to afternoon — Crossing to Peleng', ['Sea journey to Peleng Island', 'Crossing time depends on the boat schedule and sea conditions, so the first day is kept light on purpose']],
        ['Evening — Check-in and rest', ['Check in to your accommodation and enjoy free time', 'Accommodation location is confirmed in your proposal']]
      ] },
      { day: 'Day 2', title: 'The Lake Paisu Pok area', slots: [
        ['Morning — Towards Luk Panenteng', ['Early departure by road to Luk Panenteng village', 'The road journey is long, so an early start leaves more relaxed time at the lake']],
        ['Midday — Lake Paisu Pok', ['Walk from the village to the lake', 'Enjoy the clear water and the setting around the lake', 'Time for photography and relaxing']],
        ['Afternoon to evening — Return and rest', ['Return to your accommodation', 'Dinner and free time']]
      ] },
      { day: 'Day 3', title: 'Selected coastal stops on Peleng', slots: [
        ['Morning to afternoon — Selected destinations', ['One or two more places on Peleng Island depending on interest, such as a coastal stop like Poganda Beach or Paisu Batango, as long as they are part of the agreed itinerary', 'Fewer places with more time at each, rather than many transfers']],
        ['Evening — Rest', ['Dinner and free time']]
      ] },
      { day: 'Day 4', title: 'Return to Luwuk', slots: [
        ['Morning — Check-out', ['Breakfast, check-out and preparation for the return']],
        ['Midday to afternoon — Journey back', ['Cross back to Luwuk according to the boat schedule', 'Drop-off at the agreed point and the trip ends', 'Avoid booking an onward flight on the same day']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'Travesía de Luwuk a la isla de Peleng', slots: [
        ['Mañana — Inicio en Luwuk', ['Encuentro con el guía y preparación del viaje', 'Traslado al punto de embarque según el horario del barco']],
        ['De mediodía a tarde — Travesía a Peleng', ['Travesía marítima hasta la isla de Peleng', 'La duración depende del horario del barco y del estado del mar, por eso el primer día se mantiene tranquilo']],
        ['Noche — Alojamiento y descanso', ['Registro en el alojamiento y tiempo libre', 'La ubicación del alojamiento se confirma en la propuesta']]
      ] },
      { day: 'Día 2', title: 'La zona del lago Paisu Pok', slots: [
        ['Mañana — Rumbo a Luk Panenteng', ['Salida temprano por carretera hacia el pueblo de Luk Panenteng', 'El trayecto por tierra es largo, así que salir pronto deja más tiempo para el lago']],
        ['Mediodía — Lago Paisu Pok', ['Paseo a pie desde el pueblo hasta el lago', 'Aguas transparentes y entorno del lago', 'Tiempo para fotografía y descanso']],
        ['De tarde a noche — Regreso y descanso', ['Vuelta al alojamiento', 'Cena y tiempo libre']]
      ] },
      { day: 'Día 3', title: 'Paradas costeras seleccionadas en Peleng', slots: [
        ['De mañana a tarde — Lugares seleccionados', ['Uno o dos lugares más de la isla de Peleng según los intereses, como una parada costera en la playa de Poganda o en Paisu Batango, siempre que formen parte del itinerario acordado', 'Menos sitios y más tiempo en cada uno, en lugar de muchos traslados']],
        ['Noche — Descanso', ['Cena y tiempo libre']]
      ] },
      { day: 'Día 4', title: 'Regreso a Luwuk', slots: [
        ['Mañana — Salida del alojamiento', ['Desayuno, salida del alojamiento y preparación del regreso']],
        ['De mediodía a tarde — Viaje de vuelta', ['Travesía de regreso a Luwuk según el horario del barco', 'Despedida en el punto acordado y fin del viaje', 'Conviene no reservar un vuelo de conexión el mismo día']]
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
      { day: 'Hari 1', title: 'Luwuk dan Salodik', slots: [
        ['Pagi — Memulai di Luwuk', ['Pertemuan dengan pemandu dan persiapan perjalanan']],
        ['Siang–sore — Kawasan Salodik', ['Menjelajahi kawasan alam Salodik', 'Waktu untuk fotografi dan bersantai']],
        ['Malam — Check-in dan istirahat', ['Check-in akomodasi di Luwuk dan waktu bebas']]
      ] },
      { day: 'Hari 2', title: 'Pulo Dua, Balantak', slots: [
        ['Pagi — Perjalanan darat', ['Berangkat pagi menuju kawasan Balantak lewat jalur darat, kemudian menyeberang singkat dengan perahu ke Pulo Dua', 'Waktu tempuh dikonfirmasi sesuai titik awal dan kondisi jalan']],
        ['Siang–sore — Pulo Dua', ['Menikmati pantai, perbukitan, dan panorama laut', 'Berenang atau snorkeling bila kondisi memungkinkan']],
        ['Malam — Istirahat', ['Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 3', title: 'Menyeberang ke Salakan', slots: [
        ['Pagi–siang — Perjalanan menuju Salakan', ['Menuju titik penyeberangan sesuai jadwal kapal', 'Perjalanan laut menuju Salakan di Pulau Peleng']],
        ['Sore–malam — Check-in dan istirahat', ['Check-in akomodasi dan waktu bebas']]
      ] },
      { day: 'Hari 4', title: 'Pulau Peleng dan Paisu Pok', slots: [
        ['Pagi — Menuju Luk Panenteng', ['Berangkat lebih pagi lewat jalur darat menuju Desa Luk Panenteng']],
        ['Siang — Danau Paisu Pok', ['Berjalan kaki dari desa menuju danau', 'Menikmati air yang jernih, fotografi, dan bersantai']],
        ['Sore–malam — Kembali dan istirahat', ['Kembali ke akomodasi dan waktu bebas']]
      ] },
      { day: 'Hari 5', title: 'Banggai Laut dan Kamumu', slots: [
        ['Pagi–sore — Perjalanan antarpulau', ['Perjalanan menuju kawasan Banggai Laut sesuai transportasi yang tersedia', 'Mengunjungi Banggai Laut dan Kamumu; urutan dan lokasi singgah dikonfirmasi untuk tanggal perjalananmu']],
        ['Malam — Istirahat', ['Makan malam dan waktu bebas']]
      ] },
      { day: 'Hari 6', title: 'Kembali ke Luwuk', slots: [
        ['Pagi — Check-out', ['Sarapan, check-out, dan persiapan kembali']],
        ['Siang–sore — Perjalanan pulang', ['Perjalanan kembali ke Luwuk sesuai jadwal transportasi', 'Pengantaran ke titik yang disepakati dan trip selesai', 'Sebaiknya jangan memesan penerbangan lanjutan di hari yang sama']]
      ] }
    ],
    EN: [
      { day: 'Day 1', title: 'Luwuk and Salodik', slots: [
        ['Morning — Start in Luwuk', ['Meet your guide and prepare for the journey']],
        ['Midday to afternoon — The Salodik area', ['Explore the natural area around Salodik', 'Time for photography and relaxing']],
        ['Evening — Check-in and rest', ['Check in to your accommodation in Luwuk and enjoy free time']]
      ] },
      { day: 'Day 2', title: 'Pulo Dua, Balantak', slots: [
        ['Morning — Road journey', ['Early departure by road towards the Balantak area, followed by a short boat ride to Pulo Dua', 'Travel time is confirmed depending on your starting point and road conditions']],
        ['Midday to afternoon — Pulo Dua', ['Enjoy the beach, hills and open sea views', 'Swim or snorkel when conditions allow']],
        ['Evening — Rest', ['Dinner and free time']]
      ] },
      { day: 'Day 3', title: 'Crossing to Salakan', slots: [
        ['Morning to midday — Journey to Salakan', ['Head to the crossing point according to the boat schedule', 'Sea journey to Salakan on Peleng Island']],
        ['Afternoon to evening — Check-in and rest', ['Check in to your accommodation and enjoy free time']]
      ] },
      { day: 'Day 4', title: 'Peleng Island and Paisu Pok', slots: [
        ['Morning — Towards Luk Panenteng', ['Early departure by road to Luk Panenteng village']],
        ['Midday — Lake Paisu Pok', ['Walk from the village to the lake', 'Enjoy the clear water, photography and relaxing']],
        ['Afternoon to evening — Return and rest', ['Return to your accommodation and enjoy free time']]
      ] },
      { day: 'Day 5', title: 'Banggai Laut and Kamumu', slots: [
        ['Morning to afternoon — Inter-island journey', ['Travel towards the Banggai Laut area using the transport available', 'Visit Banggai Laut and Kamumu; the order and stops are confirmed for your travel dates']],
        ['Evening — Rest', ['Dinner and free time']]
      ] },
      { day: 'Day 6', title: 'Return to Luwuk', slots: [
        ['Morning — Check-out', ['Breakfast, check-out and preparation for the return']],
        ['Midday to afternoon — Journey back', ['Travel back to Luwuk according to the transport schedule', 'Drop-off at the agreed point and the trip ends', 'Avoid booking an onward flight on the same day']]
      ] }
    ],
    ES: [
      { day: 'Día 1', title: 'Luwuk y Salodik', slots: [
        ['Mañana — Inicio en Luwuk', ['Encuentro con el guía y preparación del viaje']],
        ['De mediodía a tarde — La zona de Salodik', ['Recorrido por el entorno natural de Salodik', 'Tiempo para fotografía y descanso']],
        ['Noche — Alojamiento y descanso', ['Registro en el alojamiento de Luwuk y tiempo libre']]
      ] },
      { day: 'Día 2', title: 'Pulo Dua, Balantak', slots: [
        ['Mañana — Trayecto por carretera', ['Salida temprano por carretera hacia la zona de Balantak y breve trayecto en barca hasta Pulo Dua', 'El tiempo de viaje se confirma según el punto de partida y el estado de la carretera']],
        ['De mediodía a tarde — Pulo Dua', ['Playa, colinas y vistas abiertas al mar', 'Baño o snorkel si las condiciones lo permiten']],
        ['Noche — Descanso', ['Cena y tiempo libre']]
      ] },
      { day: 'Día 3', title: 'Travesía a Salakan', slots: [
        ['De mañana a mediodía — Viaje a Salakan', ['Traslado al punto de embarque según el horario del barco', 'Travesía marítima hasta Salakan, en la isla de Peleng']],
        ['De tarde a noche — Alojamiento y descanso', ['Registro en el alojamiento y tiempo libre']]
      ] },
      { day: 'Día 4', title: 'Isla de Peleng y Paisu Pok', slots: [
        ['Mañana — Rumbo a Luk Panenteng', ['Salida temprano por carretera hacia el pueblo de Luk Panenteng']],
        ['Mediodía — Lago Paisu Pok', ['Paseo a pie desde el pueblo hasta el lago', 'Aguas transparentes, fotografía y descanso']],
        ['De tarde a noche — Regreso y descanso', ['Vuelta al alojamiento y tiempo libre']]
      ] },
      { day: 'Día 5', title: 'Banggai Laut y Kamumu', slots: [
        ['De mañana a tarde — Viaje entre islas', ['Traslado hacia la zona de Banggai Laut con el transporte disponible', 'Visita a Banggai Laut y Kamumu; el orden y las paradas se confirman para vuestras fechas']],
        ['Noche — Descanso', ['Cena y tiempo libre']]
      ] },
      { day: 'Día 6', title: 'Regreso a Luwuk', slots: [
        ['Mañana — Salida del alojamiento', ['Desayuno, salida del alojamiento y preparación del regreso']],
        ['De mediodía a tarde — Viaje de vuelta', ['Regreso a Luwuk según el horario del transporte', 'Despedida en el punto acordado y fin del viaje', 'Conviene no reservar un vuelo de conexión el mismo día']]
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
