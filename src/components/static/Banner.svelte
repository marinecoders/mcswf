<script>
    let isVisible = true
    import Icon from '@iconify/svelte'
    import YellowButton from '../buttons/YellowButton.svelte'
</script>


{#if isVisible}

<div id="sticky-banner" tabindex="-1" class="absolute top-0 z-50 flex justify-between w-full h-20 p-4 start-0 bg-mcswf-battle-red">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-white font-expressway">
            <img class="hidden md:inline h-20 m-4" src="/images/marine_blues.png"/>
            <span><b>MARINE-LED SOFTWARE DEVELOPMENT:</b> Lorem ipsum dolor sit amet. Et quae quibusdam </span>
        </p>
        <div class="ml-8"><YellowButton text="Apply Now" href='application'/></div>
    </div>

    <div class="flex items-center">
        <button on:click={() => isVisible = false} data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-white hover:text-mcswf-gold rounded-lg text-sm p-1.5">
            <Icon class="text-2xl" icon="mdi:close"/>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>

{/if}
