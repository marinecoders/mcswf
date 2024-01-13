<script>
    import RedButton from '../buttons/RedButton.svelte'
    export let title
    export let sequence
    export let text
    export let href
    export let mobile
</script>

<div class="h-fit">
  <div class="grid grid-cols-6 p-4 content-center">
  {#if mobile}
    <div class="col-span-1 text-4xl text-center font-menobanner text-mcswf-gold py"> {sequence}</div>
  {/if}
<div class="col-span-4 text-left pt-2 tracking-widest sm:text-center font-bold block text-xl md:text-2xl lg:text-4xl"> {title} </div>
  {#if mobile}
  <div class="col-span-1 text-3xl text-center font-menobanner text-mcswf-gold"> - </div>
  {/if}
</div>
<div class="text-lg px-4 pb-6">
  {text}
</div>
<div class="col-span-1 flex h-fit py-8 justify-center">
  <div>
    <RedButton text="LEARN MORE" href={href} />
  </div>
</div>
  {#if !mobile}
  <div class="grid grid-cols-2">
    <div class="col-span-1 text-xl text-left font-menobanner text-mcswf-gold left-10 bottom-10"> {sequence}</div>
    <div class="col-span-1 text-xl font-bold text-end whitespace-nowrap text-mcswf-gold right-10 bottom-10"> - </div>
    </div>
  {/if}
</div>
