<script>
    import RedButton from '../buttons/RedButton.svelte'
    export let title
    export let sequence
    export let text
    export let href
</script>


<div class="absolute inset-12 top-4 font-bold block text-xl md:text-2xl lg:text-4xl"> {title} </div>
<div class="absolute flex inset-12 top-20 text-lg">
  {text}
</div>
<div class="absolute bottom-1/4 left-1/4 flex w-64">
  <RedButton text="LEARN MORE" href={href} />
</div>
<div class="absolute justify-between overflow-visible text-white align-bottom itemsfirst-letter:-center items-end bottom-0 inset-x-0" >
  <div class="absolute items-end text-xl text-left font-menobanner text-mcswf-gold left-10 bottom-10"> {sequence}</div>
  <div class="absolute mb-2 text-xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10"> - </div>
</div>
