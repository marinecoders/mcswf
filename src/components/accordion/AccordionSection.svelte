<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte'
  import { mobile, active } from './stores.js'
  export let title
  export let sequence
  export let text
  export let href

  let mobileValue
  mobile.subscribe((value) => {
    mobileValue = value
  })

  let activeValue
  active.subscribe((value) => {
    activeValue = value
  })
</script>

{#if activeValue == sequence}
  <div class="h-fit lg:h-full grid grid-cols-1">
    <div class="grid grid-cols-5 p-4 content-center items-end">
      {#if !mobileValue}
        <div class="col-span-5 grid grid-cols-2 items-center justify-self-end">
          <div
            class="text-xl align-text-bottom font-menobanner text-mcswf-gold mr-2">
            CLOSE
          </div>
          <img src="/icons/window-close.svg" alt="close" />
        </div>
      {/if}
      <div class="col-span-4 flex items-end">
        <div
          class="text-5xl lg:text-[32px] me-4 text-center font-menobanner text-mcswf-gold py pt-2">
          0{sequence}
        </div>
        <div
          class="lg:text-left pt-2 tracking-widest font-bold block text-2xl lg:text-4xl">
          {title}
        </div>
      </div>
      {#if mobileValue}
        <div
          class="col-span-1 text-3xl text-center font-menobanner text-mcswf-gold">
          -
        </div>
      {/if}
    </div>
    <div class="text-base lg:text-[21px] px-4 pb-6 px-8">
      {text}
    </div>
    <div
      class="col-span-1 flex h-fit py-8 px-6 {mobileValue
        ? 'justify-center'
        : 'justify-left'} ">
      <div>
        <ButtonCustom
          color="white"
          size="lg"
          customClasses="w-64 lg:w-52"
          {href}
          >LEARN MORE
        </ButtonCustom>
      </div>
    </div>
    {#if !mobileValue}
      <div class="grid grid-cols-1 self-end p-4">
        <div
          class="col-span-1 text-3xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10">
          -
        </div>
      </div>
    {/if}
  </div>
{:else}
  <div
    class="grid grid-cols-5 items-center justify-start p-4 lg:p-8 lg:grid-cols-2 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-y-0">
    <p class="text-[64px] text-left font-menobanner me-6 text-mcswf-gold">
      0{sequence}
    </p>
    {#if mobileValue}
      <div class="tracking-widest text-left text-2xl font-bold col-span-3">
        {title}
      </div>
      <div class="text-xl font-bold text-center">+</div>
    {:else}
      <p
        class="text-2xl font-bold mb-16 -rotate-90 text-start whitespace-nowrap">
        + {title}
      </p>
    {/if}
  </div>
{/if}
