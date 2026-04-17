<script lang="ts">
    import { onMount } from 'svelte';

    let isLight = true;

    // Load theme from localStorage on mount
    onMount(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
            isLight = true;
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (storedTheme === 'dark') {
            isLight = false;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            isLight = true;
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

    function toggleTheme() {
        isLight = !isLight;
        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
    }
</script>

<button 
    class="theme-switcher" 
    on:click={toggleTheme} 
    aria-label="Toggle theme"
>
    {#if isLight}
        <!-- Moon Icon for switching to dark -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    {:else}
        <!-- Sun Icon for switching to light -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    {/if}
</button>

<style>
    .theme-switcher {
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        z-index: 1000;
        background: transparent;
        border: 2px solid var(--text-color, #e5e7eb);
        color: var(--text-color, #e5e7eb);
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
    }

    .theme-switcher:hover {
        background: var(--text-color, #e5e7eb);
        color: var(--bg-color, #000);
        transform: scale(1.1);
    }

    .theme-switcher:focus {
        outline: none;
    }
</style>