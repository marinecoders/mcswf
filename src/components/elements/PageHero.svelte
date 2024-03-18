<script>
    import Hero from './Hero.svelte';
  
    export let title;
    export let content;
    export let link;
    export let linkText;
    export let padding;
    export let location;
  </script>
  
  <div class="flex h-screen">
    <!-- Left Column -->
    <div class="w-1/2 p-4">
      <Hero
        title={title}
        content={content}
        link={link}
        padding={padding}
        linkText={linkText}
      />
    </div>
  
    <!-- Right Column -->
    <div
      class="w-1/2 p-4 bg-cover bg-no-repeat bg-slate-200"
      style="background-image: url('https://dummyimage.com/1080/fff/aaa');"
    >
    </div>
  </div>