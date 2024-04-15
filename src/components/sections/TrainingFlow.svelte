<script>
  import TrainingCard from '../cards/TrainingCard.svelte';
  import RightArrow from '../icons/RightArrow.svelte';
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
  <!-- Title -->
  <div class="flex items-center justify-center">
    <div class="max-h-72 text-center">
      <TrainingCard icon="https://dummyimage.com/256x256/fff/aaa" value="STEP 1" />
    </div>
    <div class="text-center">
      <RightArrow/>
    </div>
    <div class="max-h-72 text-center">
      <TrainingCard icon="https://dummyimage.com/256x256/fff/aaa" value="STEP 2" />
    </div>
    <div class="text-center">
      <RightArrow/>
    </div>
    <div class="max-h-72 text-center">
      <TrainingCard icon="https://dummyimage.com/256x256/fff/aaa" value="STEP 3" />
    </div>
    <div class="text-center">
      <RightArrow/>
    </div>
    <div class="max-h-72 text-center">
      <TrainingCard icon="https://dummyimage.com/256x256/fff/aaa" value="STEP 4" />
    </div>
  </div>
</div>