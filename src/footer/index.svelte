<script lang="ts">
    import Social from './social.svelte';
</script>
<footer class="footer">
    <Social name="GitHub" icon="github" href="https://github.com/ed-asriyan"/>
    <Social name="LinkedIn" icon="linkedin" href="https://www.linkedin.com/in/ed-asriyan"/>
    <Social name="Facebook" icon="facebook" href="https://www.facebook.com/ed.asrian"/>
    <Social name="VK" icon="vk" href="https://vk.com/id84279691"/>
    <Social name="Instagram" icon="instagram" href="https://www.instagram.com/ed_asriyan"/>
    <Social name="Telegram" icon="telegram" href="https://t.me/ed_asriyan"/>
    <Social name="Spotify" icon="spotify" href="https://open.spotify.com/user/31ghpn3sdqez7c6mbsi556bf5ovy?si=fd7a81b6514e4a61"/>

    <div class="marks">
        <a href="https://jonphillips.ca" target="_blank">Template</a>,
        <a href="https://icomoon.io/" target="_blank">IcoMoon</a>,
        <a href="https://threejs.org" target="_blank">Background Spheres</a>
    </div>
</footer>

<style>
    /***** Footer *****/
    .footer {
        position: absolute;
        bottom: 0;
        text-align: center;
        display: block;
        float: left;
        width: 100%;
    }

    .marks {
        text-decoration: none;
        align-self: flex-end;
        font-family: Arial;
        font-size: 10px;
        line-height: 35px;
        color: #737373;

        & > a {
            color: #737373;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
