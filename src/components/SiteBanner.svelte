<script>
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import { displaySiteBanner } from './stores.js';
  import { externalLinks } from '@content/constants';
</script>

{#if $displaySiteBanner}
  <div id="banner" class="flex flex-col md:h-20 md:flex-row justify-center items-center w-full bg-custom-gradient-banner py-4 px-8 md:py-0 lg:px-14 md:gap-4 lg:gap-12">
    <h3 class="text-center tracking-wide md:mr-4 bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">
      <span class="font-bold">MARINE-LED <span class="block sm:inline">SOFTWARE DEVELOPMENT</span><span class="hidden md:inline">:</span></span>
      <span class="hidden uppercase md:inline ml-2">By Marines<span class="ml-2">For Marines</span></span>
    </h3>
    <div class="my-2 md:my-auto">
      <ButtonCustom color="yellow" size="md" link={externalLinks.recruitingApplication} class="px-2 py-1 text-xs sm:px-4 sm:text-base md:px-8">Apply Now</ButtonCustom>
    </div>
  </div>
{/if}
