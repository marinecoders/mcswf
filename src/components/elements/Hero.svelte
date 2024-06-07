<script>
  import { twMerge } from 'tailwind-merge';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';

  export let title = '';
  export let description = '';
  export let link = '';
  export let linkText = '';
  export let descriptionClasses = '';
  export let titleClasses = 'text-mcswf-gold text-[32px] md:text-[40px]';
  export let backgroundImg = '/images/marine_silo.png';
</script>

<div class={twMerge(`bg-[url('${backgroundImg}')]`, 'relative bg-fixed z-20 bg-cover bg-center bg-no-repeat rounded-b-2xl lg:rounded-none', $$props.class)}>
  <div class="absolute inset-0 bg-stone-900 opacity-25"></div>
  <div class="relative h-[400px] md:h-[550px] bg-gradient-to-t from-black flex flex-col items-center justify-center text-left md:text-center mx-auto rounded-b-2xl lg:rounded-none">
    <!-- Title -->
    <div class="max-w-6xl mt-5">
      <h1 class="font-bold text-[32px] md:text-[40px] {titleClasses}">
        {#if !title}
          <slot name="title" />
        {:else}
          {title}
        {/if}
      </h1>
    </div>
    <!-- Description -->
    {#if description}
      <div class="max-w-3xl mt-5">
        <p id="description" class="text-white lg:text-2xl {descriptionClasses}">
          {#if !description}
            <slot name="description" />
          {:else}
            {description}
          {/if}
        </p>
      </div>
    {/if}
    <!-- Buttons -->
    {#if link}
      <!-- <div class="w-full mt-8 inline-flex justify-center"> -->
      <ButtonCustom color="white" size="xl" {link} class="w-64">
        {linkText}
      </ButtonCustom>
      <!-- </div> -->
    {/if}
  </div>
</div>
