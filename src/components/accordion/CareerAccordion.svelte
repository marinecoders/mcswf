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
  >
    <span slot="step">STEP {step.data.step}</span>
    <span slot="head">{step.data.title}</span>
    <span slot="details">{step.data.content}</span>
    <span slot="detailsTitle">{step.data.contentTitle}</span>
  </Accordion>
{/each}
