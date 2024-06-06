<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte';

  export let title = null;
  export let content = '';
  export let link = '';
  export let linkText = '';
  export let padding = '';
  export let contentClasses = '';
  export let titleClasses = 'text-mcswf-gold text-[32px] md:text-[40px]';
</script>

<div class={'max-w-[85rem] mx-auto px-4 pt-inherit ' + padding}>
  <!-- Title -->
  <div class="max-w-6xl mx-auto mt-5 text-left sm:text-center">
    <h1 class="block font-bold {titleClasses}">
      {#if !title}
        <slot name="title" />
      {:else}
        {title}
      {/if}
    </h1>
  </div>
  <!-- End Title -->

  <div class="max-w-3xl mx-auto mt-5 text-left lg:text-center">
    <p id="content" class="text-white lg:text-2xl {contentClasses}">
      {#if !content}
        <slot name="content" />
      {:else}
        {content}
      {/if}
    </p>
  </div>

  <!-- Buttons -->
  {#if link}
    <div class="grid w-full gap-3 mt-8 inline-flex sm:justify-items-start sm:justify-center">
      <ButtonCustom color="white" size="xl" {link} class="w-64">
        {linkText}
      </ButtonCustom>
    </div>
  {/if}
  <!-- End Buttons -->
</div>
