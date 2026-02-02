<script lang="ts">
</script>

<div class="background">
</div>
<div class="noise"></div>

<style>
    .background {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: radial-gradient(ellipse at center, #323b4c 0%, #1f2937 30%, #010203 85%);
        z-index: 0;
        pointer-events: none;
    }
    
    .noise {
        position: fixed;
        inset: 0;
        opacity: 0.03;
        pointer-events: none;
        z-index: 0;
        mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
</style>
