import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(() => {
  return {
    // The site is published at the domain root through its GitHub Pages custom domain.
    // Use the same root base in CI, local development, and previews so built asset URLs resolve.
    base: '/',
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('./index.html', import.meta.url)),
          idHome: fileURLToPath(new URL('./id/index.html', import.meta.url)),
          enHome: fileURLToPath(new URL('./eng/index.html', import.meta.url)),
          esHome: fileURLToPath(new URL('./es/index.html', import.meta.url)),
          id_packages: fileURLToPath(new URL('./id/packages/index.html', import.meta.url)),
          en_packages: fileURLToPath(new URL('./eng/packages/index.html', import.meta.url)),
          id_destinations: fileURLToPath(new URL('./id/destinations/index.html', import.meta.url)),
          en_destinations: fileURLToPath(new URL('./eng/destinations/index.html', import.meta.url)),
          id_about: fileURLToPath(new URL('./id/about/index.html', import.meta.url)),
          en_about: fileURLToPath(new URL('./eng/about/index.html', import.meta.url)),
          id_blog: fileURLToPath(new URL('./id/blog/index.html', import.meta.url)),
          en_blog: fileURLToPath(new URL('./eng/blog/index.html', import.meta.url)),
          id_package_luwuk_stopover: fileURLToPath(new URL('./id/packages/luwuk-stopover/index.html', import.meta.url)),
          en_package_luwuk_stopover: fileURLToPath(new URL('./eng/packages/luwuk-stopover/index.html', import.meta.url)),
          id_package_luwuk_one_day: fileURLToPath(new URL('./id/packages/luwuk-one-day/index.html', import.meta.url)),
          en_package_luwuk_one_day: fileURLToPath(new URL('./eng/packages/luwuk-one-day/index.html', import.meta.url)),
          id_package_luwuk_salakan: fileURLToPath(new URL('./id/packages/luwuk-salakan/index.html', import.meta.url)),
          en_package_luwuk_salakan: fileURLToPath(new URL('./eng/packages/luwuk-salakan/index.html', import.meta.url)),
          id_package_banggai_four_days: fileURLToPath(new URL('./id/packages/banggai-four-days/index.html', import.meta.url)),
          en_package_banggai_four_days: fileURLToPath(new URL('./eng/packages/banggai-four-days/index.html', import.meta.url)),
          id_package_banggai_five_days: fileURLToPath(new URL('./id/packages/banggai-five-days/index.html', import.meta.url)),
          en_package_banggai_five_days: fileURLToPath(new URL('./eng/packages/banggai-five-days/index.html', import.meta.url)),
          id_package_ultimate_banggai: fileURLToPath(new URL('./id/packages/ultimate-banggai/index.html', import.meta.url)),
          en_package_ultimate_banggai: fileURLToPath(new URL('./eng/packages/ultimate-banggai/index.html', import.meta.url)),
          id_package_custom_banggai_trip: fileURLToPath(new URL('./id/packages/custom-banggai-trip/index.html', import.meta.url)),
          en_package_custom_banggai_trip: fileURLToPath(new URL('./eng/packages/custom-banggai-trip/index.html', import.meta.url)),
          id_blog_article: fileURLToPath(new URL('./id/blog/beyond-paisu-pok-peleng-island-guide/index.html', import.meta.url)),
          en_blog_article: fileURLToPath(new URL('./eng/blog/beyond-paisu-pok-peleng-island-guide/index.html', import.meta.url)),
          id_blog_how_to_get_to_banggai_islands_via_luwuk: fileURLToPath(new URL('./id/blog/how-to-get-to-banggai-islands-via-luwuk/index.html', import.meta.url)),
          en_blog_how_to_get_to_banggai_islands_via_luwuk: fileURLToPath(new URL('./eng/blog/how-to-get-to-banggai-islands-via-luwuk/index.html', import.meta.url)),
          id_blog_pulau_dua_balantak_trip_planning_guide: fileURLToPath(new URL('./id/blog/pulau-dua-balantak-trip-planning-guide/index.html', import.meta.url)),
          en_blog_pulau_dua_balantak_trip_planning_guide: fileURLToPath(new URL('./eng/blog/pulau-dua-balantak-trip-planning-guide/index.html', import.meta.url)),
          id_blog_how_to_plan_banggai_tour_itinerary_by_days: fileURLToPath(new URL('./id/blog/how-to-plan-banggai-tour-itinerary-by-days/index.html', import.meta.url)),
          en_blog_how_to_plan_banggai_tour_itinerary_by_days: fileURLToPath(new URL('./eng/blog/how-to-plan-banggai-tour-itinerary-by-days/index.html', import.meta.url)),
          id_blog_banggai_cardinalfish: fileURLToPath(new URL('./id/blog/banggai-cardinalfish-responsible-marine-tourism/index.html', import.meta.url)),
          id_blog_open_trip_banggai_2026: fileURLToPath(new URL('./id/blog/open-trip-banggai-2026-jadwal-harga-fasilitas/index.html', import.meta.url)),
          en_blog_open_trip_banggai_2026: fileURLToPath(new URL('./eng/blog/open-trip-banggai-2026-jadwal-harga-fasilitas/index.html', import.meta.url)),
          es_blog_open_trip_banggai_2026: fileURLToPath(new URL('./es/blog/open-trip-banggai-2026-jadwal-harga-fasilitas/index.html', import.meta.url)),
          en_blog_banggai_cardinalfish: fileURLToPath(new URL('./eng/blog/banggai-cardinalfish-responsible-marine-tourism/index.html', import.meta.url)),
          es_blog_banggai_cardinalfish: fileURLToPath(new URL('./es/blog/banggai-cardinalfish-responsible-marine-tourism/index.html', import.meta.url)),
          es_packages: fileURLToPath(new URL('./es/packages/index.html', import.meta.url)),
          es_destinations: fileURLToPath(new URL('./es/destinations/index.html', import.meta.url)),
          es_about: fileURLToPath(new URL('./es/about/index.html', import.meta.url)),
          es_blog: fileURLToPath(new URL('./es/blog/index.html', import.meta.url)),
          es_package_luwuk_stopover: fileURLToPath(new URL('./es/packages/luwuk-stopover/index.html', import.meta.url)),
          es_package_luwuk_one_day: fileURLToPath(new URL('./es/packages/luwuk-one-day/index.html', import.meta.url)),
          es_package_luwuk_salakan: fileURLToPath(new URL('./es/packages/luwuk-salakan/index.html', import.meta.url)),
          es_package_banggai_four_days: fileURLToPath(new URL('./es/packages/banggai-four-days/index.html', import.meta.url)),
          es_package_banggai_five_days: fileURLToPath(new URL('./es/packages/banggai-five-days/index.html', import.meta.url)),
          es_package_ultimate_banggai: fileURLToPath(new URL('./es/packages/ultimate-banggai/index.html', import.meta.url)),
          es_package_custom_banggai_trip: fileURLToPath(new URL('./es/packages/custom-banggai-trip/index.html', import.meta.url)),
          es_blog_article: fileURLToPath(new URL('./es/blog/beyond-paisu-pok-peleng-island-guide/index.html', import.meta.url)),
          es_blog_how_to_get_to_banggai_islands_via_luwuk: fileURLToPath(new URL('./es/blog/how-to-get-to-banggai-islands-via-luwuk/index.html', import.meta.url)),
          es_blog_pulau_dua_balantak_trip_planning_guide: fileURLToPath(new URL('./es/blog/pulau-dua-balantak-trip-planning-guide/index.html', import.meta.url)),
          es_blog_how_to_plan_banggai_tour_itinerary_by_days: fileURLToPath(new URL('./es/blog/how-to-plan-banggai-tour-itinerary-by-days/index.html', import.meta.url)),
          id_blog_paket_wisata_4h3m: fileURLToPath(new URL('./id/blog/paket-wisata-banggai-4-hari-3-malam/index.html', import.meta.url)),
          en_blog_paket_wisata_4h3m: fileURLToPath(new URL('./eng/blog/paket-wisata-banggai-4-hari-3-malam/index.html', import.meta.url)),
          es_blog_paket_wisata_4h3m: fileURLToPath(new URL('./es/blog/paket-wisata-banggai-4-hari-3-malam/index.html', import.meta.url)),
          id_blog_luwuk_flights_airport: fileURLToPath(new URL('./id/blog/how-to-get-to-luwuk-flights-airport-banggai/index.html', import.meta.url)),
          en_blog_luwuk_flights_airport: fileURLToPath(new URL('./eng/blog/how-to-get-to-luwuk-flights-airport-banggai/index.html', import.meta.url)),
          es_blog_luwuk_flights_airport: fileURLToPath(new URL('./es/blog/how-to-get-to-luwuk-flights-airport-banggai/index.html', import.meta.url)),
          id_blog_private_vs_open_trip: fileURLToPath(new URL('./id/blog/private-trip-vs-open-trip-banggai/index.html', import.meta.url)),
          en_blog_private_vs_open_trip: fileURLToPath(new URL('./eng/blog/private-trip-vs-open-trip-banggai/index.html', import.meta.url)),
          es_blog_private_vs_open_trip: fileURLToPath(new URL('./es/blog/private-trip-vs-open-trip-banggai/index.html', import.meta.url)),
          packages: fileURLToPath(new URL('./packages/index.html', import.meta.url)),
          destinations: fileURLToPath(new URL('./destinations/index.html', import.meta.url)),
          about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
          blog: fileURLToPath(new URL('./blog/index.html', import.meta.url)),
          blogPelengGuide: fileURLToPath(new URL('./blog/beyond-paisu-pok-peleng-island-guide/index.html', import.meta.url)),
          luwukStopover: fileURLToPath(new URL('./packages/luwuk-stopover/index.html', import.meta.url)),
          package_custom_banggai_trip: fileURLToPath(new URL('./packages/custom-banggai-trip/index.html', import.meta.url)),
          package_ultimate_banggai: fileURLToPath(new URL('./packages/ultimate-banggai/index.html', import.meta.url)),
          package_banggai_five_days: fileURLToPath(new URL('./packages/banggai-five-days/index.html', import.meta.url)),
          package_banggai_four_days: fileURLToPath(new URL('./packages/banggai-four-days/index.html', import.meta.url)),
          package_luwuk_salakan: fileURLToPath(new URL('./packages/luwuk-salakan/index.html', import.meta.url)),
          package_luwuk_one_day: fileURLToPath(new URL('./packages/luwuk-one-day/index.html', import.meta.url)),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
