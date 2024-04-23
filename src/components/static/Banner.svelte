<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte'
  import Icon from '@iconify/svelte'

  let isVisible = true
</script>

{#if isVisible}
  <div
    id="banner"
    class="font-expressway grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-6 w-full bg-custom-gradient-banner md:h-20 place-content-stretch place-items-stretch py-4 px-8 md:py-0 md:px-6"
  >
    <div
      class="hidden md:block lg:col-start-2 col-span-1 overflow-hidden justify-self-end place-self-stretch w-full"
    >
      <img
        class="object-cover md:scale-200 md:-translate-y-6 xl:scale-150 xl:-translate-y-8"
        alt="Marines in Dress Blue Uniform"
        src="/images/marine_blues_banner.png"
      />
    </div>
    <h3
      class="col-span-2 lg:col-span-3 xl:col-span-4 place-self-center text-center"
    >
      <span class="font-bold">MARINE-LED SOFTWARE DEVELOPMENT:</span>
      <span class="hidden md:inline"
        >Lorem ipsum dolor sit amet. Et quae quibusdam</span
      >
    </h3>
    <div class="col-span-1 place-self-center md:w-full">
      <ButtonCustom
        color="yellow"
        size="md"
        href="application"
        customClasses="md:w-full">Apply Now</ButtonCustom
      >
    </div>

    <!-- If you want to add a close button to the banner, you can add the following code: -->
    <!-- <div class="flex items-center">
      <button
        on:click={() => (isVisible = false)}
        type="button"
        class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-white hover:text-mcswf-gold rounded-lg text-sm p-1.5"
      >
        <Icon class="text-2xl" icon="mdi:close" />
        <span class="sr-only">Close banner</span>
      </button>
    </div> -->
  </div>
{/if}
