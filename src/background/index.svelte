<script lang="ts">
    import Balls from './balls.svelte';
    import Fluid from './fluid.svelte';

    const components = [
        Balls,
        Fluid,
    ];

    const getRandomComponent = () => {
        return components[Math.floor(Math.random() * components.length)];
    };

    const component = getRandomComponent();
</script>``

<div class="background">
    <svelte:component this={component} />
</div>

<style>
    .background {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5) 130%);
    }
</style>
