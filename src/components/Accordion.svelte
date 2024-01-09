<!-- <script>
  let otherHovered = false
  import RedButton from '../components/buttons/RedButton.svelte'
</script> -->

<script>
  import RedButton from '../components/buttons/RedButton.svelte'
  let active = 0;

  function handleKeydown(event){
    if (event.key == " "){
      active = panel
    }
  }

</script>


<div
  class="grid flex-col grid-cols-1 lg:h-full first-letter:h-screen md:grid lg:grid-cols-6 xl:grid-cols-6"
>
<!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="{active==0 ? 'col-span-3': 'col-span-1'} h-64 bg-pink-400 lg:h-full" on:click={() => (active=0)} >
    main
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="h-64 col-span-2 lg:h-full lg:{active==1 ? 'col-span-3': 'col-span-1'} xl:{active==1 ? 'col-span-3': 'col-span-1'}" on:click={() => (active=1)} >
    <div class="h-full lg:border-x lg:border-y-0 border-y">
      
      <div
        class="flex justify-between p-8 overflow-visible text-white align-bottom bg-black itemsfirst-letter:-center lg:h-full lg:items-end"
      >
        <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold ">01</p>
        <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
          + SPARTA
        </p>
      </div>
      {#if active == 1}
      <div class="flex w-full">
        The Sensor Processor & Analysis Radar Translation Application (SPARTA) utilizes commercial off-the-shelf radars and provides the ability to visualize maritime vessels, process the sensor data, and disseminate to a common operating picture. The application also includes an Android version, UAS integration, and the ability to correlate and fuse multiple sensors.
      </div>
      <div class="flex w-64">
        <RedButton text="LEARN MORE" />
      </div>
      {/if}
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="col-span-2 lg:{active==2 ? 'col-span-3': 'col-span-1'} xl:{active==2 ? 'col-span-3': 'col-span-1'}" on:click={() => (active=2)}>
    <div
      class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
    >
      <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">01</p>
      <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
        + SPARTA
      </p>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex=0 class="col-span-2 lg:{active==3 ? 'col-span-3': 'col-span-1'} xl:{active==3 ? 'col-span-3': 'col-span-1'}" on:click={() => (active=3)}>
    <div
      class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
    >
      <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">01</p>
      <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
        + SPARTA
      </p>
    </div>
  </div>
</div>

<style>
</style>
