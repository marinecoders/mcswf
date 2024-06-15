<script>
  import Products from "@components/sections/Products.svelte";

    export let title;
    export let shortDescription;
    export let link;
    export let position;
    export let id;
  </script>
  
  <div id={id} class="rounded-lg w-52 h-72 shadow-lg bg-slate-900 snap-start hover:scale-125 scroll-mx-16">
    <div class="flex flex-col items-center pb-10 text-center m-6">
      <div class="flex justify-start self-start pb-6">
        <span class="text-left font-menobanner font-semibold text-7xl">{position}</span>
        <h5 class="mb-1 font-extrabold text-2xl align-middle text-gray-900 text-white pl-4 self-center">
          {title}
        </h5>
      </div>
      <div class="text-base text-left">{shortDescription}</div>
      <div class="self-start flex mt-2 space-x-3">
        {#if link}
          <a href={link} class="inline-flex items-center text-mcswf-gold text-xl font-bold underline underline-offset-4 text-left">learn more</a>
        {/if}
      </div>
    </div>
  </div>