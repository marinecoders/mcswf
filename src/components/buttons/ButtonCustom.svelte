<script>
  import { Button } from 'flowbite-svelte'

  export let red = false;
  export let white = false;
  export let yellow = false;

  export let color = 'white' // white, yellow, red
  export let size = 'md' // sm, md, lg
  export let handleClick = () => {}
  export let href = ''
  export let customClasses = ''
  export let ariaLabel = ''

  const defaultClasses =
    'uppercase p-2 px-8 text-center rounded font-bold tracking-wide transition-all border border-transparent shadow-lg focus:outline-none focus:ring-2 '

  const colorSpecificClasses = {
    white:
      'bg-mcswf-white-50 text-usmc-red hover:bg-zinc-200 hover:focus:ring-zinc-400/0 focus:ring-zinc-400/70 ',
    yellow:
      'bg-mcswf-yellow text-usmc-red hover:bg-amber-400 hover:focus:ring-amber-600/0 focus:ring-amber-600/70 ',
    red: 'bg-mcswf-red text-mcswf-white-50 hover:bg-red-900 hover:focus:ring-red-950/0 focus:ring-red-950/70 ',
  }
 colorSpecificClasses
</script>

<a href={href}
    {size}
    {handleClick}
    class={defaultClasses + colorSpecificClasses[color] + customClasses}
    aria-label={ariaLabel}
    role="button"
    tabindex="0"
  >
  <slot />
</a>
