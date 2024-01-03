<script>
  import Icon from '@iconify/svelte'
  import LightButton from '../buttons/LightButton.svelte'
  export let dropdown
  export let title
  export let href
</script>

<div>
  <div class="relative inline-block dropdown">
    <LightButton icon="mdi:chevron-down" text={title} {href} />
    <ul
      class="absolute pt-2 hidden text-gray-700 rounded w-80 dropdown-menu"
    >
      {#each dropdown as item}
        <li>
          <a
            class="block dark:text-slate-500 bg-white hover:text-black dark:bg-black dark:hover:bg-battle-red dark:hover:text-white font-bold px-4 py-2 whitespace-no-wrap hover:bg-white hover:outline hover:rounded hover:outline-red-800"
            href={item.href}>{item.text}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
