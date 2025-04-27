<script lang="ts">
    import {fade, fly} from 'svelte/transition';
    import Background from './background.svelte';
    import Content from './content.svelte';
    import Footer from './footer/index.svelte';
    import Unbound from './unbound.svelte';
</script>

<Background/>

<div transition:fly={{ y: 50, duration: 1000 }}>
    <Content/>
</div>

<div transition:fade={{ duration: 1000 }}>
    <Footer/>
</div>

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
