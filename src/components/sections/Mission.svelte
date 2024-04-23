<script>
  import Hero from '../elements/Hero.svelte';
  import MetricCard from '../cards/MetricCard.svelte';
  import MissionMetrics from '../elements/MissionMetrics.svelte'
</script>
  
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
  <!-- Title -->
  <Hero linkText='LEARN MORE' padding="md:pt-24 pt-16 pb-12" title='OUR MISSION' content='We provide mission-specific software development, data analytics, and artificial intelligence operations capabilities to MIG commanders to close joint, coalition, and naval kill webs. These capabilities enhance Marine commanders decision advantage across the full spectrum of military operations.'></Hero>
  <MissionMetrics />
</div>