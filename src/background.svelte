<script lang="ts">
    import { onMount } from 'svelte';
    import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

    let canvas: Element = $state();

    const getRandomColors = () => {
        return [
            Math.floor(Math.random() * 0xffffff),
            Math.floor(Math.random() * 0xffffff),
            Math.floor(Math.random() * 0xffffff),
        ];
    };

    let bg: any = null;

    onMount(() => {
        bg = Spheres2Background(canvas, {
            count: window.innerWidth < 768 ? 100 : 320,
            colors: getRandomColors(),
            minSize: 0.5,
            maxSize: 1
        });
    });

    const changeColors = () => {
        bg?.spheres.setColors(getRandomColors())
        bg?.spheres.light1.color.set(getRandomColors()[0]);
    };

</script>

<svelte:window onclick={changeColors} />

<div class="background">
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .background {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5) 200%);
    }
</style>
