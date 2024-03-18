<script>
    import Card from '../cards/MCCard.svelte';

    export let products = [];

    // Since 'products' is a prop, it will be passed from the parent component
    // where this component is used.

    // Define the function to expand link
    function expandLink(link) {
        return "products/" + link;
    }
</script>

<div class="flex flex-row justify-center pt-12 pb-4">
  <h1 class="text-center font-bold text-3xl">
    BUILDING PRODUCTS THAT MAKE A DIFFERENCE
  </h1>
</div>
<div class="flex flex-row">
  <div class="flex-initial basis-1/12"></div>
  <div class="basis-10/12 flex flex-wrap">
    {#each products as product}
      <div class="flex pt-3 justify-center w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
        <Card
          title={product.data.product}
          link={expandLink(product.id)}
          imageSrc="https://dummyimage.com/25x25/fff/aaa"
        />
      </div>
    {/each}
  </div>
  <div class="basis-1/12"></div>
</div>