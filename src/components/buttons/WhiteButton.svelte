<script>
  import Icon from '@iconify/svelte'
  export let text
  export let href
  // these don't seem to be used for anything
  // export let icon
  // export let extras
</script>


<a 
    href=""
    type="button"
    class="flex w-3/4 flex w-full items-center justify-center items-center lg:w-60 justify-center px-8 py-2 text-base font-semibold leading-loose transition-all bg-white border border-transparent rounded-md shadow-lg text-mcswf-pinstripe hover:ring-2 focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-500 hover:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
  >
    {text}
</a>
