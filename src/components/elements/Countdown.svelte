<script>
  import { externalLinks } from '@content/constants';
  import ButtonCustom from '../buttons/ButtonCustom.svelte'
  import Timer from './Timer.svelte'
  
  export let link = externalLinks.recruitingApplication
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-12 pb-10">
    <h1 class="text-left md:text-center font-extrabold text-2xl md:text-[40px] text-mcswf-gold pt-16 px-8">COHORT 9 APPLICATION DEADLINE</h1>
    <p class="text-left md:text-center text-base lg:text-2xl px-8">Applications for Cohort 9 are due on August 1st, 2024. Marines who are accepted to the program will PCS to Austin, TX during the summer of 2024 and begin the
      Technical Accelerator in August 2024.</p>
  <Timer />

  <!-- Buttons -->
  <div class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center">
    <ButtonCustom color="white" size="xl" customClasses="w-64" {link}>
      APPLY NOW
    </ButtonCustom>
  </div>
  <!-- End Buttons -->
</div>
