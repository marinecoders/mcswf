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

<div class="flex flex-row justify-center pt-12 pb-4 px-8">
  <h1 class="text-center font-bold text-3xl">
    BUILDING PRODUCTS THAT MAKE A DIFFERENCE
  </h1>
</div>
<div class="grid grid-flow-col justify-start md:justify-between gap-2 overflow-x-scroll snap-always snap-x snap-mandatory h-96 content-center gap-x-10 w-full pl-12">
  {#each products as product}
      <Card
        title={product.data.product}
        link={expandLink(product.id)}
        shortDescription={product.data.shortDescription}
        position={product.data.order}
        id={product.id}
      />
  {/each}
</div>
