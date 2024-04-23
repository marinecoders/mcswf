<script>
  export let open = false
  import { slide } from 'svelte/transition'
  import Icon from '@iconify/svelte'
  const handleClick = () => (open = !open)

  export let isMiddle = false
  export let isStart = false
  export let isEnd = false
</script>

<div class="accordion w-full bg-mcswf-pinstripe border-mcswf-gold" class:rounded-t-lg={isStart} class:rounded-b-lg={isEnd} class:border-t-2={isMiddle | isEnd} >
  <div class="header w-full text-lg py-4 px-2" >
    <div class=" bg-mcswf-pinstripe grid grid-cols-3">
      <div class="text-white text-left font-menobanner font-semibold">
        <slot name="step" />
      </div>
      <div class=" text-mcswf-gold text-left font-semibold">
        <slot name="head" />
      </div>
      <div class="text-mcswf-gold flex font-bold justify-end ">
        <button on:click={handleClick}> 
          {#if open}
          <Icon icon="mdi:close" />
          {:else}
          <Icon icon="mdi:chevron-down" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if open}
    <div class="details bg-white text-black text-left p-4" class:rounded-b-lg={isEnd} transition:slide>
      <p class="font-semibold"><slot name="detailsTitle" /></p>
      <p><slot name="details" /></p>
    </div>
  {/if}
</div>
