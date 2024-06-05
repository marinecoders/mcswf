<script>
  export let open = false
  import { slide } from 'svelte/transition'
  import Icon from '@iconify/svelte'
  const handleClick = () => (open = !open)

  export let isMiddle = false
  export let isStart = false
  export let isEnd = false
  export let head
  export let step
  export let details
  export let detailsTitle
</script>

<div class="accordion w-full bg-mcswf-pinstripe border-mcswf-gold" class:rounded-t-lg={isStart} class:rounded-b-lg={isEnd} class:border-t-2={isMiddle | isEnd} >
  <button class="header w-full text-lg py-4 px-2" on:click={handleClick}>
    <div class="w-full bg-mcswf-pinstripe flex flex-row" >
      <div class="text-white text-left text-2xl font-menobanner font-semibold shrink">
        STEP {step}
      </div>
      <div class=" text-mcswf-gold text-left font-semibold grow pl-8">
        {head}
      </div>
      <div class="text-mcswf-gold flex font-bold justify-end shrink">
          {#if open}
          <Icon icon="mdi:close" />
          {:else}
          <Icon icon="mdi:chevron-down" />
          {/if}
      </div>
      </div>
  </button>

  {#if open}
    <div class="details bg-white text-black text-left p-4" class:rounded-b-lg={isEnd} transition:slide>
      <p class="font-semibold">{detailsTitle} </p>
      <p>{@html details}</p>
    </div>
  {/if}
</div>
