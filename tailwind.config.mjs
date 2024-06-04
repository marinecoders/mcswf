/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'usmc-yellow': '#f1b434', // USMC Brand Guide
        'mcswf-yellow': '#FFC755', // Pulled from wireframes instead of color palette
        'usmc-red': '#a6192e', // USMC Brand Guide
        'mcswf-red': '#991B20', // Pulled from wireframes and color palette
        'mcswf-white-50': '#FDFDFD', // Not in color palette, but showed up in wireframes
        'mcswf-gray': '#E0E0E0', // Not in color palette, but showed up in wireframes
        'mcswf-gold': '#FFC755', // Pulled from wireframes instead of color palette
        'mcswf-gold-dark': '#FFB622', // Not in color palette
        'mcswf-battle-red': '#7A131B',
        'mcswf-pinstripe': '#AD1F24',
        'mcswf-dark-blue': '#101728', // Not in color palette
        'mcswf-blue': '#07405B', // Not in color palette
        'mcswf-grey': '#F5F5F5',
        'mcswf-off-white': '#FDFDFD', // Not in color palette
        'linkedin-blue': '#0077B5',
      },
      fontFamily: {
        colossalis: ['Colossalis'],
        expressway: ['Expressway', 'sans-serif'],
        menobanner: ['MenoBanner'],
      },
      transitionProperty: {
        grid: 'grid-template-columns',
      },
      backgroundImage: (theme) => ({
        'custom-gradient-banner': 'background: radial-gradient(78.55% 1170.94% at 12.82% 54.91%, #6F1319 0%, #89181D 53.12%, #9F1C1F 100%)',
        'custom-gradient-red': 'radial-gradient(circle at 0% 56.8%, #6F1319 0%, #89181D 53.13%, #9F1C1F 100%)',
      }),
      scale: {
        200: '2',
        240: '2.4',
        220: '2.2',
        230: '2.3',
      },
      width: {
        550: '550px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
};
