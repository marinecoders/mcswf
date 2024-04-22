<script>
    import MetricCard from '../cards/MetricCard.svelte';
</script>

<div class="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
    {#each [
      { icon: '/icons/icon homepage marines trained.svg', value: '4', metric: 'Marines Trained' },
      { icon: '/icons/icon homepage applications deployed.svg', value: '4', metric: 'Applications Deployed' },
      { icon: '/icons/icon homepage units using.svg', value: '16', metric: 'Units Using MCSWF Applications' },
      { icon: '/icons/icon homepage average days.svg', value: '81', metric: 'Average Days 0-1 MVP' }
    ] as { icon, value, metric }, index}
      <div class="text-center border-white border-2 rounded-lg p-4" key={index}>
        <MetricCard icon={icon} value={value} metric={metric} />
      </div>
    {/each}
  </div>