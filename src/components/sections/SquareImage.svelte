<script>
  import { twMerge } from 'tailwind-merge';

  export let image = '/ega_network.jpg';
  export let imageAltText = '';
</script>

<img
  class={twMerge('w-full rounded-lg object-cover aspect-square', $$props.class)}
  src={image}
  alt={imageAltText} />
