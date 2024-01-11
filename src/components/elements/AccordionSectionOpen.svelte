<script>
    import RedButton from '../buttons/RedButton.svelte'
    export let title
    export let sequence
    export let text
    export let href
</script>

<div class="grid grid-cols-2 h-fit">
<div class="col-span-2 h-fit text-center font-bold block text-xl md:text-2xl lg:text-4xl"> {title} </div>
<div class="col-span-2 text-lg">
  {text}
</div>
<div class="col-span-2 h-fit">
  <RedButton text="LEARN MORE" href={href} />
</div>
  <div class="col-span-1 text-xl text-left font-menobanner text-mcswf-gold left-10 bottom-10"> {sequence}</div>
  <div class="col-span-1 text-xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10"> - </div>
</div>
