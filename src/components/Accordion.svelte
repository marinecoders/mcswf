<script>
  import RedButton from './buttons/RedButton.svelte'
  import AccordionSectionOpen from './elements/AccordionSectionOpen.svelte'
  import AccordionSectionClosed from  './elements/AccordionSectionClosed.svelte'
  let active = 0;
  import { tweened } from 'svelte/motion';
  import { sequence } from 'astro:middleware'

</script>

<div class="grid flex-col grid-cols-1 h-full md:grid lg:grid-cols-6 xl:grid-cols-6" >
  <div role="button" tabindex="0" class="{active==0 ? 'col-span-3': 'col-span-2'} h-64 bg-pink-400 lg:h-full" on:mouseenter={() => (active=0)}>
    Our Product Portfolio
  </div>
  <div role="button" tabindex="0" class="h-64 col-span-2 lg:h-full lg:{active==1 ? 'col-span-2': 'col-span-1'} xl:{active==1 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:mouseenter={() => (active=1)} >
    <div class="relative h-full lg:border-x lg:border-y-0 border-y">
      {#if active == 1}
      <AccordionSectionOpen 
      text="The Sensor Processor & Analysis Radar Translation Application (SPARTA) utilizes commercial off-the-shelf radars and provides the ability to visualize maritime vessels, process the sensor data, and disseminate to a common operating picture. The application also includes an Android version, UAS integration, and the ability to correlate and fuse multiple sensors."
      title="SPARTA"
      sequence=1
      href='sparta' />
      {:else}
      <AccordionSectionClosed 
      title="SPARTA"
      sequence=1
      />
      {/if}
    </div>
  </div>
  <div role="button" tabindex=0 class="h-full col-span-2 lg:{active==2 ? 'col-span-2': 'col-span-1'} xl:{active==2 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:mouseenter={() => (active=2)}>
    <div class="relative h-full lg:border-x lg:border-y-0 border-y">
    {#if active ==2}
    <AccordionSectionOpen 
    text="Sponsored by Manpower Management Enlisted Assignments to optimize the roadshow process. Marines are able to reserve their spot in line and push key information to monitors prior to sitting down for a discussion. This saves Marines time and optimizes the discussion."
    title="my CAREER"
    sequence=2
    href='career' />
    {:else}
    <AccordionSectionClosed 
    title="my Career"
    sequence=2
    />
    {/if}
    </div>
  </div>
  <div role="button" tabindex=0 class="col-span-2 lg:{active==3 ? 'col-span-2': 'col-span-1'} xl:{active==3 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:mouseenter={() => (active=3)}>
    <div class="relative h-full lg:border-x lg:border-y-0 border-y">
      {#if active ==3}
      <AccordionSectionOpen 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      title="Snap DB"
      sequence=3
      href='/snapdb' />
      {:else}
      <AccordionSectionClosed 
      title="Snap DB"
      sequence=3
      />
      {/if}
    </div>
  </div>
</div>

<style>
</style>
