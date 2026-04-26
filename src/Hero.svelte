<!-- дада, спизжено !-->
<!-- https://jonphillips.ca !-->
<!-- потом когда-нибудь сделаю сам (никогда) !-->

<script lang="ts">
    import Social from './social.svelte';
    import { profile, socialLinks, cv } from './data';
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

        <a
            class="cv-button"
            href={cv.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            {cv.text}
        </a>
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
        border: 2px solid var(--border-color);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        object-fit: cover;
        transition: all 0.5s;
    }

    .name {
        font-size: 3.75rem;
        line-height: 1;
        font-weight: 900;
        letter-spacing: -0.025em;
        color: var(--heading-color);
        margin: 0 0 1rem 0;
        text-transform: uppercase;
    }

    .summary {
        font-size: 1.125rem;
        color: var(--text-muted);
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
        margin-bottom: 2.5rem;
        max-width: 48rem;
    }

    .cv-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 9999px;
        background: var(--card-bg);
        color: var(--text-color);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        text-decoration: none;
        text-transform: uppercase;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;
        margin-bottom: 3rem;
    }

    .cv-button svg {
        width: 1em;
        height: 1em;
        flex-shrink: 0;
    }

    .cv-button:hover {
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.05);
    }

    :global([data-theme="light"]) .cv-button:hover {
        border-color: rgba(0, 0, 0, 0.25);
        background: rgba(0, 0, 0, 0.06);
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2.5rem;
        animation: bounce 2s infinite;
    }

    .mouse {
        width: 20px;
        height: 32px;
        border: 2px solid rgba(128, 128, 128, 0.5);
        border-radius: 20px;
        position: relative;
    }

    .wheel {
        width: 2px;
        height: 8px;
        background: var(--text-color);
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

