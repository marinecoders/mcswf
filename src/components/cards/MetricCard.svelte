<script>
  export let icon
  export let value
  export let metric
</script>

<div class="rounded-lg h-72 flex border-2 border-white">
  <div class="w-3/4 w-full m-auto align-middle grid gap-4">
    <image class="mx-auto max-h-24" src={icon} alt="Image Description" />
    <p class="text-6xl h-12 font-menobanner">{value}</p>
    <p class="text-mcswf-gold h-12 font-semibold">{metric}</p>
  </div>
</div>