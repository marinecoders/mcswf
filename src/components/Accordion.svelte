<script>
  import RedButton from './buttons/RedButton.svelte'
  import Hero from '../components/elements/Hero.astro'
  let active = 0;
  import { tweened } from 'svelte/motion';

</script>

<div class="grid flex-col grid-cols-1 h-full md:grid lg:grid-cols-6 xl:grid-cols-6" >
  <div role="button" tabindex="0" class="{active==0 ? 'col-span-3': 'col-span-2'} h-64 bg-pink-400 lg:h-full" on:mouseenter={() => (active=0)}>
    main
  </div>
  <div role="button" tabindex="0" class="h-64 col-span-2 lg:h-full lg:{active==1 ? 'col-span-2': 'col-span-1'} xl:{active==1 ? 'col-span-2': 'col-span-1'} bg-mcswf-battle-red" on:mouseenter={() => (active=1)} >
    <div class="relative h-full lg:border-x lg:border-y-0 border-y">
      {#if active == 1}
      <h1 class="absolute inset-12 top-4 font-bold block text-4xl"> SPARTA</h1>
      <div class="absolute flex inset-12 top-20 text-lg">
        The Sensor Processor & Analysis Radar Translation Application (SPARTA) utilizes commercial off-the-shelf radars and provides the ability to visualize maritime vessels, process the sensor data, and disseminate to a common operating picture. The application also includes an Android version, UAS integration, and the ability to correlate and fuse multiple sensors.
      </div>
      <div class="absolute bottom-1/4 left-1/4 flex w-64">
        <RedButton text="LEARN MORE" href='/home' />
      </div>
      <div class="absolute justify-between overflow-visible text-white align-bottom itemsfirst-letter:-center items-end bottom-0 inset-x-0" >
        <div class="absolute items-end text-xl text-left font-menobanner text-mcswf-gold left-10 bottom-10">01 </div>
        <div class="absolute mb-2 text-xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10"> - </div>
      </div>

      {:else}
      <div
        class="flex justify-between p-8 overflow-visible text-white align-bottom bg-black itemsfirst-letter:-center lg:h-full lg:items-end"
      >
        <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold ">01</p>
        <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
          + SPARTA
        </p>
      </div>
      {/if}
    </div>
  </div>
  <div role="button" tabindex=0 class="h-full col-span-2 lg:{active==2 ? 'col-span-2': 'col-span-1'} xl:{active==2 ? 'col-span-2': 'col-span-1'} bg-mcswf-battle-red" on:mouseenter={() => (active=2)}>
    {#if active ==2}

    <div class='w-full'  >
      <div class="max-w-6xl mx-auto mt-5 text-center">
        <h1 class="block text-4xl font-bold md:text-5xl lg:text-6xl">
          my CAREER
        </h1>
      </div>
    
      <div class="max-w-3xl mx-auto mt-5 text-center">
        <p id='content' class="text-lg text-white">
          Sponsored by Manpower Management Enlisted Assignments to optimize the roadshow process. Marines are able to reserve their spot in line and push key information to monitors prior to sitting down for a discussion. This saves Marines time and optimizes the discussion.
        </p>
      </div>
      <div class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center">
        <RedButton href=./career text=LEARN MORE />
      </div>
    </div>
    <div class="flex justify-between align-bottom">
      <p class="text-lg text-left font-menobanner me-6 text-mcswf-gold ">02</p>
      <p class="mb-2 text-xl font-bold text-end whitespace-nowrap">
        -
      </p>
    </div>
    {:else}
    <div
      class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
    >
      <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">02</p>
      <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
        + my CAREER
      </p>
    </div>
  {/if}
  </div>
  <div role="button" tabindex=0 class="col-span-2 lg:{active==3 ? 'col-span-2': 'col-span-1'} xl:{active==3 ? 'col-span-2': 'col-span-1'}" on:mouseenter={() => (active=3)}>
    <div
      class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
    >
      <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">03</p>
      <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
        + Snap DB
      </p>
    </div>
  </div>
</div>

<style>
</style>
