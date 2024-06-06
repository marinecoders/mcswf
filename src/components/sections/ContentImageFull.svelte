<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte';

  export let title;
  export let titleClasses = '';
  export let content = null;
  export let link = null;
  export let linkText = null;
  export let flipped = false;
  export let image = 'https://dummyimage.com/550/fff/aaa';
  export let imageAltText = '';
  export let imageClasses = null;
</script>

<section class="">
  <div class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto grid grid-cols-1 justify-center lg:grid-cols-2 md:py-8 md:px-6">
    {#if flipped}
      <div class="flex justify-center">
        <img class="w-7/8 lg:w-3/4 rounded-lg aspect-square object-cover {imageClasses}" src={image} alt={imageAltText} />
      </div>
    {/if}
    {#if !flipped}
      <div class="justify-center flex lg:hidden">
        <img class="w-7/8 rounded-lg object-cover aspect-square {imageClasses}" src={image} alt={imageAltText} />
      </div>
    {/if}
    <div class="font-light text-white sm:text-lg w-3/4 lg:w-full place-self-center">
      <h2 class="mb-4 mt-6 lg:mt-0 tracking-tight lg:text-center  text-mcswf-gold text-2xl font-bold md:text-3xl lg:text-4xl {titleClasses}">
        {@html title}
      </h2>
      <div class="flex justify-center">
        {#if content instanceof Array}
          <ul class="m-4 ml-12 list-disc text-base md:text-[21px]">
            {#each content as b, index}
              <li key={index}>{b}</li>
            {/each}
          </ul>
        {:else}
          <p class="mb-4 text-left lg:text-center  whitespace-pre-line text-base md:text-[21px]">
            {content}
          </p>
        {/if}
      </div>
      {#if link}
        <div class="grid w-full gap-3 mt-8 lg:inline-flex lg:justify-center justify-items-center">
          <ButtonCustom color="white" size="xl" class="w-full lg:w-64" {link}>
            {linkText}
          </ButtonCustom>
        </div>
      {/if}
    </div>
    {#if !flipped}
      <div class="justify-center hidden lg:flex">
        <img class="lg:w-3/4 rounded-lg aspect-square object-cover {imageClasses}" src={image} alt={imageAltText} />
      </div>
    {/if}
  </div>
</section>
