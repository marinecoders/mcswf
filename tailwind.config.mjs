/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mcswf-gold': '#EFC97B',
        'mcswf-gold-dark': '#FFB622', // Not in color palette
        'mcswf-battle-red': '#7A131B',
        'mcswf-pinstripe': '#AD1F24',
        'mcswf-dark-blue': '#101728', // Not in color palette
        'mcswf-blue': '#07405B', // Not in color palette
        'mcswf-gray': '#eeeeee', // Not in color palette
        'mcswf-grey': '#F5F5F5',
        'mcswf-off-white': '#FDFDFD', // Not in color palette
        'mcswf-button-focused': '#E0E0E0', // Not in color palette, but showed up in wireframes
      },
      fontFamily: {
        rubik: ['Rubik', 'sans'], // 'Rubik' is the font name
        colossalis: ['Colossalis'],
        expressway: ['Expressway'],
        menobanner: ['MenoBanner'],
      },
      transitionProperty: {
        grid: 'grid-template-columns',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
