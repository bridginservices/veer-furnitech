// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the final production domain before deploying — it powers
// canonical URLs, the sitemap, and Open Graph tags.
export default defineConfig({
  site: 'https://veerfurnitech.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
