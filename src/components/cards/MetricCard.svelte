<script>
    export let icon;
    export let value;
    export let metric;
  </script>
  
  <img class="mx-auto h-24" src={icon} alt="Image Description" />
  <div class="flex flex-col mt-2 sm:mt-4 justify-center">
    <h3 class="text-6xl font-extrabold text-white font-menobanner">{value}</h3>
    <p class="mx-auto w-5/6 content-center text-lg font-semibold text-mcswf-gold">{metric}</p>
  </div>