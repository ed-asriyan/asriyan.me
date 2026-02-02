<script lang="ts">
    import { about } from './data';
    
    function highlightText(text: string, highlights: string[]): string {
        let result = text;
        highlights.forEach(highlight => {
            result = result.replace(highlight, `<span class="highlight">${highlight}</span>`);
        });
        return result;
    }
</script>

<section class="section" id="about">
    <h2 class="title">About Me</h2>
    <div class="card">
        <p class="bio">
            {@html highlightText(about.bio, about.highlights)}
        </p>
        
        <div class="info-grid">
            <div class="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <a href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(about.location)}" target="_blank" rel="noopener noreferrer" class="location-link">
                    {about.location}
                </a>
            </div>
            
            <div class="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>{about.languages}</span>
            </div>
            
            <div class="info-item">
                <span class="pulse"></span>
                <span>{about.availability}</span>
            </div>
        </div>

        <div class="gpg">
            <p class="gpg-text">
                GPG: {about.gpg}
            </p>
        </div>
    </div>
</section>

<style>
    .section {
        max-width: 1280px;
        margin: 0 auto;
        padding: 5rem 1.5rem;
        text-align: center;
    }
    
    .title {
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 0.5em;
        margin-bottom: 4rem;
        font-size: 1.875rem;
        color: white;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    .card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(4px);
        border-radius: 1rem;
        padding: 3rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
        max-width: 48rem;
        margin: 0 auto;
    }
    
    .bio {
        color: #d1d5db;
        line-height: 1.625;
        font-size: 1.125rem;
        margin: 0 0 2rem 0;
    }
    
    .highlight {
        color: white;
        font-weight: 600;
    }
    
    .info-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
    .info-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #9ca3af;
    }
    
    .info-item svg {
        flex-shrink: 0;
    }
    
    .location-link {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s;
        cursor: pointer;
    }
    
    .location-link:hover {
        color: white;
        text-decoration: underline;
    }
    
    .pulse {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #10b981;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
    
    .gpg {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .gpg-text {
        font-size: 0.75rem;
        color: #6b7280;
        font-family: monospace;
        word-break: break-all;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        .section {
            padding: 3rem 1.5rem;
        }
        
        .title {
            font-size: 2rem;
            letter-spacing: 0.3em;
        }
        
        .card {
            padding: 2.5rem 1.5rem;
        }
        
        .bio {
            font-size: 1.25rem;
        }
        
        .info-item {
            font-size: 1.125rem;
        }
        
        .info-grid {
            gap: 1.25rem;
        }
    }
    
    @media (max-width: 480px) {
        .section {
            padding: 2.5rem 1rem;
        }
        
        .card {
            padding: 2rem 1.25rem;
        }
        
        .bio {
            font-size: 1.125rem;
        }
        
        .info-grid {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
