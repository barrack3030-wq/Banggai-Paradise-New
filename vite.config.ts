import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(() => {
  return {
    // GitHub Pages serves this repository under /Banggai-Paradise-New/.
    // Keep local development and AI Studio previews at the domain root.
    base: process.env.GITHUB_ACTIONS === 'true' ? '/Banggai-Paradise-New/' : '/',
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: fileURLToPath(new URL('./index.html', import.meta.url)),
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
