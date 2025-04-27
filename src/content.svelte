<!-- дада, спизжено !-->
<!-- https://jonphillips.ca !-->
<!-- потом когда-нибудь сделаю сам (никогда) !-->

<main class="container">
    <section class="content">
        <img class="avatar" src="https://avatars0.githubusercontent.com/u/7848847" crossorigin="anonymous">
        <h1 class="name">Ed Asriyan</h1>
        <a class="email" href="mailto:contact.website@asriyan.me" title="Email Ed Asriyan">Contact</a>
    </section>
</main>

<style>
    .container {
        margin-top: -75px;
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

    .email {
        text-align: center;
        display: inline-block;
        margin-top: 5px;
        width: auto;
        font-weight: 500;
        background: rgba(86, 80, 78, 0.2);
        backdrop-filter: blur(8px);
        border-radius: 50px;
        border: solid 1px black;
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        letter-spacing: 0.25rem;
        text-transform: uppercase;
        color: black;
        transition: all 0.5s ease;
        text-decoration: none;

        &:hover {
            background-color: black;
            color: white;
        }
    }

    @media (max-width: 740px) {
        .email {
            display: block;
            padding: 1.35rem 1.5rem;
            font-size: 1.4rem;
            margin-top: 2rem;
        }
    }

    @media (max-width: 600px) {
        .email {
            margin: 1.45rem 1.5rem;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .email {
            margin: 1.55rem 1.5rem;
            font-size: 1.6rem;
        }
    }
</style>
