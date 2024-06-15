<script>
  import { readable } from 'svelte/store';
  import { timerCountdown } from '@content/externalLinks.js';

  let days = 41;
  let hours = 14;
  let minutes = 54;
  let seconds = 19;

  const countDownDate = new Date(timerCountdown.formatedDate).getTime();

  const timer = readable(0, (set) => {
    const interval = setInterval(() => {
      set(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  });

  $: {
    const now = $timer;
    const distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  }
</script>

<div class="grid w-full grid-cols-1 gap-3 mt-8 lg:grid-cols-4 lg:inline-flex sm:justify-between">
  <div class="invisible my-auto w-42 lg:w-60 lg:visible">
    <hr class="h-1 bg-[#62040A] border-none" />
  </div>
  {#each [days, hours, minutes, seconds] as time, index}
    <div
      class="items-center text-center"
      key={index}>
      <div class="mt-8 sm:mt-4 m-auto md:w-36">
        <h3 class="text-[100px] font-extrabold font-menobanner">{time}</h3>
        <p class="font-semibold text-2xl md:text-[18px] text-mcswf-gold">
          {index === 0 ? 'DAYS' : index === 1 ? 'HOURS' : index === 2 ? 'MINUTES' : 'SECONDS'}
        </p>
      </div>
    </div>
  {/each}
  <div class="invisible lg:visible my-auto w-42 lg:w-60">
    <hr class="h-1 bg-[#62040A] border-none" />
  </div>
</div>
