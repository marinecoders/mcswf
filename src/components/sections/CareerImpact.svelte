<script>
    import Button from '../buttons/RedButton.svelte';
    import Hero from '../elements/Hero.svelte';
  </script>
  
  <body>
    <div class="flex h-1/2">
      <!-- Left Column -->
      <div class="w-1/2 p-4">
        <Hero 
          title="WHAT WE DO"
          content="Et quae quibusdam sed consequatur iste nam asperiores facilis qui error iste qui quia tenetur est rerum dolorem. Eum eveniet placeat cum impedit officiis est odit asperiores."
          link="#"
          padding='md:pt-12'
          contentClasses="line-limit-4"
          linkText='LEARN MORE'
        />
      </div>
  
      <!-- Right Column -->
      <div
        class="w-1/2 p-4 bg-contain bg-slate-200"
        style="background-image: url('https://dummyimage.com/1920x1080/fff/aaa');"
      >
      </div>
    </div>
    <div class="flex h-1/2">
      <!-- Left Column -->
      <div
        class="w-1/2 p-4 bg-contain bg-slate-200"
        style="background-image: url('https://dummyimage.com/1920x1080/fff/aaa');"
      >
      </div>
      <div class="w-1/2 p-4">
        <Hero
          title="THE IMPACT"
          content="Et quae quibusdam sed consequatur iste nam asperiores facilis qui error iste qui quia tenetur est rerum dolorem. Eum eveniet placeat cum impedit officiis est odit asperiores."
          link="#"
          padding="md:pt-12"
          contentClasses="line-limit-4"
          linkText='LEARN MORE'
        />
      </div>
    </div>
  </body>