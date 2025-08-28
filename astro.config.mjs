import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tareas.velcodi.com',
  integrations: [sitemap()],
});
