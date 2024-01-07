<script>
  import Icon from '@iconify/svelte'
</script>

<footer class="blue-radial-gradient bg-black pb-32">
  <div class="container mx-auto w-3/5 max-w-screen-xl pb-32 lg:py-8">
    <div class="flex justify-around border-b p-4">
      <div class="w-2/5 flex align-middle">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img style="fill: white;" src="/mcswf-badge.svg" class="text-white h-16" alt="Flowbite Logo" />
            <span class="self-center text-2xl whitespace-nowrap dark:text-white font-colossalis">U.S. MARINE CORPS<br>SOFTWARE FACTORY</span>
        </a>
    </div>
      <div class="w-3/5">
        <h1 class="font-bold text-lg">VISION</h1>
        <p>
          Create a world class Marine-led software development capability
          enabling Marine Corps modernization efforts by developing applications
          for commanders at the speed of operations, increasing lethality and
          readiness.
        </p>
      </div>
    </div>
    <div class="flex justify-around border-b p-4">
      <div class="w-2/5">01</div>
      <div class="w-3/5">
        <p>
          Product of The Marine Corps Software Factory, which proudly sits
          within the Deputy Commandant for Information.
        </p>
      </div>
    </div>
    <div class="flex justify-around border-b p-4">
      <div class="w-2/5">
        <h1 class="mb-2">GET IN TOUCH</h1>
        <!-- Social Icons -->
        <div class="flex justify-start mb-4">
          <a href="https://linkedin.com" class="mr-4">
            <Icon class=" text-4xl" icon="mdi:linkedin" />
          </a>
          <a href="https://example.com">
            <Icon class=" text-4xl" icon="akar-icons:x-fill" />
          </a>
        </div>
      </div>
      <div class="w-3/5 align-middle">
        <p>Interested in partnering with the Marine Corps Software Factory?</p>
        <p>Email us at mcswf@usmc.mil</p>
      </div>
    </div>
  </div>
</footer>
