<script>
  import { twMerge } from 'tailwind-merge';
  import { Button } from 'flowbite-svelte';

  export let color = 'white'; // white, yellow, red
  export let size = 'md'; // xs, sm, md, lg, xl
  export let handleClick;
  export let link = '';
  export let disabled = false;

  const colorSpecificClasses = {
    white: 'bg-mcswf-white-50 text-usmc-red hover:bg-zinc-200 hover:focus:ring-zinc-400/0 focus:ring-zinc-400/70 ',
    yellow: 'bg-mcswf-gold text-usmc-red hover:bg-amber-400 hover:focus:ring-amber-600/0 focus:ring-amber-600/70 ',
    red: 'bg-mcswf-red text-mcswf-white-50 hover:bg-red-900 hover:focus:ring-red-950/0 focus:ring-red-950/70 ',
  };
</script>

<Button
  {...$$restProps}
  href={link}
  on:click={handleClick}
  {size}
  class={twMerge(
    'inline-block uppercase text-center align-middle rounded font-bold tracking-wide transition-all border border-transparent shadow-lg focus:outline-none focus:ring-2',
    colorSpecificClasses[color],
    $$props.class
  )}
  {disabled}>
  <slot />
</Button>
