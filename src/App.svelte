<script lang="ts">
    import {fade, fly} from 'svelte/transition';
    import Background from './background.svelte';
    import Content from './content.svelte';
    import Footer from './footer/index.svelte';
    import Unbound from './unbound.svelte';

    let showContent = $state(false);
    setTimeout(() => showContent = true, 200);

    let showFooter = $state(false);
    setTimeout(() => showFooter = true, 1200);

    let showBackground = $state(false);
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

<div class="unbound">
    <Unbound/>
</div>

<style global>
    @import "global.css";

    @media all and (max-width: 741px) {
        .unbound {
            display: none;
        }
    }
</style>
