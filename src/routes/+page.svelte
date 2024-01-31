<script lang="ts">
    import {fade, fly} from 'svelte/transition';

    import Background from './background.svelte';
    import Content from './content.svelte';
    import Footer from './footer/index.svelte';

    let showContent = false;
    setTimeout(() => showContent = true, 200);

    let showFooter = false;
    setTimeout(() => showFooter = true, 1200);

    let showBackground = false;
    setTimeout(() => showBackground = true, 2500);
</script>

{#if showBackground}
    <div transition:fade>
        <Background/>
    </div>
{/if}

{#if showContent}
    <div transition:fly={{ y: 50, duration: 1000 }}>
        <Content/>
    </div>
{/if}

{#if showFooter}
    <div transition:fade={{ duration: 1000 }}>
        <Footer/>
    </div>
{/if}

<style global>
    @import "global.css";
</style>
