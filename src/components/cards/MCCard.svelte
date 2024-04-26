<script>
  export let title;
  export let subtitle;
  export let link;
</script>

<div class="rounded-lg bg-slate-900 border border-slate-700 shadow-lg overflow-hidden">
  <div class="flex flex-col items-center p-4 md:p-6 text-center">
    <h5 class="text-xl md:text-3xl font-extrabold text-white mb-2 md:mb-3">{title}</h5> <!-- Responsive text sizing -->
    <p class="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 line-clamp-2">{subtitle}</p> <!-- Responsive text sizing -->
    {#if link}
      <a href={link} class="inline-flex items-center py-1 px-3 md:py-2 md:px-4 bg-white rounded-full text-slate-900 hover:bg-slate-200 text-xs md:text-sm">LEARN MORE &gt;</a> <!-- Responsive padding -->
    {/if}
  </div>
</div>
