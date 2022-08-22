import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://ban.huijiewei.com',
	integrations: [mdx(),react(), sitemap()],
});