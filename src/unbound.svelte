<script lang="ts">
    import { onMount } from 'svelte';

    // https://unbounded.lantern.io/embed
    let shouldLoad = false;

    onMount(() => {
        if (window.location.hostname === 'asriyan.me') {
            shouldLoad = true;
            const script = document.createElement('script');
            script.src = 'https://embed.lantern.io/static/js/main.js';
            script.type = 'module';
            document.head.appendChild(script);
        }
    });

    const theme: 'dark' | 'light' = 'dark';
    const layout: 'floating' | 'banner' | 'panel' = 'floating';
</script>

{#if shouldLoad}
    <browsers-unbounded xmlns="http://www.w3.org/1999/xhtml" data-layout={layout} data-theme={theme} data-exit="true" style="width: 100%;"></browsers-unbounded>
{/if}
