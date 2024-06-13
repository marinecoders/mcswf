<script>
  import SquareImage from '@components/sections/SquareImage.svelte';
  import SquareContent from '@components/sections/SquareContent.svelte';

  export let image = '/images/ega_network.jpg';
  export let imageAltText = '';
  export let imageClasses = '';
  export let imagePosition = 'right';
</script>

<div class="py-4 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-24 justify-center items-center">
  <div class={imagePosition === 'right' ? 'lg:order-2 order-1' : 'lg:order-1 order-1'}>
    <SquareImage
      {image}
      {imageAltText}
      class={imageClasses} />
  </div>
  <div class={imagePosition === 'right' ? 'lg:order-1 order-2' : 'lg:order-2 order-2'}>
    <SquareContent {...$$props}>
      <slot
        name="title"
        slot="squareTitle" />
    </SquareContent>
  </div>
</div>
