<script lang="ts">
    import { onMount } from 'svelte';
    
    export let items = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "mailto:contact.website@asriyan.me" }
    ];
    
    let scrolled = false;
    
    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<nav class:scrolled>
    <div class="container">
        <div class="logo">EA</div>
        <div class="links">
            {#each items as item}
                <a href={item.href}>{item.name}</a>
            {/each}
        </div>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1.5rem 0;
        z-index: 100;
        transition: all 0.3s ease;
    }

    nav.scrolled {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1rem 0;
    }

    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-weight: 800;
        font-size: 1.25rem;
        letter-spacing: 0.2rem;
        color: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
    }

    .links {
        display: flex;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: #d1d5db;
        font-size: 0.875rem;
        font-weight: 500;
        transition: color 0.2s;
    }

    a:hover {
        color: white;
    }

    @media (max-width: 768px) {
        .links {
            display: none;
        }
    }
</style>
