<!-- ParentComponent.svelte -->
<script>
    import Hero from './elements/Hero.svelte';
    import PrereqCard from './cards/PrereqCard.svelte';

    export let entries = [];

    // Since 'entries' is a prop, it will be passed from the parent component
    // where this component is used.
</script>

<div class="h-screen snap-start pt-20">
    <!-- Heading -->
    <Hero 
        padding='p-8'
        title='READY TO JOIN?'
        content="Lorem ipsum dolor sit amet. Et quae quibusdam sed consequatur iste nam asperiores facilis qui error iste qui quia tenetur est rerum dolorem. Eum eveniet placeat cum impedit officiis est odit asperiores."
    />
    <hr style="width:50%; margin-left:25%;color:gray">
    <Hero
        padding='pt-2 pb-4'
        title="PREREQUISITES"
    />

    <!-- Grid of Prerequisites -->
    <div class="grid grid-cols-2">
        {#each entries as prereqEntry}
            <PrereqCard
                title={prereqEntry.data.title}
                content={prereqEntry.data.content}
            />
        {/each} 
    </div>
</div>