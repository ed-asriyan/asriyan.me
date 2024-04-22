<script lang="ts">
    import { onMount } from 'svelte';
    import ParticleNetwork from 'canvas-particle-network/particle-network';

    let canvas: Element;

    onMount(() => {
        new ParticleNetwork(
            canvas,
            {
                particleColor: '#9f9f9f',
                background: 'transparent',
                interactive: false,
                speed: 'medium',
                density: 5000,
            },
        );
    });
</script>

<div class="background">
    <div class="particles" bind:this={canvas}></div>
</div>

<style>
    @media all and (min-width: 741px) {
        .background {
            transform: scale(1.17) translateX(-6%);
        }
    }

    .background {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-image: url('/background.gif');
        background-size: cover;
        background-position: center center;
        opacity: 0.55;
    }

    .particles {
        height: 100%;
        width: 100%;
    }
</style>
