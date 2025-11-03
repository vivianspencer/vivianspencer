// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        name: 'Figtree',
        cssVariable: "--font-figtree",
        provider: fontProviders.fontsource(),
        styles: ["normal"],
        weights: ['400', '700'],
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sentry(), spotlightjs()]
});