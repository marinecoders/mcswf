<script>
  let otherHovered = false
  import RedButton from '../components/buttons/RedButton.svelte'
</script>

<div
  class="grid flex-col grid-cols-1 lg:h-full first-letter:h-screen md:grid lg:grid-cols-6 xl:grid-cols-6"
>
  <div
    class:col-span-2={otherHovered}
    class:col-span-3={!otherHovered}
    class="h-64 bg-pink-400 lg:h-full"
  >
    main
  </div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="h-64 col-span-2 lg:h-full lg:col-span-1 xl:col-span-1">
    <div class="h-full lg:border-x lg:border-y-0 border-y">
      
      <div
        class="flex justify-between p-8 overflow-visible text-white align-bottom bg-black itemsfirst-letter:-center lg:h-full lg:items-end"
      >
        <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold ">01</p>
        <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
          + SPARTA
        </p>
      </div>
      <div class="flex w-full lg:hidden">
        The Sensor Processor & Analysis Radar Translation Application (SPARTA) utilizes commercial off-the-shelf radars and provides the ability to visualize maritime vessels, process the sensor data, and disseminate to a common operating picture. The application also includes an Android version, UAS integration, and the ability to correlate and fuse multiple sensors.
      </div>
      <div class="flex w-64 lg:hidden">
        <RedButton text="LEARN MORE" />
      </div>
    </div>
  </div>
  <div class="col-span-2 lg:col-span-1 xl:col-span-1">
    <div
      class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
    >
      <p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">01</p>
      <p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
        + SPARTA
      </p>
    </div>
  </div>
  <div class="col-span-2 lg:col-span-1 xl:col-span-1">
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
