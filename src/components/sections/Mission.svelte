<script>
    import Hero from '../elements/Hero.svelte';
    import MetricCard from '../cards/MetricCard.svelte';
  </script>
  
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    <!-- Title -->
    <Hero linkText='LEARN MORE' padding="md:pt-24 pt-16 pb-12" title='OUR MISSION' content='We provide mission-specific software development, data analytics, and artificial intelligence operations capabilities to MIG commanders to close joint, coalition, and naval kill webs. These capabilities enhance Marine commanders decision advantage across the full spectrum of military operations.'></Hero>
  
    <div class="grid grid-cols-2 gap-8 p-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 md:gap-12">
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
  </div>