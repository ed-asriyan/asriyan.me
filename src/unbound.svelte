<script lang="ts">
    // https://unbounded.lantern.io/embed
    import 'https://embed.lantern.io/static/js/main.js';

    const theme: 'dark' | 'light' = 'dark';
    const layout: 'floating' | 'banner' | 'panel' = 'floating';
</script>

<browsers-unbounded xmlns="http://www.w3.org/1999/xhtml" data-layout={layout} data-theme={theme} data-exit="true" style="width: 100%;"></browsers-unbounded>
