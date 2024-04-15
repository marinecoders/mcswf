<script>
    import RedButton from '../buttons/RedButton.svelte';
  
    export let title;
    export let content;
    export let startDate;
    export let endDate;
  </script>
  
  <div class="w-10/12 h-full p-10 bg-slate-300 bg-slate-900">
    <h3 class="text-4xl pt-10 text-black text-white font-extrabold text-center">
      {title}
    </h3>
    <div class="max-w-3xl mx-auto mt-5 text-center">
      <p class="text-lg text-slate-600 text-slate-400">
        {startDate} - {endDate}
      </p>
      <p>{content}</p>
      <div class="pt-20">
        <RedButton href="#" text="APPLY NOW" />
      </div>
    </div>
  </div>