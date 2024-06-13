<script>
  export let open = false;
  export let id = '';
</script>

<button
  class="scale-75 w-14 h-14 relative rounded group flex flex-row justify-end items-center"
  {id}>
  <div class="w-5 h-8 relative">
    <span
      class={`block absolute w-7 h-1 bg-white group-hover:bg-zinc-200 group-hover:duration-200 rounded transition-all duration-500 ease-in-out top-1 ${open ? 'translate-x-10 opacity-0' : 'top-1'}`}
    ></span>
    <span class={`block absolute w-7 h-1 bg-white group-hover:bg-zinc-200 group-hover:duration-200 rounded transition-all duration-500 ease-in-out top-1/2 ${open ? 'rotate-45' : 'top-1/2'}`}></span>
    <span class={`block absolute w-7 h-1 bg-white group-hover:bg-zinc-200 group-hover:duration-200 rounded transition-all duration-500 ease-in-out top-1/2 ${open ? '-rotate-45' : 'top-1/2'}`}></span>
    <span
      class={`block absolute w-7 h-1 bg-white group-hover:bg-zinc-200 group-hover:duration-200 rounded transition-all duration-500 ease-in-out bottom-0 ${open ? '-translate-x-10 opacity-0' : 'bottom-0'}`}
    ></span>
  </div>
</button>
