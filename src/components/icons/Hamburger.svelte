<script>
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  $: dispatch('message', { isOpen });
</script>

<input type="checkbox" bind:checked={isOpen} id="checkbox" class="checkbox visuallyHidden" />
<label for="checkbox" class="hamburgerCheckbox cursor-pointer">
  <div class="hamburger hamburger2">
    <span class="bar bar1"></span>
    <span class="bar bar2"></span>
    <span class="bar bar3"></span>
    <span class="bar bar4"></span>
  </div>
</label>

<style>
  .hamburgerCheckbox:hover .bar {
    background-color: #e4e4e7;
  }

  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  .hamburger {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: relative;
  }

  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: #ffffff;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute;
  }

  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 13.5px;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }

  .checkbox:checked + label > .hamburger2 > .bar1 {
    transform: translateX(40px);
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger2 > .bar2 {
    transform: rotate(45deg);
  }

  .checkbox:checked + label > .hamburger2 > .bar3 {
    transform: rotate(-45deg);
  }

  .checkbox:checked + label > .hamburger2 > .bar4 {
    transform: translateX(-40px);
    background-color: transparent;
  }
</style>
