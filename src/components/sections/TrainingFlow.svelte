<script>
    import TrainingCard from '../cards/TrainingCard.svelte';
    import { Icon } from 'astro-icon';
  </script>
  
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    <!-- Title -->
    <div class="flex items-center justify-center">
      {#each [1, 2, 3, 4] as step (step)}
        <div class="max-h-72 text-center" key={step}>
          <TrainingCard
            icon="https://dummyimage.com/256x256/fff/aaa"
            value={`STEP ${step}`}
          />
        </div>
        {#if step !== 4}
          <div class="text-center">
            <Icon width="54px" pack="mdi" name="arrow-right-bold-outline" />
          </div>
        {/if}
      {/each}
    </div>
  </div>