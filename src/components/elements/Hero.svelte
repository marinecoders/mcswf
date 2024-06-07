<script>
  import { twMerge } from 'tailwind-merge';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';

  export let title = '';
  export let titleColor = 'white';
  export let description = '';
  export let descriptionColor = 'white';
  export let descriptionClasses = '';
  export let link = '';
  export let linkText = '';
  export let titleClasses = '';
  export let backgroundImg = '';

  const colorSpecificClasses = {
    white: 'from-white via-slate-50 to-slate-100',
    yellow: 'from-mcswf-gold via-yellow-300 to-mcswf-gold',
  };
</script>

<div
  style={`background-image: url("${backgroundImg}");`}
  class={twMerge('relative z-20 w-full bg-cover bg-center bg-no-repeat rounded-b-2xl md:rounded-none h-[400px] md:h-[550px]', $$props.class)}>
  <div class="absolute inset-0 bg-stone-900 opacity-25 rounded-b-2xl md:rounded-none"></div>
  <div
    class="relative h-[400px] md:h-[550px] bg-gradient-to-t from-stone-950 flex flex-col gap-6 md:gap-14 items-stretch md:items-center justify-end md:justify-center text-left md:text-center mx-auto rounded-b-2xl md:rounded-none tracking-wider px-8 pb-12">
    <!-- Title -->
    <h1 class={twMerge('text-left md:text-center font-bold text-[32px] md:text-[40px] bg-gradient-to-r text-transparent bg-clip-text', titleClasses, colorSpecificClasses[titleColor])}>
      {#if !title}
        <slot name="title" />
      {:else}
        {title}
      {/if}
    </h1>
    <!-- Description -->
    {#if description}
      <p class={twMerge('text-left md:text-center text-base lg:text-2xl', descriptionClasses, colorSpecificClasses[descriptionColor])}>
        {#if !description}
          <slot name="description" />
        {:else}
          {description}
        {/if}
      </p>
    {/if}
    <!-- Buttons -->
    {#if link}
      <ButtonCustom
        color="white"
        size="xl"
        {link}
        class="w-44 md:w-72">
        {linkText}
      </ButtonCustom>
    {/if}
  </div>
</div>
