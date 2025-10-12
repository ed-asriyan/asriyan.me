<script lang="ts">
    import Social from './social.svelte';
</script>
<footer class="footer">
    <Social name="SimpleX" icon="simplex" href="https://smp17.simplex.im/a#4fDJYxKMGNve_os7F-y4Fjt_gc0Ar5x3JHHdfH5k2IE"/>
    <Social name="GitHub" icon="github" href="https://github.com/ed-asriyan"/>
    <Social name="LinkedIn" icon="linkedin" href="https://www.linkedin.com/in/ed-asriyan"/>
    <Social name="Facebook" icon="facebook" href="https://www.facebook.com/ed.asrian"/>
    <Social name="VK" icon="vk" href="https://vk.com/id84279691"/>
    <Social name="Instagram" icon="instagram" href="https://www.instagram.com/ed_asriyan"/>
    <Social name="Telegram" icon="telegram" href="https://t.me/ed_asriyan"/>
    <Social name="Email" icon="email" href="mailto:contact.website@asriyan.me" title="Email Ed Asriyan"/>

    <div class="marks">
        <a href="https://jonphillips.ca" target="_blank">Template</a>,
        <a href="https://fontello.com/" target="_blank">Fontello</a>,
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
