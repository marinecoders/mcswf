<script>
    import Icon from '@iconify/svelte'
    export let text
    export let href
    export let icon
    export let extras
  </script>
  
  <button
    type="button"
    class="flex items-center justify-center px-8 py-2 text-xs md:text-base font-semibold leading-loose text-[#991B20] transition-all bg-mcswf-gold border border-transparent rounded-md shadow-lg text-mcswf-pinstripe focus:outline-none focus:bg-mcswf-gold-dark hover:bg-mcswf-gold-dark"
  >
    <a href={href}>
      {text}
    </a>
  </button>
  