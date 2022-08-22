import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import solidjs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://ban.huijiewei.com',
  integrations: [tailwind({}), solidjs(), image(), sitemap()],
});
