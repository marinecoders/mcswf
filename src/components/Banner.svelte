<script>
    let isVisible = true
  
</script>


{#if isVisible}

<div id="sticky-banner" tabindex="-1" class="h-20 absolute top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 bg-gray-700 border-gray-600">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-gray-500 text-gray-400">
            <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
                </svg>
                <span class="sr-only">Light bulb</span>
            </span>
            <span>Marine-led software development: Lorem ipsum dolor sit amet. Et quae quibusdam <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline text-blue-500 underline-offset-2 decoration-600 decoration-500 decoration-solid hover:no-underline">MCSWF</a></span>
        </p>
    </div>
    <div class="flex items-center">
        <button on:click={() => isVisible = false} data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>

{/if}
