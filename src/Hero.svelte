<!-- дада, спизжено !-->
<!-- https://jonphillips.ca !-->
<!-- потом когда-нибудь сделаю сам (никогда) !-->

<script lang="ts">
    import Social from './social.svelte';
    import { profile, socialLinks } from './data';
</script>

<header class="hero" id="about">
    <div class="content">
        <div class="avatar-wrapper">
            <div class="avatar-glow"></div>
            <img class="avatar" src={profile.avatar} alt={profile.name}>
        </div>
        
        <h1 class="name">{profile.name}</h1>
        
        <p class="summary">
            {profile.title}<br>
            {profile.subtitle}
        </p>

        <div class="social-container">
            {#each socialLinks as link}
                <Social 
                    name={link.name} 
                    icon={link.icon} 
                    href={link.href} 
                    color={link.color}
                    title={link.title}
                />
            {/each}
        </div>
    </div>
    
    <div class="scroll-indicator">
        <div class="mouse">
            <div class="wheel"></div>
        </div>
    </div>
</header>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 1.5rem;
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;
    }

    .avatar-wrapper {
        position: relative;
        margin-bottom: 2rem;
    }

    .avatar-glow {
        position: absolute;
        inset: -4px;
        background: linear-gradient(135deg, #d1d5db, #6b7280);
        border-radius: 50%;
        opacity: 0.2;
        filter: blur(8px);
        transition: opacity 0.5s;
    }

    .avatar-wrapper:hover .avatar-glow {
        opacity: 0.4;
    }

    .avatar {
        position: relative;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        object-fit: cover;
        transition: all 0.5s;
    }

    .name {
        font-size: 3.75rem;
        line-height: 1;
        font-weight: 900;
        letter-spacing: -0.025em;
        color: white;
        margin: 0 0 1rem 0;
        text-transform: uppercase;
    }

    .summary {
        font-size: 1.125rem;
        color: #9ca3af;
        font-weight: 300;
        line-height: 1.625;
        margin: 0 0 2rem 0;
        max-width: 42rem;
    }

    .social-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        max-width: 48rem;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2.5rem;
        animation: bounce 2s infinite;
    }

    .mouse {
        width: 20px;
        height: 32px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        position: relative;
    }

    .wheel {
        width: 2px;
        height: 8px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2px;
        animation: scroll 1.5s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    @keyframes scroll {
        0% { 
            opacity: 1; 
            top: 6px; 
        }
        100% { 
            opacity: 0; 
            top: 20px; 
        }
    }

    @media (max-width: 768px) {
        .hero {
            padding: 3rem 1.5rem;
        }
        
        .name {
            font-size: 3.5rem;
        }
        
        .avatar {
            width: 10rem;
            height: 10rem;
        }
        
        .summary {
            font-size: 1.25rem;
        }
        
        .scroll-indicator {
            bottom: 5rem;
        }
    }

    @media (max-width: 480px) {
        .name {
            font-size: 3rem;
        }
        
        .avatar {
            width: 9rem;
            height: 9rem;
        }
        
        .summary {
            font-size: 1.125rem;
        }
        
        .scroll-indicator {
            bottom: 7rem;
        }
    }
</style>

