<script>
  import Icon from '@iconify/svelte'
</script>

<footer class="pb-20 bg-black blue-radial-gradient">
  <div class="container w-3/5 max-w-screen-xl pb-32 mx-auto lg:py-8">
    <div class="flex justify-around p-4 border-b">
      <div class="flex w-2/5 align-middle">
        <a
          href="/"
          class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
        >
          <img
            style="fill: white;"
            src="/mcswf-badge.svg"
            class="h-16 text-white"
            alt="MCSWF Logo"
          />
          <span
            class="self-center text-2xl whitespace-nowrap dark:text-white font-colossalis"
            >U.S. MARINE CORPS<br />SOFTWARE FACTORY</span
          >
        </a>
      </div>
      <div class="w-3/5">
        <h1 class="text-lg font-bold">VISION</h1>
        <p>
          Create a world class Marine-led software development capability
          enabling Marine Corps modernization efforts by developing applications
          for commanders at the speed of operations, increasing lethality and
          readiness.
        </p>
      </div>
    </div>
    <div class="flex justify-around p-4 align-middle border-b">
      <div class="w-2/5">
        <a
          href="/"
          class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
        >
          <img
            style="fill: white;"
            src="/ega-full.svg"
            class="h-12 text-white"
            alt="MCSWF Logo"
          />
        </a>
      </div>
      <div class="w-3/5">
        <p>
          Product of The Marine Corps Software Factory, which proudly sits
          within the <span class="underline text-mcswf-gold">Deputy Commandant for Information.</span>
        </p>
      </div>
    </div>
    <div class="flex justify-around p-4 border-b">
      <div class="w-2/5">
        <h1 class="mb-2">GET IN TOUCH</h1>
        <!-- Social Icons -->
        <div class="flex justify-start mb-4">
          <a href="https://linkedin.com" class="mr-4">
            <Icon class="text-4xl " icon="mdi:linkedin" />
          </a>
          <a href="https://example.com">
            <Icon class="text-4xl " icon="akar-icons:x-fill" />
          </a>
        </div>
      </div>
      <div class="w-3/5 align-middle">
        <p>Interested in partnering with the Marine Corps Software Factory?</p>
        <p >Email us at <a href="mailto:mcswf@usmc.mil" class="underline text-mcswf-gold">mcswf@usmc.mil</a></p>
      </div>
    </div>
    <div class="flex justify-center pt-4 text-sm font-light">
      Proudly developed at Marine Innovation Unit
    </div>
</footer>
