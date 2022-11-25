import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            content: {
              type: 'element',
              tagName: 'img',
              properties: {
                src: '/assets/external-link.svg',
                alt: 'External link icon',
              },
              children: [],
            },
            contentProperties: { className: ['external-link-icon'] },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            content: {
              type: 'element',
              tagName: 'span',
              properties: { className: ['heading-link'] },
              children: [
                {
                  type: 'element',
                  tagName: 'img',
                  properties: { src: '/assets/link.svg' },
                  children: [],
                },
              ],
            },
          },
        ],
      ],
      extendPlugins: 'astroDefaults',
    }),
    sitemap(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
