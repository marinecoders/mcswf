<script>
    export let icon;
    export let value;
    export let metric;
  </script>
  
  <img class="w-72 h-72 mx-auto" src={icon} alt="Image Description" />
  <div class="mt-2 sm:mt-4">
    <h3 class="text-4xl font-extrabold">{value}</h3>
    {#if metric}
      <p class="text-md">{metric}</p>
    {/if}
  </div>