<script>
  import Icon from '@iconify/svelte'
  export let text
  export let href
  export let icon
  export let extras
</script>

<button
  type="button"
  class="flex items-center justify-center px-8 py-2 text-sm font-semibold leading-loose transition-all bg-mcswf-pinstripe border border-transparent rounded-md shadow-lg text-white hover:bg-mcswf-pressed-button focus:bg-mcswf-pressed-button"
>
  <a {href}>
    {text}
  </a>
</button>
