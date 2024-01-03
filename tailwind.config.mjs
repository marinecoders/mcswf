/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 140, 40, 38 - red
        // 8, 29, 44 - blue
        // 233, 202, 134 - gold
        'mcswf-gold': `#e9ca86`,
        'battle-red': '#671c1d',
        'pinstripe': '#922a26',
        'mcswf-dark-blue': '#101728',
        'mcswf-blue': '#07405B',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans'], // 'Rubik' is the font name
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
