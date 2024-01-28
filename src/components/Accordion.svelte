<script>
  import { mobile,active } from './stores.js';
  import AccordionSection from './elements/AccordionSection.svelte'
  import FooterFull from '../components/FooterFull.svelte'

  let width = 0;

  $: mobile.set(width < 640);

</script>

<svelte:window bind:innerWidth={width} />

<div class="grid grid-cols-1 sm:grid-cols-6 sm:h-5/6" >
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="flex flex-col col-span-1 justify-end sm:justify-normal h-96 px-16 sm:px-32 {($active==0 && !$mobile) ? 'col-span-3': ''} {($active!=0 && !$mobile) ? 'col-span-2': ''} bg-pink-400 sm:h-full" on:click={() => (active.set(0))}>
    <div class="h-1/4"></div>
    <div class="py-8 text-mcswf-gold font-bold text-center font-expressway text-xl sm:text-4xl">
      OUR PRODUCT PORTFOLIO
    </div>
    <div class="text-lg sm:text-2xl font-expressway text-center py-8">
      Real solutions to real problems - Created for Marines, by Marines at the Marine Corps Software Factory
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="h-fit sm:h-full {($active==1 && !$mobile) ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active.set(1))} >
    <div class="relative h-full sm:border-x sm:border-y-0 border-y">
      <AccordionSection
        text="The Sensor Processor & Analysis Radar Translation Application (SPARTA) utilizes commercial off-the-shelf radars and provides the ability to visualize maritime vessels, process the sensor data, and disseminate to a common operating picture. The application also includes an Android version, UAS integration, and the ability to correlate and fuse multiple sensors."
        title="SPARTA"
        sequence=01
        href='sparta'
      />
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="h-fit col-span-1 sm:h-full {($active==2 && !$mobile) ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active.set(2))}>
    <div class="relative h-full sm:border-x sm:border-y-0 border-y">

    <AccordionSection 
      text="Sponsored by Manpower Management Enlisted Assignments to optimize the roadshow process. Marines are able to reserve their spot in line and push key information to monitors prior to sitting down for a discussion. This saves Marines time and optimizes the discussion."
      title="my CAREER"
      sequence=02
      href='career'
    />
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="h-fit sm:h-full {($active==3 && !$mobile) ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active.set(3))}>
    <div class="relative h-full lg:border-x lg:border-y-0 border-y">
      <AccordionSection
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="Snap DB"
        sequence=03
        href='/snapdb'
      />
    </div>
  </div>
</div>

<FooterFull></FooterFull>



