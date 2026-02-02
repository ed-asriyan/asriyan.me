<script lang="ts">
    import { projects } from './data';
</script>

<section class="section" id="projects">
    <h2 class="title">Projects</h2>
    <div class="grid">
        {#each projects as project}
            <a href={project.link} target="_blank" rel="noopener noreferrer" class="card">
                <div class="gradient-line"></div>
                
                <div class="card-header">
                    <div class="icon-box">
                        &lt;/&gt;
                    </div>
                    <div class="external-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </div>
                </div>

                <h3>{project.name}</h3>
                <p class="role">{project.role}</p>
                <p class="description">{project.description}</p>

                <div class="tags">
                    {#each project.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    .section {
        max-width: 1280px;
        margin: 0 auto;
        padding: 5rem 1.5rem;
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
    
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
    }
    
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.75rem;
        padding: 1.5rem;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        overflow: hidden;
    }
    
    .card:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .gradient-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #6b7280, white);
        transform: scaleX(0);
        transition: transform 0.5s;
    }
    
    .card:hover .gradient-line {
        transform: scaleX(1);
    }
    
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
    }
    
    .icon-box {
        width: 3rem;
        height: 3rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: monospace;
        color: #9ca3af;
        font-size: 1.2rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .external-link {
        color: #6b7280;
        transition: color 0.2s;
    }
    
    .card:hover .external-link {
        color: white;
    }
    
    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        transition: color 0.3s;
    }
    
    .card:hover h3 {
        color: #bfdbfe;
    }
    
    .role {
        font-family: monospace;
        color: #9ca3af;
        font-size: 0.875rem;
        margin: 0 0 1rem 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .description {
        margin: 0 0 1.5rem 0;
        font-size: 0.875rem;
        color: #d1d5db;
        line-height: 1.5;
        flex-grow: 1;
        min-height: 60px;
    }
    
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
    }
    
    .tag {
        font-size: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        color: #d1d5db;
        border: 1px solid rgba(255, 255, 255, 0.05);
        font-weight: 500;
    }
    
    @media (max-width: 768px) {
        .section {
            padding: 3rem 1.5rem;
        }
        
        .title {
            font-size: 2rem;
            letter-spacing: 0.3em;
        }
        
        .grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        h3 {
            font-size: 1.5rem;
        }
        
        .role {
            font-size: 1rem;
        }
        
        .description {
            font-size: 1.05rem;
        }
        
        .tag {
            font-size: 0.875rem;
            padding: 0.4rem 0.9rem;
        }
    }
    
    @media (max-width: 480px) {
        .section {
            padding: 2.5rem 1rem;
        }
        
        .card {
            padding: 1.75rem;
        }
    }
</style>
