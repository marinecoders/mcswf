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
  <h1 class="text-center font-bold text-3xl mx-6">
    BUILDING PRODUCTS THAT MAKE A DIFFERENCE
  </h1>
</div>
<div class="grid grid-flow-col justify-around gap-2 overflow-x-auto snap-x h-fit">
  {#each products as product}
      <Card
        title={product.data.product}
        link={expandLink(product.id)}
        shortDescription={product.data.shortDescription}
        position={product.data.order}
      />
  {/each}
</div>
