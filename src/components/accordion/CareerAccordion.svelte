<script>
  export let open = false
  import { slide } from 'svelte/transition'
  import { getCollection } from 'astro:content'
  import Accordion from './CareerAccordionSection.svelte'
  const handleClick = () => (open = !open)

  export let steps = []
</script>

{#each steps as step}
  <Accordion 
    isMiddle={step.data.step != 1}
    isStart={step.data.step == 1}
    isEnd={step.data.step == steps.length}
    step={step.data.step}
    details={step.data.content}
    head={step.data.title}
    detailsTitle={step.data.contentTitle}
  >
  </Accordion>
{/each}
