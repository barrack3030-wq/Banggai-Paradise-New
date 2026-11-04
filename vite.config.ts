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
          blogIslandGuide: fileURLToPath(new URL('./blog/island-hopping-guide/index.html', import.meta.url)),
          blogSnorkeling: fileURLToPath(new URL('./blog/snorkeling-basics/index.html', import.meta.url)),
          blogGoldenHour: fileURLToPath(new URL('./blog/golden-hour-banggai/index.html', import.meta.url)),
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
