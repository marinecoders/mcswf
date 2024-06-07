<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte';
  import Icon from '@iconify/svelte';

  export let title;
  export let content;
  export let startDate;
  export let link;
</script>

<div class="w-10/12 lg:w-64 p-4 border rounded-lg shadow-md bg-white">
  <div class="flex justify-end pb-4">
    <a href={link}>
      <Icon class="text-black text-2xl" icon="mdi:share-variant-outline"></Icon>
    </a>
  </div>
  <div class="text-center pb-4">
    <h2 class="text-3xl font-bold text-black">{title}</h2>
  </div>
  <div class="text-center py-4">
    <h2 class="text-lg font-bold text-black">{startDate}</h2>
  </div>
  <p class="text-gray-700 text-base pt-1 pb-6 text-center">{content}</p>
  <div class="flex justify-center pb-6">
    <ButtonCustom color="red" size="lg" class="w-full lg:w-auto" {link}>APPLY NOW</ButtonCustom>
  </div>
</div>
