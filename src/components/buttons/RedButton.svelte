<script>
  import Icon from '@iconify/svelte'
  export let text
  export let href
  export let icon
  export let extras
</script>

<button
  type="button"
  class="flex items-center justify-center px-8 py-2 text-xs font-semibold leading-loose text-black transition-all bg-white border border-transparent rounded-md shadow-lg text-mcswf-pinstripe hover:ring-2 focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-500 hover:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
>
  <a href={href}>
    {text}
  </a>
</button>
