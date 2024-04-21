<script>
  import RedButton from '../buttons/WhiteButton.svelte'

  export let title
  export let content = null
  export let link = null
  export let linkText = null
  export let padding = null
  export let flipped = false
  export let image = 'https://dummyimage.com/550/fff/aaa'
  export let imageClasses = null

  //console.log("link - ", link);
</script>

<section class="">
  <div
    class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto md:grid md:grid-cols-2 md:py-8 md:px-6"
  >
    {#if flipped}
      <div class="flex justify-center">
        <img
          class="w-3/4 rounded-lg aspect-square object-cover {imageClasses}"
          src={image}
          alt="office content 1"
        />
      </div>
    {/if}
    <div class="font-light text-white sm:text-lg">
      <h2
        class="mb-4 pt-6 lg:pt-0 text-xl md:text-[40px] font-extrabold tracking-tight text-center text-mcswf-gold"
      >
        {title}
      </h2>
      {#if content instanceof Array}
        <ul class="m-4 ml-12 list-disc text-base md:text-[21px]">
          {#each content as b, index}
            <li key={index}>{b}</li>
          {/each}
        </ul>
      {:else}
        <p class="mb-4 text-center text-base md:text-[21px]">{content}</p>
      {/if}
      {#if link}
        <div class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center">
          <RedButton href={link} text={linkText} />
        </div>
      {/if}
    </div>
    {#if !flipped}
      <div class="flex justify-center">
        <img
          class="w-3/4 rounded-lg aspect-square object-cover {imageClasses}"
          src={image}
          alt="office content 1"
        />
      </div>
    {/if}
  </div>
</section>
