<script>
  import { twMerge } from 'tailwind-merge';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import MaxWidthContainer from '@components/sections/MaxWidthContainer.svelte';

  export let title = '';
  export let titleColor = 'white';
  export let titleClasses = '';
  export let description = '';
  export let descriptionColor = 'white';
  export let descriptionClasses = '';
  export let link = '';
  export let linkText = '';
  export let externalLink = false;
  export let backgroundImg = '';
  export let componentHeightClasses = '';

  const colorSpecificClasses = {
    white: 'from-white via-slate-50 to-slate-200',
    yellow: 'from-mcswf-gold via-yellow-300 to-mcswf-gold',
  };
</script>

<div
  style={`background-image: url("${backgroundImg}");`}
  class={twMerge('relative z-20 w-full bg-cover bg-center bg-no-repeat rounded-b-2xl h-[400px] md:h-[550px]', componentHeightClasses, $$props.class)}>
  <div class="absolute inset-0 bg-stone-900 opacity-25 rounded-b-2xl"></div>
  <div class={twMerge('relative h-[400px] md:h-[550px] bg-gradient-to-t from-stone-950 mx-auto rounded-b-2xl tracking-wider pb-12', componentHeightClasses)}>
    <MaxWidthContainer
      class={twMerge('relative h-[400px] md:h-[550px] flex flex-col gap-6 md:gap-12 items-stretch md:items-center justify-center md:justify-center text-left md:text-center', componentHeightClasses)}>
      <!-- Title -->
      <h1 class={twMerge('text-left md:text-center font-bold text-[32px] md:text-[40px] bg-gradient-to-r text-transparent bg-clip-text', titleClasses, colorSpecificClasses[titleColor])}>
        {#if !title}
          <slot name="title" />
        {:else}
          {title}
        {/if}
      </h1>
      <!-- Description -->
      {#if $$slots.description || description}
        <p class={twMerge('text-left md:text-center text-base lg:text-2xl', descriptionClasses, colorSpecificClasses[descriptionColor])}>
          {#if $$slots.description}
            <slot name="description" />
          {:else if description}
            {description}
          {/if}
        </p>
      {/if}
      <!-- Buttons -->
      {#if link}
        <ButtonCustom
          color="white"
          size="xl"
          class="w-52 md:w-72"
          {link}
          {externalLink}>
          {linkText}
        </ButtonCustom>
      {/if}
    </MaxWidthContainer>
  </div>
</div>
