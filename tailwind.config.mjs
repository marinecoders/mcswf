/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mcswf-gold': `#FFC755`,
        'mcswf-battle-red': '#671c1d',
        'mcswf-pinstripe': '#922a26',
        'mcswf-dark-blue': '#101728',
        'mcswf-blue': '#07405B',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans'], // 'Rubik' is the font name
        colossalis: ['Colossalis'],
        expressway: ['Expressway']
      }
    },
  },
  
  plugins: [require('@tailwindcss/typography')],
}
