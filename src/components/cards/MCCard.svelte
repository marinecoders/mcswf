<script>
  export let title
  export let subtitle
  export let link

  let visible = false
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<div class="rounded-2xl h-44 bg-mcswf-blue hover:scale-105 shadow-lg transition-all" on:mouseenter={ () => { visible = true } } on:mouseleave={ () => { visible = false } }>
  <div class="flex flex-col my-auto h-full p-4 md:p-6 justify-between text-left">
    <h5 class="text-xl font-extrabold ">{title}</h5> <!-- Responsive text sizing -->
    <p class="text-md line-clamp-2">{subtitle}</p> <!-- Responsive text sizing -->
    {#if link}
      <a href={ link } class="inline-flex font-semibold underline hover:underline-offset-4 text-mcswf-yellow items-center rounded-fulltext-xs md:text-sm">learn more</a> <!-- Responsive padding -->
    {/if}
  </div>
</div>
g
<div class="pt-1 pb-4 h-32">
  {#if visible}
  <div class="border-2 border-mcswf-yellow mt-5"></div>
  {/if}
</div>
