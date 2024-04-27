<script>
  import Card from '../cards/MCCard.svelte'

  export let products = []

  function expandLink (link) {
    return 'products/' + link
  }
</script>

<div class="flex justify-center">
  <div class="w-3/4">
    <div class="flex flex-col md:flex-row items-start justify-center">
      <div class="title w-fit mx-auto text-center md:text-left"> <!-- Adjusted width and padding -->
        <h1 class="w-96 flex-2 text-3xl md:text-4xl font-bold text-white"> <!-- Adjusted font size -->
          BUILDING PRODUCTS THAT MAKE A DIFFERENCE
        </h1>
      </div>
      <div class="cards-container no-scroll-bar flex overflow-x-auto w-full md:w-auto space-x-8 md:space-x-6 p-4"> <!-- Adjusted width -->
        {#each products as product}
          <div class="card w-60 md:w-96 flex-shrink-0"> <!-- Responsive width -->
            <Card
              title={ product.data.product }
              subtitle={product.data.shortDescription }
              link={ expandLink(product.id) }
              imageSrc={ product.data.imageSrc }
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
