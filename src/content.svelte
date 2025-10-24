<!-- дада, спизжено !-->
<!-- https://jonphillips.ca !-->
<!-- потом когда-нибудь сделаю сам (никогда) !-->

<script lang="ts">
    import Social from './social.svelte';
</script>

<main class="container">
    <section class="content">
        <img class="avatar" src="https://avatars0.githubusercontent.com/u/7848847" crossorigin="anonymous">
        <h1 class="name">Ed Asriyan</h1>
         <div align="center" class="social-container">
            <Social name="SimpleX" icon="simplex" href="https://smp17.simplex.im/a#4fDJYxKMGNve_os7F-y4Fjt_gc0Ar5x3JHHdfH5k2IE"/>
            <Social name="GitHub" icon="github" href="https://github.com/ed-asriyan"/>
            <Social name="LinkedIn" icon="linkedin" href="https://www.linkedin.com/in/ed-asriyan"/>
            <Social name="Facebook" icon="facebook" href="https://www.facebook.com/ed.asrian"/>
            <Social name="VK" icon="vk" href="https://vk.com/id84279691"/>
            <Social name="Instagram" icon="instagram" href="https://www.instagram.com/ed_asriyan"/>
            <Social name="Telegram" icon="telegram" href="https://t.me/ed_asriyan"/>
            <Social name="Email" icon="email" href="mailto:contact.website@asriyan.me" title="Email Ed Asriyan"/>
        </div>
    </section>
</main>

<style>
    .container {
        margin-top: -2rem;
        position: absolute;
        height: 100vh;
        width: 100vw;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, Sans-Serif;
    }

    .name {
        margin: 0;
        text-align: center;
        font-size: 7.35rem;
        letter-spacing: -0.1rem;
        font-style: normal;
        font-weight: 500;
        color: black;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        text-shadow: 15px 15px 25px white;
    }

    .avatar {
        display: block;
        margin: 0 auto;
        background: rgba(86, 80, 78, 0.64);
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: solid 2px #1b1b1b;
        transition: transform 100ms ease-in-out;
        text-decoration: none;
        box-shadow: 5px 5px 25px white;

        &:hover {
            transform: rotate(3deg);
        }
    }

    .social-container {
        margin-top: 1.5rem;
    }
</style>
