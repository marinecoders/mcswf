<script>
    import { mobile } from '../stores.js';
    export let title
    export let sequence

    let mobileValue;
    mobile.subscribe((value) => {mobileValue = value;});
</script>


<div
class="grid grid-cols-5 items-center justify-start  p-4 sm:p-8 sm:grid-cols-2 text-white align-bottom bg-black border-y sm:h-full sm:items-end sm:border-x sm:border-y-0"
>
<p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">{sequence}</p>
  {#if mobileValue}
    <div class="tracking-widest text-left text-xl font-bold col-span-3">{title}</div>
    <div class="text-xl font-bold text-center">+</div>
  {:else}
  <p class="mb-2 text-xl font-bold mb-8 -rotate-90 text-end whitespace-nowrap">
  + {title} </p>
  {/if}

</div>
