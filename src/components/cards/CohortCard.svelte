<script>
  import RedButton from '../buttons/RedButton.svelte'
  import Icon from '@iconify/svelte'

  export let title
  export let content
  export let startDate
  export let endDate
  export let link
</script>

<div class=" w-64 p-4 border rounded-lg shadow-md bg-white">
  <div class="flex justify-end">
    <a href={link}>
      <Icon class="text-black text-2xl" icon="mdi:share-variant-outline"></Icon>
    </a>
  </div>
  <div class="text-center pb-4">
    <h2 class="text-3xl font-bold text-black">{title}</h2>
  </div>
  <div class="text-center">
    <h2 class="text-lg font-bold text-black">{startDate}-{endDate}</h2>
  </div>
  <p class="text-gray-700 text-base pb-4 text-center">{content}</p>
  <div class="flex justify-center" href={link}>
    <a href={link}>
      <RedButton text="APPLY NOW" />
    </a>
  </div>
</div>
