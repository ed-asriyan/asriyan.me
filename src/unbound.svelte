<script lang="ts">
    // https://unbounded.lantern.io/embed
    const shouldLoad = typeof window !== 'undefined' && window.location.hostname === 'asriyan.me';

    const theme: 'dark' | 'light' = 'dark';
    const layout: 'floating' | 'banner' | 'panel' = 'floating';
</script>

<svelte:head>
    {#if shouldLoad}
        <script src="https://embed.lantern.io/static/js/main.js" type="module"></script>
    {/if}
</svelte:head>

{#if shouldLoad}
    <browsers-unbounded xmlns="http://www.w3.org/1999/xhtml" data-layout={layout} data-theme={theme} data-exit="true" style="width: 100%;"></browsers-unbounded>
{/if}
