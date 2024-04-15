<script>
    import RedButton from '../buttons/RedButton.svelte';
  
    export let title;
    export let content = null;
    export let link = null;
    export let linkText = null;
    export let padding;
    export let flipped = false;
  
    //console.log("link - ", link);
  </script>
  
  <section class="">
    <div
      class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto md:grid md:grid-cols-2 md:py-16 md:px-6"
    >
      {#if flipped}
        <div class="grid gap-4 mt-8 grid-cols-1">
          <img
            class="w-full rounded-lg"
            src="https://dummyimage.com/1080/fff/aaa"
            alt="office content 1"
          />
        </div>
      {/if}
      <div class="font-light text-white sm:text-lg">
        <h2
          class="mb-4 text-4xl font-extrabold tracking-tight text-center text-mcswf-gold"
        >
          {title}
        </h2>
        {#if content instanceof Array}
          <ul class="m-4 ml-12 list-disc">
            {#each content as b, index}
              <li key={index}>{b}</li>
            {/each}
          </ul>
        {:else}
          <p class="mb-4 text-center">{content}</p>
        {/if}
        {#if link}
          <div class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center">
            <RedButton href={link} text={linkText} />
          </div>
        {/if}
      </div>
      {#if !flipped}
          <div class="grid gap-4 mt-8 grid-cols-1">
              <img
                  class="w-full rounded-lg"
                  src="https://dummyimage.com/1080/fff/aaa"
                  alt="office content 1"
              />
          </div>
      {/if}
    </div>
  </section>