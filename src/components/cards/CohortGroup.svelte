<script>
    import CohortCard from './CohortCard.svelte';

    export let entries = [];

    // Since 'entries' is a prop, it will be passed from the parent component
    // where this component is used.
</script>

<div class="h-screen snap-start pt-40 flex bg-slate-200 bg-slate-800 text-white">
  <!-- Left Column -->
  <div class="w-1/2 pt-5">
    <p class="text-2xl pt-5 text-center">Ready to Apply?</p>
    <div class="max-w-5xl mx-auto mt-5 text-center">
      <h1 class="block text-5xl font-bold md:text-5xl lg:text-6xl">
        JOIN THE COHORT THAT'S RIGHT FOR YOU.
      </h1>
    </div>
  </div>
  <!-- Right Column -->
  <div class="w-1/2 pt-5">
    <!-- Grid of Cohorts -->
    <div class="grid grid-cols-2">
      {#each entries as cohortEntry}
        <CohortCard
          title={cohortEntry.data.title}
          content={cohortEntry.data.content}
          startDate={cohortEntry.data.startDate}
          endDate={cohortEntry.data.endDate}
        />
      {/each}
    </div>
  </div>
</div>