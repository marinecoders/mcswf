<script>
  import Icon from "@iconify/svelte"
  import RedButton from "../buttons/WhiteButton.svelte"

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
      image: '/images/products_card.png',
      subLinks: [
        { url: '/products/sparta', text: 'SPARTA' },
        { url: '/products/my-career', text: 'MyCareer' },
        { url: '/products/SnapDB', text: 'SnapDB' },
      ],
    },
    {
      text: 'ABOUT',
      image: '/images/about_card.png',
      url: '/about',
      subLinks: [],
    },
    {
      text: 'TRAINING & CAREER',
      image: '/images/training_career_card.png',
      url: '/career',
      subLinks: [
        { url: '/roles', text: 'ROLES' },
        { url: '/roles/job-listings', text: 'JOB LISTINGS' },
        { url: '/roles/the-progress', text: 'THE PROGRESS' },
      ],
    },
    {
      text: 'CONTACT',
      image: '/images/contact_card.png',
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

  //console.log(dropdownLinks)

  function toggleDropdown(dropdown) {
    dropdowns[dropdown] = !dropdowns[dropdown]
  }

  function openDropdown(dropdown) {
    dropdowns[dropdown] = true
    //console.log(dropdowns)
  }

  function closeDropdown(dropdown) {
    dropdowns[dropdown] = false
    //console.log(dropdowns)
  }
</script>

<header class="relative antialiased blue-radial-gradient rounded-b-3xl">
  <nav
    class="w-full h-full bg-gray-800 border-gray-200 w blue-radial-gradient justify-center" class:rounded-b-3xl={!isMenuHidden}
  >
  <div class="flex w-full justify-center">

    <div class="flex flex-wrap items-center justify-between w-full mx-8 lg:w-3/4 h-20">
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
        <div class="hidden lg:block mx-4">
          <RedButton text="GET IN TOUCH"/>
        </div>
        {/if}
        <button
          on:click={toggleMenu}
          id="toggleSidebar"
          aria-expanded="true"
          aria-controls="sidebar"
          class="p-2 mr-3 hidden text-white rounded cursor-pointer lg:inline hover:bg-mcswf-dark-blue hover:text-mcswf-gold hover:text-whit"
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
          class="text-white rounded-lg cursor-pointer lg:hidden hover:bg-mcswf-dark-blue hover:text-mcswf-gold"
        >
        {#if isMenuHidden}
        <Icon class="hover:text-mcswf-gold" icon="mdi:menu" />
        {:else}
        <Icon class="hover:text-mcswf-gold h-5 w-5" icon="mdi:close" />
        {/if}
          <span class="sr-only">Toggle sidebar</span>
        </button>
      </div>
    </div>
  </div>
    {#if !isMenuHidden}
      <!-- STANDARD NAVBAR -->
      <div class="hidden flex w-full text-white lg:flex xl:flex 2xl:flex h-96 justify-center ">
        <div class="flex w-3/4 justify-left">
          {#each dropdownLinks as dropdown}
          <div
            class="mt-4 transition transform hover:text-mcswf-gold hover:scale-110 pr-10"
            on:mouseleave={() => closeDropdown(dropdown.text)}
            on:mouseenter={() => openDropdown(dropdown.text)}
          >
            <a href={dropdown.url}>
              <h2 class="text-xl pb-1 font-bold">{dropdown.text}</h2>
              <img
                class="rounded shadow-lg"
                src={dropdown.image}
                alt={dropdown.text}
              />
            </a>
            <div class={`mt-2 ${dropdowns[dropdown.text] ? 'submenu' : 'hidden'}`}>
              {#each dropdown.subLinks as subLinks}
              <div class="my-1 font-bold text-white hover:text-mcswf-gold hover:underline underline-offset-4 decoration-2">
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
            <h1 class="flex justify-between font-bold hover:text-mcswf-gold" on:click={() => toggleDropdown(dropdown.text)}>
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
              <div class="py-1 font-bold text-white hover:text-mcswf-gold hover:underline decoration-2">
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
