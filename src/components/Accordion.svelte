<script>
  import { mobile,active } from './stores.js';
  import AccordionSection from './elements/AccordionSection.svelte'
  import FooterFull from '../components/FooterFull.svelte'

  export let products;
  products.sort((a,b) => a.data.order - b.data.order)

  // Uncomment below to limit accordion to only the top three products
  //products = products.slice(0,3);

  let width = 0;

  $: mobile.set(width < 640);

  function setActive(section){
    active.set(section);
  }


  function expandLink(link){
    return "products/"+link;
  }

</script>

<svelte:window bind:innerWidth={width} />

<div class="grid grid-cols-1 sm:h-5/6" class:sm:grid-cols-6={products.length == 3} class:sm:grid-cols-7={products.length == 4}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div role="button" tabindex="0" class="flex flex-col col-span-1 justify-end sm:justify-normal h-96 px-16 sm:px-32 {($active==0 && !$mobile) ? 'col-span-3': ''} {($active!=0 && !$mobile) ? 'col-span-2': ''} bg-pink-400 sm:h-full" on:click={() => setActive(0)}>
    <div class="h-1/4"></div>
      <div class="py-8 text-mcswf-gold font-bold text-center font-expressway text-xl sm:text-4xl">
        OUR PRODUCT PORTFOLIO
      </div>
      <div class="text-lg sm:text-2xl font-expressway text-center py-8">
        Real solutions to real problems - Created for Marines, by Marines at the Marine Corps Software Factory
      </div>
    </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each products as product}
    <div role="button" tabindex="0" class="h-fit sm:h-full {($active==product.data.order && !$mobile) ? 'col-span-2': 'col-span-1'} red-radial-gradient" on:click={() => setActive(product.data.order)} >
      <div class="relative h-full sm:border-x sm:border-y-0 border-y">
        <AccordionSection
          text={product.data.description}
          title={product.data.product}
          sequence={product.data.order}
          href={expandLink(product.id)}
        />
      </div>
    </div>
  {/each}
</div>

<FooterFull></FooterFull>



