/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mcswf-gold': `#FFC755`,
        'mcswf-gold-dark':'#FFB622',
        'mcswf-battle-red': '#671c1d',
        'mcswf-pinstripe': '#922a26',
        'mcswf-dark-blue': '#101728',
        'mcswf-blue': '#07405B',
        'mcswf-gray': '#eeeeee',
        'mcswf-off-white': '#FDFDFD',
        'mcswf-pressed-button': '#E0E0E0'
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
