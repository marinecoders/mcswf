<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte'
  import Timer from './Timer.svelte'
  import Hero from './Hero.svelte'

  export let link
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-12 pb-10">
  <Hero
    padding="pt-24"
    desktopFontSize="[21px]"
    title="COHORT 9 APPLICATION DEADLINE"
    content="Applications for Cohort 9 are due on August 1st, 2024. Marines who are accepted to the program will PCS to Austin, TX during the summer of 2024 and begin the
    Technical Accelerator in August 2024." />

  <Timer />
</div>
