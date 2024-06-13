<script>
  import { twMerge } from 'tailwind-merge';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';

  export let title = '';
  export let titleClasses = '';
  export let content = null;
  export let link = null;
  export let linkText = null;
</script>

<div class="w-full flex flex-col gap-6 lg:gap-12 mt-6 lg:mt-0">
  <h2 class={twMerge('font-bold tracking-wide lg:text-center text-mcswf-gold text-2xl md:text-3xl lg:text-[40px]', titleClasses)}>
    {#if !title}
      <slot name="squareTitle" />
    {:else}
      {title}
    {/if}
  </h2>
  {#if content instanceof Array}
    <ul class="flex justify-center text-left lg:text-center my-2 list-disc text-base md:text-[21px] font-light">
      {#each content as b, index}
        <li key={index}>{b}</li>
      {/each}
    </ul>
  {:else}
    <p class="text-left lg:text-center whitespace-pre-line text-base md:text-[21px] font-light">
      {content}
    </p>
  {/if}
  {#if link}
    <div class="grid w-full gap-3 md:inline-flex md:justify-center justify-items-center">
      <ButtonCustom
        color="white"
        size="xl"
        class="w-full md:w-64"
        {link}>
        {linkText}
      </ButtonCustom>
    </div>
  {/if}
</div>
