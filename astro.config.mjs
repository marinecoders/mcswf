import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  site: 'https://dev-mcswf.usmc.dev',
  base: '/',
  redirects: {
    '/contactUs': '/contactUs/getInTouch',
    '/career': '/training',
  },
});
