<script>
  import Card from '../cards/MCCard.svelte';

  export let products = [];

  function expandLink(link) {
    return "products/" + link;
  }
</script>

<div class="flex flex-col md:flex-row items-start justify-center">
  <div class="title w-full md:w-auto p-4 pl-12 md:pl-12 text-center md:text-left"> <!-- Adjusted width and padding -->
    <h1 class="text-3xl md:text-4xl font-bold text-white"> <!-- Adjusted font size -->
      BUILDING <br class="hidden md:inline" /> PRODUCTS <br class="hidden md:inline" /> THAT <br class="hidden md:inline" /> MAKE A DIFFERENCE
    </h1>
  </div>
  <div class="cards-container flex overflow-x-auto w-full md:w-auto space-x-0 md:space-x-6 p-4"> <!-- Adjusted width -->
    {#each products as product}
      <div class="card w-60 md:w-96 flex-shrink-0"> <!-- Responsive width -->
        <Card
          title={product.data.product}
          subtitle={product.data.description}
          link={expandLink(product.id)}
          imageSrc={product.data.imageSrc}
        />
      </div>
    {/each}
  </div>
</div>
