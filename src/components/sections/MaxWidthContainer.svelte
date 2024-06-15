<script>
  import { twMerge } from 'tailwind-merge';
</script>

<div class={twMerge('max-w-screen-2xl items-center mx-auto px-8 md:px-12 lg:px-24', $$props.class)}>
  <slot />
</div>
