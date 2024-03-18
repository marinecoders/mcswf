<script>
    export let title;
    export let link;
    export let imageSrc;
  </script>
  
  <div class="rounded-lg w-full max-w-sm bg-slate-300 border border-gray-200 shadow-lg bg-slate-900 border-slate-700">
    <div class="flex flex-col items-center pb-10 text-center">
      <img class="m-4 w-24 h-24 mb-3 rounded-full shadow-lg" src={imageSrc}/>
      <h5 class="mb-1 font-extrabold text-4xl text-gray-900 text-white">
        {title}
      </h5>
      <div class="flex font-light mt-2 space-x-3">
        {#if link}
          <a href={link} class="inline-flex items-center">LEARN MORE &gt;</a>
        {/if}
      </div>
    </div>
  </div>