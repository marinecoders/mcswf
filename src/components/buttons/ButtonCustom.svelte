<script>
  import { Button } from 'flowbite-svelte'

  export let color = 'white' // white, yellow, red
  export let size = 'md' // xs, sm, md, lg, xl
  export let handleClick = () => {}
  export let link = ''
  export let customClasses = ''
  export let ariaLabel = ''

  const defaultClasses =
    'inline-block uppercase text-center align-middle rounded font-bold tracking-wide transition-all border border-transparent shadow-lg focus:outline-none focus:ring-2 '

  const colorSpecificClasses = {
    white:
      'bg-mcswf-white-50 text-usmc-red hover:bg-zinc-200 hover:focus:ring-zinc-400/0 focus:ring-zinc-400/70 ',
    yellow:
      'bg-mcswf-gold text-usmc-red hover:bg-amber-400 hover:focus:ring-amber-600/0 focus:ring-amber-600/70 ',
    red: 'bg-mcswf-red text-mcswf-white-50 hover:bg-red-900 hover:focus:ring-red-950/0 focus:ring-red-950/70 ',
  }

  //   const sizeClasses = {
  //     xs: 'px-3 py-2 text-xs',
  //     sm: 'px-4 py-2 text-sm',
  //     md: 'px-5 py-2.5 text-sm',
  //     lg: 'px-5 py-3 text-base',
  //     xl: 'px-6 py-3.5 text-base',
  //   }
</script>

<Button
  href={link}
  {size}
  {handleClick}
  class={defaultClasses + colorSpecificClasses[color] + customClasses}
  aria-label={ariaLabel}
  role="button"
  tabindex="0">
  <slot />
</Button>
