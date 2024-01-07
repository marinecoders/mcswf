<script>
  import Icon from "@iconify/svelte"

  let isMenuHidden = true

  function toggleMenu(event) {
    isMenuHidden = !isMenuHidden
    event.stopPropagation()
  }

  let dropdowns = {}

  let dropdownLinks = [
    {
      text: 'PRODUCTS',
      url: 'https://www.example.com/home',
      image: 'http://via.placeholder.com/240x200',
      subLinks: [
        { url: '/products/sparta', text: 'SPARTA' },
        { url: '/products/my-career', text: 'MyCareer' },
        { url: '/products/SnapDB', text: 'SnapDB' },
        { url: '/products/ViaSat', text: 'ViaSat' },
      ],
    },
    {
      text: 'ABOUT',
      image: 'http://via.placeholder.com/240x200',
      url: 'https://www.example.com/about',
      subLinks: [],
    },
    {
      text: 'TRAINING & CAREER',
      image: 'http://via.placeholder.com/240x200',
      url: 'https://www.example.com/services',
      subLinks: [],
    },
    {
      text: 'CONTACT',
      image: 'http://via.placeholder.com/240x200',
      url: 'https://www.example.com/contact',
      subLinks: [],
    },
  ]

  for (const link in dropdownLinks) {
    dropdowns[dropdownLinks[link].text] = false 
  }

  console.log(dropdownLinks)

  function toggleDropdown(dropdown) {
    dropdowns[dropdown] = !dropdowns[dropdown]
  }

  function openDropdown(dropdown) {
    dropdowns[dropdown] = true
    console.log(dropdowns)
  }

  function closeDropdown(dropdown) {
    dropdowns[dropdown] = false
    console.log(dropdowns)
  }
</script>

<header class="antialiased blue-radial-gradient relative">
  <nav
    class="w-full w h-full blue-radial-gradient border-gray-200 bg-gray-800"
  >
    <div class="flex w-3/4 justify-between mx-28 flex-wrap items-center h-20 px-4">
      <div class="flex justify-start items-center">
        <a href="https://flowbite.com" class="flex mr-4">
          <span
            class="self-center text-lg font-colossalis font-semibold whitespace-nowrap text-white"
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
          class="hidden p-2 mr-3 rounded cursor-pointer lg:inline hover:bg-mcswf-dark-blue hover:text-mcswf-gold text-white hover:text-whit"
        >
        <Icon class="hover:text-mcswf-gold" icon="mdi:menu" />
        </button>
        <button
          on:click={toggleMenu}
          aria-expanded="true"
          aria-controls="sidebar"
          class="p-2 mr-2 text-white rounded-lg cursor-pointer lg:hidden hover:bg-mcswf-dark-blue hover:text-mcswf-gold"
        >
          <Icon icon="mdi:ah" />
          <Icon icon="mdi:close-thick"/>
          <span class="sr-only">Toggle sidebar</span>
        </button>
      </div>
    </div>
    {#if !isMenuHidden}
      <hr class=" border-mcswf-pinstripe border-1 w-full" />
      <!-- STANDARD NAVBAR -->
      <div class="hidden lg:block xl:block 2xl:block text-white mx-24 h-96 my-4">
        <div class="flex justify-between">
          {#each dropdownLinks as dropdown}
          <div
            class="hover:text-mcswf-gold hover:scale-110 transform transition mt-4"
            on:mouseleave={() => closeDropdown(dropdown.text)}
            on:mouseenter={() => openDropdown(dropdown.text)}
          >
            <h2 class="font-bold">{dropdown.text}</h2>
            <img
              class="rounded shadow-lg"
              src={dropdown.image}
              alt={dropdown.text}
            />
            <div class={`mt-2 ${dropdowns[dropdown.text] ? 'submenu' : 'hidden'}`}>
              {#each dropdown.subLinks as subLinks}
              <div class="text-white hover:text-mcswf-gold hover:underline decoration-2 my-1">{subLinks.text}</div>
              {/each}
            </div>
          </div>
          {/each}
        </div>
      </div>
      <!-- MOBILE NAVBAR -->
      <div
        class="visible h-screen lg:hidden xl:hidden 2xl:hidden grid grid-cols-1 gap-2"
      >
        <div class="h-1/2 pt-8">
          <div>
            <h1 class="text-center text-xl underline font-bold text-mcswf-gold">
              APPLY NOW
            </h1>
          </div>
          {#each dropdownLinks as dropdown}
          <div class="mx-8 pt-4">
            <h1 class="flex font-bold justify-between hover:text-mcswf-gold">
              <span class="menu-item" on:click={() => toggleDropdown(dropdown.text)}
                >{dropdown.text}</span
              >
              {#if dropdown.subLinks.length > 0}
              <span class="text-right text-xl"
                >{dropdowns[dropdown.text] ? '-' : '+'}</span
              >
              {/if}
            </h1>
            <div class={dropdowns[dropdown.text] ? 'submenu' : 'hidden'}>
              {#each dropdown.subLinks as subLinks}
              <div class="text-white hover:text-mcswf-gold hover:underline decoration-2">
                <a class="ms-4" href={subLinks.url}>{subLinks.text}</a>
              </div>
              {/each}
            </div>
          </div>
          {/each}
        </div>
        <div class="flex">
          <span class="self-end pb-8">TEST</span>
        </div>
      </div>
      <div class="h-1"></div>
    {/if}
  </nav>
</header>
