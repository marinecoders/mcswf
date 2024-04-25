<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte'

  export let title = ''
  export let content = ''
  export let link = ''
  export let linkText = ''
  export let padding = ''
  export let contentClasses = ''
  export let titleClasses = 'text-mcswf-gold'
</script>

<div class={'max-w-[85rem] mx-auto px-4 pt-inherit ' + padding}>
  <!-- Title -->
  <div class="max-w-6xl mx-auto mt-5 text-center">
    <h1 class="block font-bold text-xl md:text-[40px] {titleClasses}">
      {title}
    </h1>
  </div>
  <!-- End Title -->

  <div class="max-w-3xl mx-auto mt-5 text-center">
    <p id="content" class="text-white md:text-2xl {contentClasses}">
      {content}
    </p>
  </div>

  <!-- Buttons -->
  {#if link}
    <div class="grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center">
      <ButtonCustom color="white" size="xl" customClasses="w-64" {link}>
        {linkText}
      </ButtonCustom>
    </div>
  {/if}
  <!-- End Buttons -->
</div>
