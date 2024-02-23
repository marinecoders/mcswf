<script>
  import Icon from '@iconify/svelte'
  import WhiteButton from './buttons/WhiteButton.svelte'

  let isMenuHidden = true

  function toggleMenu(event) {
    isMenuHidden = !isMenuHidden
    event.stopPropagation()
  }

  let dropdowns = {}

  let dropdownLinks = [
    {
      text: 'PRODUCTS',
      url: '/products',
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
      url: '/about',
      subLinks: [],
    },
    {
      text: 'TRAINING & CAREER',
      image: 'http://via.placeholder.com/240x200',
      url: '/career',
      subLinks: [
        { url: '/roles', text: 'ROLES' },
        { url: '/roles/job-listings', text: 'JOB LISTINGS' },
        { url: '/roles/the-progress', text: 'THE PROGRESS' },
      ],
    },
    {
      text: 'CONTACT',
      image: 'http://via.placeholder.com/240x200',
      url: 'https://www.example.com/contact',
      subLinks: [
        { url: '/contact/request-a-demo', text: 'REQUEST A DEMO' },
        { url: '/contact/request-a-demo', text: 'SUGGEST AN APP' },
      ],
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

<header class="relative antialiased blue-radial-gradient">
  <nav
    class="w-full h-full bg-gray-800 border-gray-200 w blue-radial-gradient justify-center"
  >
    <div class="flex w-full justify-center">
      <div class="flex flex-wrap items-center justify-between w-3/4 h-20 px-4">
        <div class="flex items-center justify-start">
          <a href="/" class="flex mr-4">
            <span
              class="self-center text-lg font-semibold text-white font-colossalis whitespace-nowrap"
              >U.S. MARINE CORPS<br />SOFTWARE FACTORY</span
            >
          </a>
        </div>
        <div class="flex items-center lg:order-2">
          {#if !isMenuHidden}
            <div class="mx-4">
              <WhiteButton text="GET IN TOUCH" />
            </div>
          {/if}
          <button
            on:click={toggleMenu}
            id="toggleSidebar"
            aria-expanded="true"
            aria-controls="sidebar"
            class="hidden p-2 mr-3 text-white rounded cursor-pointer lg:inline hover:bg-mcswf-dark-blue hover:text-mcswf-gold hover:text-whit"
          >
            {#if isMenuHidden}
              <Icon class="hover:text-mcswf-gold" icon="mdi:menu" />
            {:else}
              <Icon class="hover:text-mcswf-gold" icon="mdi:close" />
            {/if}
          </button>
          <button
            on:click={toggleMenu}
            aria-expanded="true"
            aria-controls="sidebar"
            class="p-2 mr-2 text-white rounded-lg cursor-pointer lg:hidden hover:bg-mcswf-dark-blue hover:text-mcswf-gold"
          >
            {#if isMenuHidden}
              <Icon class="hover:text-mcswf-gold" icon="mdi:menu" />
            {:else}
              <Icon class="hover:text-mcswf-gold" icon="mdi:close" />
            {/if}
            <span class="sr-only">Toggle sidebar</span>
          </button>
        </div>
      </div>
    </div>
    {#if !isMenuHidden}
      <hr class="w-full border-mcswf-pinstripe border-1" />
      <!-- STANDARD NAVBAR -->
      <div
        class="hidden mx-24 my-4 text-white lg:block xl:block 2xl:block h-96"
      >
        <div class="flex justify-between">
          {#each dropdownLinks as dropdown}
            <div
              class="mt-4 transition transform hover:text-mcswf-gold hover:scale-110"
              on:mouseleave={() => closeDropdown(dropdown.text)}
              on:mouseenter={() => openDropdown(dropdown.text)}
            >
              <a href={dropdown.url}>
                <h2 class="font-bold">{dropdown.text}</h2>
                <img
                  class="rounded shadow-lg"
                  src={dropdown.image}
                  alt={dropdown.text}
                />
              </a>
              <div
                class={`mt-2 ${
                  dropdowns[dropdown.text] ? 'submenu' : 'hidden'
                }`}
              >
                {#each dropdown.subLinks as subLinks}
                  <div
                    class="my-1 font-bold text-white hover:text-mcswf-gold hover:underline decoration-2"
                  >
                    <a href={subLinks.url}>{subLinks.text}</a>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
      <!-- MOBILE NAVBAR -->
      <div
        class="grid visible h-screen grid-cols-1 gap-2 lg:hidden xl:hidden 2xl:hidden"
      >
        <div class="pt-8 h-1/2">
          <div>
            <h1 class="text-xl font-bold text-center underline text-mcswf-gold">
              APPLY NOW
            </h1>
          </div>
          {#each dropdownLinks as dropdown}
            <div class="pt-4 mx-8">
              <h1
                class="flex justify-between font-bold hover:text-mcswf-gold"
                on:click={() => toggleDropdown(dropdown.text)}
              >
                <span class="menu-item"
                  ><a href={dropdown.url}>{dropdown.text}</a></span
                >
                {#if dropdown.subLinks.length > 0}
                  <span class="text-xl text-right"
                    >{dropdowns[dropdown.text] ? '-' : '+'}</span
                  >
                {/if}
              </h1>
              <div class={dropdowns[dropdown.text] ? 'submenu' : 'hidden'}>
                {#each dropdown.subLinks as subLinks}
                  <div
                    class="font-bold text-white hover:text-mcswf-gold hover:underline decoration-2"
                  >
                    <a class="ms-4" href={subLinks.url}>{subLinks.text}</a>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div class="h-1"></div>
    {/if}
  </nav>
</header>
