import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://facades-haut-doubs.com',
  integrations: [
    sitemap({
      // Exclut la page de remerciement (noindex) du sitemap
      filter: (page) => !page.includes('/devis-envoye'),
    }),
  ],
  server: {
    port: 4321,
    host: true,
  },
});
