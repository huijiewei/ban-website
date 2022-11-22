import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import solidjs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://ban.huijiewei.com',
  integrations: [
    tailwind(),
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
    solidjs(),
    image(),
    sitemap(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
