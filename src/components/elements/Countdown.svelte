<script>
  import { externalLinks } from '@content/constants';
  import Timer from './Timer.svelte'
  
  export let title = ''
  export let content = ''
  export let link = '#'
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-12 pb-10">
    <h1 class="text-left md:text-center font-extrabold text-2xl md:text-[40px] text-mcswf-gold pt-16 px-8">{title}</h1>
    <p class="text-left md:text-center text-base lg:text-2xl px-8">{content}</p>
  <Timer />
</div>
