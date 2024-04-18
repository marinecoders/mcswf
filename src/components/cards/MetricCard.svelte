<script>
  export let icon;
  export let value;
  export let metric;
</script>

<div class="rounded border-2 h-80 w-52 p-4 m-auto">
  <img class="mx-auto rounded-xl" src={icon} alt="Image Description" />
  <div class="mt-2 sm:mt-4">
    <h3 class="text-6xl font-extrabold text-white">{value}</h3>
    <p class="text-md text-mcswf-gold">{metric}</p>
  </div>
</div>