<script>
  import CohortCard from '../cards/CohortCard.svelte';

  export let entries = [];

  // Since 'entries' is a prop, it will be passed from the parent component
  // where this component is used.
</script>

<div class="py-10 text-white bg-[#f0f0f0]">
  <!-- Left Column -->
  <div class="flex">
    <div class="w-full h-fit">
      <p class="text-3xl md:text-4xl font-bold pt-5 text-center text-black">READY TO APPLY?</p>
      <div class="max-w-5xl mx-auto mt-5 text-center">
        <h1 class="block text-2xl font-semibold md:text-3xl text-black">JOIN THE COHORT THAT'S RIGHT FOR YOU.</h1>
      </div>
    </div>
  </div>
  <div class="flex py-20">
    <div class="flex flex-col md:flex-row w-full items-center justify-center gap-16">
      {#each entries as cohortEntry}
        <CohortCard title={cohortEntry.data.title} content={cohortEntry.data.content} startDate={cohortEntry.data.startDate} link={cohortEntry.data.link} />
      {/each}
    </div>
  </div>
</div>
