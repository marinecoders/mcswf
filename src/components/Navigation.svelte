<script>
  let isMenuHidden = true

  function toggleMenu(event) {
    isMenuHidden = !isMenuHidden
    event.stopPropagation()
  }

  function onClickOutside(element) {
    function onClick(event) {
      if (!element.contains(event.target)) {
        isMenuHidden = true
      }
    }

    document.body.addEventListener('click', onClick)

    return {
      destroy() {
        document.body.removeEventListener('click', onClick)
      },
    }
  }

  let dropdowns = {
    products: false,
    about: false,
    trainingAndCareer: false,
    contact: false,
  }

  function toggleDropdown(dropdown) {
    dropdowns[dropdown] = !dropdowns[dropdown]
  }
</script>

<header class="antialiased blue-radial-gradient h-20">
  <nav
    class="bg-white blue-radial-gradient border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
  >
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">
        <a href="https://flowbite.com" class="flex mr-4">
          <span
            class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >U.S. MARINE CORPS<br />SOFTWARE FACTORY</span
          >
        </a>
      </div>
      <div class="flex items-center lg:order-2">
        <button
          on:click={toggleMenu}
          id="toggleSidebar"
          aria-expanded="true"
          aria-controls="sidebar"
          class="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h14M1 6h14M1 11h7"
            />
          </svg>
        </button>
        <button
          on:click={toggleMenu}
          aria-expanded="true"
          aria-controls="sidebar"
          class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-[18px] h-[18px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            ><path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            /></svg
          >
          <span class="sr-only">Toggle sidebar</span>
        </button>
      </div>
    </div>
    {#if !isMenuHidden}
      <hr class=" h-px my-4 border-0" />
      <div class="hidden lg:block xl:block 2xl:block text-white p-4 mx-24">
        <div class="flex justify-between">
          <div class="p-2 hover:text-mcswf-gold">
            <!-- Products Section -->
            <h2 class="font-bold">PRODUCTS</h2>
            <img
              class="rounded"
              src="http://via.placeholder.com/240x200"
              alt="Products"
            />
          </div>
          <div class="p-2 hover:text-mcswf-gold">
            <!-- About Section -->
            <h2 class="font-bold">ABOUT</h2>
            <img
              class="rounded"
              src="http://via.placeholder.com/240x200"
              alt="About"
            />
          </div>
          <div class="p-2 hover:text-mcswf-gold">
            <!-- Training & Career Section -->
            <h2 class="font-bold">TRAINING & CAREER</h2>
            <img
              class="rounded"
              src="http://via.placeholder.com/240x200"
              alt="Training & Career"
            />
          </div>
          <div class="p-2 hover:text-mcswf-gold">
            <!-- Contact Section -->
            <h2 class="font-bold">CONTACT</h2>
            <img
              class="rounded"
              src="http://via.placeholder.com/240x200"
              alt="Contact"
            />
          </div>
        </div>
      </div>


      <div class="visible lg:hidden xl:hidden 2xl:hidden grid grid-cols-1 gap-2">
        <div>
          <h1 class="text-center underline font-bold text-mcswf-gold">APPLY NOW</h1>
        </div>
        <div>
          <h1 class="flex font-bold justify-between hover:text-mcswf-gold">
            <span class="menu-item" on:click={() => toggleDropdown('products')}
              >PRODUCTS</span
            >
            <span class="text-right text-xl">{dropdowns.products ? '-' : '+'}</span>
          </h1>

          <div class={dropdowns.products ? 'submenu' : 'hidden'}>
            <div class="submenu-item">SPARTA</div>
            <div class="submenu-item">MyCAREER</div>
            <div class="submenu-item">Snap DB</div>
            <div class="submenu-item">ViaSat</div>
          </div>
        </div>

        <div>
          <h1 class="flex font-bold justify-between hover:text-mcswf-gold">
            <span class="menu-item" on:click={() => toggleDropdown('about')}
              >ABOUT</span
            >
          </h1>
        </div>

        <div>
          <h1 class="flex font-bold justify-between hover:text-mcswf-gold">
            <span class="menu-item" on:click={() => toggleDropdown('trainingAndCareer')}
              >TRAINING AND CAREER</span
            >
            <span class="text-right text-xl">{dropdowns.trainingAndCareer ? '-' : '+'}</span>
          </h1>

          <div class={dropdowns.trainingAndCareer ? 'submenu' : 'hidden'}>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
          </div>
        </div>

        <div>
          <h1 class="flex font-bold justify-between hover:text-mcswf-gold">
            <span class="menu-item" on:click={() => toggleDropdown('contact')}
              >CONTACT</span
            >
            <span class="text-right text-xl">{dropdowns.contact ? '-' : '+'}</span>
          </h1>

          <div class={dropdowns.contact ? 'submenu' : 'hidden'}>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
            <div class="submenu-item">Lorem Ipsum</div>
          </div>
        </div>
      </div>
      <div class="pb-4"></div>
    {/if}
  </nav>
</header>


<style>
  .submenu-item {
    padding-left: 1em;
  }

  .submenu-item:hover {
    color: rgb(233 202 134)
  }
</style>