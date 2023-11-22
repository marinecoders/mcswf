<script>
  import LightButton from './buttons/LightButton.svelte'
  import Icon from '@iconify/svelte'
  import VerticalDropdown from '../components/dropdown/Vertical.svelte'
  import HorizontalDropdown from '../components/dropdown/Horizontal.svelte'

  let isMenuHidden = true

  function toggleMenu(event) {
    isMenuHidden = !isMenuHidden
    event.stopPropagation()
  }

	function onClickOutside(element) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				isMenuHidden = true;
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}

</script>

<nav
  class="top-0 flex items-center justify-between h-20 px-12 py-4 shadow-md bg-slate-300 dark:bg-slate-900 md:px-24"
>
  <a class="text-3xl font-bold leading-none" href="/">MCSWF</a>
  <div class="lg:hidden" on:click={toggleMenu}>
    <button class="flex items-center p-3 navbar-burger">
      <Icon class="text-2xl" icon="mdi:menu" />
    </button>
  </div>
  <ul
    class="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
  >
    <li>
      <LightButton text="ABOUT" href="/about" />
    </li>
    <li>
      <VerticalDropdown
        title="PRODUCTS"
        href="/products"
        dropdown={[
          { href: '/products/sparta', text: 'SPARTA' },
          { href: '/products/my-career', text: 'MyCareer' },
          { href: '/products/SnapDB', text: 'SnapDB' },
          { href: '/products/ViaSat', text: 'ViaSat' },
        ]}
      />
    </li>
    <li>
      <VerticalDropdown
        title="TRAINING & CAREER"
        href="/training"
        dropdown={[
          { href: '/roles', text: 'ROLES' },
          { href: '/jobs', text: 'JOB LISTINGS' },
          { href: '/process', text: 'THE PROCESS' },
        ]}
      />
    </li>
    <li>
      <VerticalDropdown
        title="CONTACT"
        href="/contact"
        dropdown={[
          { href: '/requestdemo', text: 'REQUEST A DEMO' },
          { href: '/suggest', text: 'SUGGEST AN APP' },
        ]}
      />
    </li>
  </ul>
  <a
    class="hidden px-6 transition duration-200 lg:inline-block rounded-xl"
    href="#"
  >
    <button
      type="button"
      class="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-red-800 border border-transparent rounded-md hover:ring-2 ring-red-800 hover:bg-red-950 hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-300 focus:ring-offset-2 dark:bg-slate-700 dark:hover:bg-slate-950 dark:text-white"
    >
      GET IN TOUCH
    </button></a
  >
</nav>

{#if !isMenuHidden}
  <div class="relative z-50 navbar-menu">
    <div class="fixed inset-0 bg-gray-800 opacity-0 navbar-backdrop" />
    <nav
      class="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto border-r-2 border-black dark:border-white bg-slate-300 dark:bg-slate-900"
      use:onClickOutside
    >
      <div class="flex items-center mb-8">
        <a class="mr-auto text-3xl font-bold leading-none" href="/">MCSWF</a>
        <button class="navbar-close" on:click={toggleMenu}>
          <Icon class="text-2xl" icon="mdi:window-close" />
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1">
            <a
              class="block p-4 text-sm font-semibold text-slate-600 rounded hover:bg-blue-50 hover:text-red-600"
              href="/about">ABOUT</a
            >
          </li>
          <li class="mb-1">
            <HorizontalDropdown
              title="PRODUCTS"
              href="/products"
              dropdown={[
                { href: '/products/sparta', text: 'SPARTA' },
                { href: '/products/my-career', text: 'MyCareer' },
                { href: '/products/SnapDB', text: 'SnapDB' },
                { href: '/products/ViaSat', text: 'ViaSat' },
              ]}
            />
          </li>
          <li class="mb-1">
            <HorizontalDropdown
              title="TRAINING & CAREER"
              href="/training"
              dropdown={[
                { href: '/roles', text: 'ROLES' },
                { href: '/jobs', text: 'JOB LISTINGS' },
                { href: '/process', text: 'THE PROCESS' },
              ]}
            />
          </li>
          <li class="mb-1">
            <HorizontalDropdown
              title="CONTACT"
              href="/contact"
              dropdown={[
                { href: '/requestdemo', text: 'REQUEST A DEMO' },
                { href: '/suggest', text: 'SUGGEST AN APP' },
              ]}
            />
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6">
          <a
            class="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white transition-all bg-red-800 border border-transparent rounded-md hover:ring-2 ring-red-800 hover:bg-red-950 hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-300 focus:ring-offset-2 dark:bg-slate-700 dark:hover:bg-slate-950 dark:text-white"
            href="#"
          >
            <button>GET IN TOUCH</button>
          </a>
        </div>
        <p class="my-4 text-xs text-center text-gray-400">
          <span>UNITED STATES MARINE CORPS</span>
        </p>
      </div>
    </nav>
  </div>
{/if}

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
