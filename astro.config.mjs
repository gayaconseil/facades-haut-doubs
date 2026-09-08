import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://facades-haut-doubs.com',
  integrations: [sitemap()],
  server: {
    port: 4321,
    host: true,
  },
});
