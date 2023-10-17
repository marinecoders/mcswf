<script>
  import LightButton from './buttons/LightButton.svelte'
  import Icon from '@iconify/svelte';

  let isMenuHidden = true;

  function toggleMenu() {
    isMenuHidden = !isMenuHidden;
  }
</script>
<nav
  class="top-0 flex items-center justify-between h-20 px-12 py-4 shadow-md bg-slate-300 dark:bg-slate-900 md:px-24"
>
  <a class="text-3xl font-bold leading-none" href="/">MCSWF</a>
  <div class="lg:hidden" on:click={toggleMenu}>
    <button class="flex items-center p-3 navbar-burger">
      <Icon class="text-2xl" icon="mdi:menu"/>
    </button>
  </div>
  <ul
    class="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
  >
    <li>
      <a href="/about">
          <div class="relative inline-block dropdown">
            <button class="inline-flex items-center justify-center gap-2 px-4 py-4 mb-2 text-sm font-semibold transition-all border border-transparent rounded-md hover:outline hover:outline-red-800 focused:outline-red-800 hover:dark:outliune-red-500 text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:focus:ring-offset-slate-800">
              <span class="mr-1">ABOUT</span>
              <Icon class="text-xl" icon="mdi:chevron-down" />
            </button>
            <ul class="absolute hidden text-gray-700 rounded w-80 dropdown-menu outline outline-slate-900">
              <li class=""><a class="block px-4 py-2 whitespace-no-wrap rounded-t bg-slate-200 hover:bg-white hover:outline hover:outline-red-800" href="#">ONE</a></li>
              <li class=""><a class="block px-4 py-2 whitespace-no-wrap bg-slate-200 hover:bg-gray-400 hover:outline hover:outline-red-800" href="#">TWO</a></li>
              <li class=""><a class="block px-4 py-2 whitespace-no-wrap rounded-b bg-slate-200 hover:bg-gray-400 hover:outline hover:outline-red-800" href="#">THREE</a></li>
            </ul>
          </div>
      </a>
    </li>
    <li>
      <a href="/products">
        <LightButton text="PRODUCTS" />
      </a>
    </li>
    <li>
      <a href="/roles">
        <LightButton text="TRAINING & CAREER" />
      </a>
    </li>
    <li>
      <a href="/contact">
        <LightButton text="CONTACT" />
      </a>
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
  <div class="fixed inset-0 bg-gray-800 opacity-0 navbar-backdrop"></div>
  <nav
    class="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto border-r-2 border-black dark:border-white bg-slate-300 dark:bg-slate-900"
  >
    <div class="flex items-center mb-8">
      <a class="mr-auto text-3xl font-bold leading-none" href="#">MCSWF</a>
      <button class="navbar-close" on:click={toggleMenu}>

        <Icon class="text-2xl" icon="mdi:window-close"/>
      </button>
    </div>
    <div>
      <ul>
        <li class="mb-1">
          <a
            class="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-blue-50 hover:text-red-600"
            href="#">PRODUCTS</a
          >
        </li>
        <li class="mb-1">
          <a
            class="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-blue-50 hover:text-red-600"
            href="/about">ABOUT</a
          >
        </li>
        <li class="mb-1">
          <a
            class="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-blue-50 hover:text-red-600"
            href="/roles">TRAINING & CAREER</a
          >
        </li>
        <li class="mb-1">
          <a
            class="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-blue-50 hover:text-red-600"
            href="/contact">CONTACT</a
          >
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
