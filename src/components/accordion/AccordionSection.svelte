<script>
    import RedButton from '../buttons/RedButton.svelte';
    import { mobile, active } from './stores.js';
    export let title;
    export let sequence;
    export let text;
    export let href;

    let mobileValue;
    mobile.subscribe((value) => {mobileValue = value;});

    let activeValue;
    active.subscribe((value) => {activeValue = value;});
</script>

{#if activeValue==sequence}

<div class="h-fit sm:h-full grid grid-cols-1">
    <div class="grid grid-cols-5 p-4 content-center items-center">
        <div class="col-span-1 text-5xl md:text-[32px] me-6 text-center font-menobanner text-mcswf-gold py pt-2"> 0{sequence}</div>
        <div class="col-span-3 sm:text-left pt-2 tracking-widest font-bold block text-2xl md:text-4xl"> {title} </div>
        {#if mobileValue}
            <div class="col-span-1 text-3xl text-center font-menobanner text-mcswf-gold"> - </div>
        {:else}
            <div class="col-span-1 grid grid-cols-2 items-center justify-self-end "><div class = "text-xl align-text-bottom font-menobanner text-mcswf-gold mr-2"> CLOSE </div> <img src="/icons/window-close.svg" alt='close'></div>
        {/if}
    </div>
    <div class="text-base md:text-[21px] px-4 pb-6">
        {text}
    </div>
    <div class="col-span-1 flex h-fit py-8 px-4 {mobileValue ? 'justify-center' : 'justify-left'} ">
        <div>
        <RedButton text="LEARN MORE" href={href} />
        </div>
    </div>
    {#if !mobileValue}
        <div class="grid grid-cols-1 self-end p-4">
            <div class="col-span-1 text-3xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10"> - </div>
        </div>
    {/if}
</div>
{:else}
    <div class="grid grid-cols-5 items-center justify-start  p-4 sm:p-8 sm:grid-cols-2 text-white align-bottom bg-black border-y sm:h-full sm:items-end sm:border-y-0">
        <p class="text-[64px] text-left font-menobanner me-6 text-mcswf-gold">0{sequence}</p>
        {#if mobileValue}
            <div class="tracking-widest text-left text-2xl font-bold col-span-3">{title}</div>
            <div class="text-xl font-bold text-center">+</div>
        {:else}
        <p class="text-2xl font-bold mb-16 -rotate-90 text-start whitespace-nowrap">
        + {title} </p>
        {/if}
    </div>
{/if}
