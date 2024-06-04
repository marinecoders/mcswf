<script>
  export let icon;
  export let value;
  export let metric;
</script>
  
<div class="rounded-lg flex h-72 w-56 lg:w-48 xl:w-56 border-2 p-4 border-white">
  <div class="w-7/8 m-auto align-middle grid gap-4">
    <img class="mx-auto max-h-24" src={icon} alt="Description" />
    <h3 class="text-6xl h-12 text-white font-menobanner">{value}</h3>
    <p class="content-center font-semibold text-large text-mcswf-gold">{metric}</p>
  </div>
</div>