import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://facades-haut-doubs.fr',
  server: {
    port: 4321,
    host: true,
  },
});
