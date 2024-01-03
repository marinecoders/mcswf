<script>
  import Icon from '@iconify/svelte'
</script>

<footer class="blue-radial-gradient dark:bg-black">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="https://flowbite.com/" class="flex items-center">
          <i class=" w-16 h-16 mcswf-icon me-8"></i>
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >U.S. MARINE CORPS <br />SOFTWARE FACTORY
          </span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Resources
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="https://flowbite.com/" class="hover:underline"
                >Flowbite</a
              >
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline"
                >Tailwind CSS</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Legal
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="my-6 dark:text-gray-400">
      Product of The Marine Corps Software Factory. Which proudly sits within <span
        class="underline text-mcswf-gold">Deputy Commandant of Information</span
      >.
    </p>
    <hr
      class="my-6 border-gray-200 sm:mx-auto dark:border-mcswf-gold lg:my-8"
    />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >Interested in partnering with the Marine Corps Software Factory? Email
        us at <a
          href="mailto:mcswf@usmc.mil"
          class="hover:underline text-mcswf-gold">mcswf@usmc.mil</a
        >.
      </span>
      <div class="flex mt-4 sm:justify-center sm:mt-0">
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
        <Icon class=" text-xl" icon="mdi:linkedin" />
          <span class="sr-only">Linkedin page</span>
        </a>
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <Icon class=" text-xl" icon="mdi:twitter" />
          <span class="sr-only">GitHub account</span>
        </a>
        <a
        href="#"
        class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <Icon class=" text-xl" icon="mdi:github" />
        <span class="sr-only">GitHub account</span>
      </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .mcswf-icon {
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-image: url(/public/mcswf-logo.svg);
    mask-image: url(/public/mcswf-logo.svg);
    background-color: white;
  }
</style>
