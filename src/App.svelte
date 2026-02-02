<script lang="ts">
    import {fade, fly} from 'svelte/transition';
    import Background from './background/index.svelte';
    import Navbar from './Navbar.svelte';
    import Hero from './Hero.svelte';
    import Experience from './Experience.svelte';
    import Projects from './Projects.svelte';
    import About from './About.svelte';
    import Footer from './footer/index.svelte';
    import Unbound from './unbound.svelte';

    let isDesktop = window.innerWidth >= 1024;
</script>

<Background/>
<Navbar/>

<main class="main-content">
    <div transition:fly={{ y: 50, duration: 1000 }}>
        <Hero/>
    </div>

    <div class="scroll-content">
        <About/>
        <Experience/>
        <Projects/>
    </div>

    <div transition:fade={{ duration: 1000 }}>
        <Footer/>
    </div>
</main>

{#if isDesktop}
    <Unbound/>
{/if}

<style>
    .main-content {
        position: relative;
        z-index: 1;
        width: 100%;
        overflow-x: hidden;
    }
    
    .scroll-content {
        position: relative;
        z-index: 1;
    }
</style>
