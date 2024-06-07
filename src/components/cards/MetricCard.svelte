<script>
  export let icon;
  export let value;
  export let metric;
</script>

<div class="rounded-lg flex h-72 w-56 xl:w-56 border-2 p-4 px-2 border-white text-center">
  <div class="w-full m-auto align-middle grid gap-4">
    <img class="mx-auto max-h-24" src={icon} alt="Description" />
    <h3 class="text-6xl h-12 text-white font-menobanner">{value}</h3>
    <p class="content-center font-semibold text-lg text-mcswf-gold">{metric}</p>
  </div>
</div>
