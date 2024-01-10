<script>
    import RedButton from '../buttons/RedButton.svelte'
    export let title
    export let sequence
</script>


<div
class="flex items-center justify-between p-8 text-white align-bottom bg-black border-y lg:h-full lg:items-end lg:border-x lg:border-y-0"
>
<p class="text-6xl text-left font-menobanner me-6 text-mcswf-gold">{sequence}</p>
<p class="mb-2 text-xl font-bold lg:mb-8 rorate-0 lg:-rotate-90 text-end whitespace-nowrap">
  + {title}
</p>
</div>
