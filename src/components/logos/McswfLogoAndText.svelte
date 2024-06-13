<script>
  export let displayImage = false;
</script>

<a
  href="/"
  class="flex items-center">
  {#if displayImage}
    <img
      style="fill: white;"
      src="/mcswf-badge.svg"
      class="h-16 text-white mr-4"
      alt="MCSWF Logo" />
  {/if}
  <span
    class="tracking-widest leading-normal sm:leading-snug text-[15px] sm:text-[21px] text-white font-colossalis whitespace-nowrap bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text"
    >U.S. MARINE CORPS<br />SOFTWARE FACTORY</span>
</a>
