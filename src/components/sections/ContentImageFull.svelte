<script>
  import { nullable } from 'astro/zod';
  import ButtonCustom from '../buttons/ButtonCustom.svelte'

  export let title
  export let content = null
  export let link = null
  export let linkText = null
  export let flipped = false
  export let image = 'https://dummyimage.com/550/fff/aaa'
  export let imageAltText = ''
  export let imageClasses = null
  export let titleClasses = null
</script>

<section class="">
  <div
    class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 md:py-8 md:px-6">
    {#if flipped}
      <div class="flex justify-center">
        <img
          class="w-3/4 rounded-lg aspect-square object-cover {imageClasses}"
          src={image}
          alt={imageAltText} />
      </div>
    {/if}
    {#if !flipped}
      <div class="justify-center flex lg:hidden">
        <img
          class="w-3/4 rounded-lg object-cover aspect-square {imageClasses}"
          src={image}
          alt={imageAltText} />
      </div>
    {/if}
    <div class="font-light text-white sm:text-lg">
      <h2
        class="mb-4 pt-6 lg:pt-0 text-xl md:text-[40px] font-extrabold tracking-tight text-center text-mcswf-gold {titleClasses}">
        {title}
      </h2>
      <div class="flex justify-center">
        {#if content instanceof Array}
          <ul class="m-4 ml-12 list-disc text-base md:text-[21px]">
            {#each content as b, index}
              <li key={index}>{b}</li>
            {/each}
          </ul>
        {:else}
          <p
            class="mb-4 text-left lg:text-center w-3/4 lg:w-full whitespace-pre-line">
            {content}
          </p>
        {/if}
      </div>
      {#if link}
        <div
          class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center justify-items-center">
          <ButtonCustom color="white" size="xl" customClasses="w-64" {link}>
            {linkText}
          </ButtonCustom>
        </div>
      {/if}
    </div>
    {#if !flipped}
      <div class="justify-center hidden lg:flex">
        <img
          class="w-3/4 rounded-lg aspect-square object-cover {imageClasses}"
          src={image}
          alt={imageAltText} />
      </div>
    {/if}
  </div>
</section>
