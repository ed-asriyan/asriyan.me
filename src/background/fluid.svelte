<script lang="ts">
    import { onMount } from 'svelte';
    import fluid from './fluid.js';

    let canvas: Element = $state();

    onMount(() => {
        canvas && fluid(canvas);
    });
</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
