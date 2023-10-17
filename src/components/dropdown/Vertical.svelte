<script>
  import Icon from '@iconify/svelte'
  import LightButton from '../buttons/LightButton.svelte'
  export let dropdown
  export let title
  export let href
</script>

<a {href}>
  <div class="relative inline-block dropdown">
    <LightButton icon="mdi:chevron-down" text="{title}" href="{href}" />

    <ul
      class="absolute hidden text-gray-700 rounded w-80 dropdown-menu outline outline-slate-900"
    >
      {#each dropdown as item}
        <li>
          <a
            class="block px-4 py-2 whitespace-no-wrap rounded-t bg-slate-200 hover:bg-white hover:outline hover:outline-red-800"
            href={item.link}>{item.linkTitle}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</a>

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
