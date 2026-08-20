import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thesmbdesk.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
