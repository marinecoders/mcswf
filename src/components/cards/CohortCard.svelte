<script>
  import RedButton from '../buttons/RedButton.svelte'
  import Icon from '@iconify/svelte'

  export let title
  export let content
  export let startDate
  export let endDate
</script>

<div class=" w-64 p-4 border rounded-lg shadow-md bg-white">
  <div class="flex justify-end">
    <a href="">
      <Icon class="text-black text-2xl" icon="mdi:share-variant-outline"></Icon>
    </a>
  </div>
  <div class="text-center pb-4">
    <h2 class="text-3xl font-bold text-black">COHORT</h2>
  </div>
  <div class="text-center">
    <h2 class="text-lg font-bold text-black">00/00/0000-00/00/0000</h2>
  </div>
  <p class="text-gray-700 text-base pb-4 text-center">
    Lorem ipsum dolor sit amet. Et quae quEum eveniet placea Lorem ipsum dolor
    sit amet. Et quae quEum eveniet placea
  </p>
  <div class="flex justify-center">
    <RedButton text="APPLY NOW" />
  </div>
</div>
