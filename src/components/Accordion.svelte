<script>
  import RedButton from './buttons/RedButton.svelte'
  import AccordionSectionOpen from './elements/AccordionSectionOpen.svelte'
  import AccordionSectionClosed from  './elements/AccordionSectionClosed.svelte'
  let active = 0;
  import { tweened } from 'svelte/motion';
  import { sequence } from 'astro:middleware'

</script>


<div class="grid grid-cols-1 md:grid-cols-6 md:h-max-content" >
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="col-span-1  {active==0 ? 'h-96': 'h-72'} lg:{active==0 ? 'col-span-3': 'col-span-2'} bg-pink-400 lg:h-full" on:click={() => (active=0)}>
    Our Product Portfolio
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#key active}
  <div role="button" tabindex="0" class="{active==1 ? 'h-96': 'h-32'} col-span-1 lg:row-span-1 md:h-full lg:{active==1 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active=1)} >
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
  {/key}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="{active==2 ? 'h-96': 'h-32'} col-span-1 lg:{active==2 ? 'col-span-2': 'col-span-1'} xl:{active==2 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active=2)}>
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
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="{active==3 ? 'h-96': 'h-32'} col-span-1 lg:{active==3 ? 'col-span-2': 'col-span-1'} xl:{active==3 ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => (active=3)}>
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
