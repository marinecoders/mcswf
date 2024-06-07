<script>
    import { onMount, onDestroy } from 'svelte';
  
    let days = 41;
    let hours = 14;
    let minutes = 54;
    let seconds = 19;
  
    onMount(() => {
      const countDownDate = new Date('Mar 4, 2024 00:50:25').getTime();
  
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
  
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        if (distance < 0) {
          clearInterval(interval);
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
      }, 1000);
  
      onDestroy(() => {
        clearInterval(interval);
      });
    });
  </script>
  
  <div class="grid w-full grid-cols-1 gap-3 mt-8 md:grid-cols-4 space-x-10 sm:inline-flex sm:justify-center">
    <div class="hidden my-auto bg-red-600 w-60 md:block">
      <hr class="h-[1px] bg-white border-none" />
    </div>
    {#each [days, hours, minutes, seconds] as time, index}
      <div class="items-center text-center" key={index}>
        <div class="mt-2 sm:mt-4">
          <h3 class="text-8xl md:text-6xl font-extrabold font-menobanner">{time}</h3>
          <p class="font-bold text-xl md:text-base text-mcswf-gold">
            {index === 0 ? 'DAYS' : index === 1 ? 'HOURS' : index === 2 ? 'MINUTES' : 'SECONDS'}
          </p>
        </div>
      </div>
    {/each}
    <div class="hidden my-auto w-60 md:block">
      <hr />
    </div>
  </div>