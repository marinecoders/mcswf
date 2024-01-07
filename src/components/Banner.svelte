<script>
    let isVisible = true
    import Icon from '@iconify/svelte'
</script>


{#if isVisible}

<div id="sticky-banner" tabindex="-1" class="h-20 absolute top-0 start-0 z-50 flex justify-between w-full p-4 bg-mcswf-battle-red">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-white">
            <img class="h-20 m-4" src="/images/marine_blues.png"/>
            <span>MARINE-LED SOFTWARE DEVELOPMENT: Lorem ipsum dolor sit amet. Et quae quibusdam <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline text-blue-500 underline-offset-2 decoration-600 decoration-500 decoration-solid hover:no-underline">MCSWF</a></span>
        </p>
    </div>
    <div class="flex items-center">
        <button on:click={() => isVisible = false} data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-white hover:text-mcswf-gold rounded-lg text-sm p-1.5">
            <Icon class="text-2xl" icon="mdi:close"/>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>

{/if}
