<script lang="ts">
    import { experience } from './data';
    
    // Extract all unique tags
    let allTags = [...new Set(experience.flatMap(job => job.tags || []))];
    
    // Track selected tags
    let selectedTags: string[] = $state([]);
    
    // Filter experience based on selected tags
    let filteredExperience = $derived(
        selectedTags.length === 0 
            ? experience 
            : experience.filter(job => 
                job.tags?.some(tag => selectedTags.includes(tag))
            )
    );
    
    function toggleTag(tag: string) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
    }
</script>

<section class="section" id="experience">
    <h2 class="title">Experience</h2>
    
    {#if allTags.length > 0}
        <div class="filter-tags">
            {#each allTags as tag}
                <button 
                    class="tag-filter"
                    class:active={selectedTags.includes(tag)}
                    onclick={() => toggleTag(tag)}
                >
                    {tag}
                </button>
            {/each}
        </div>
    {/if}
    
    <div class="timeline">
        {#each filteredExperience as job}
            <div class="timeline-item">
                <!-- Desktop Timeline -->
                <div class="desktop-layout">
                    <div class="left">
                        {#if job.companyLink}
                            <a href={job.companyLink} target="_blank" rel="noopener noreferrer" class="company-link">
                                <h3>
                                    {job.company}
                                    <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </h3>
                            </a>
                        {:else}
                            <h3>{job.company}</h3>
                        {/if}
                        <p class="period">{job.period}</p>
                    </div>
                    
                    <div class="center-dot">
                        <span class="icon">{job.icon || '●'}</span>
                    </div>

                    <div class="right">
                        <h4>{job.position}</h4>
                        <p class="description">{job.description}</p>
                        
                        {#if job.links && job.links.length > 0}
                            <div class="experience-links">
                                {#each job.links as link}
                                    <a 
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="experience-link"
                                        title={link.text}
                                    >
                                        {link.text}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
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
        margin-bottom: 2rem;
        font-size: 1.875rem;
        color: white;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    .filter-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 3rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .tag-filter {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
        border-radius: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: #d1d5db;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        font-family: inherit;
    }
    
    .tag-filter:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        color: white;
    }
    
    .tag-filter.active {
        background: rgba(255, 255, 255, 0.2);
        border-color: white;
        color: white;
    }
    
    .timeline {
        position: relative;
        max-width: 700px;
        margin: 4rem auto 0;
    }
    
    .timeline::before {
        content: '';
        position: absolute;
        left: 2rem;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
        top: 0;
    }
    
    .timeline-item {
        margin-bottom: 3rem;
        position: relative;
    }
    
    .desktop-layout {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 4rem;
    }
    
    .left {
        padding-right: 3rem;
        width: 100%;
        text-align: left;
        padding-right: 0;
    }
    
    .left h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        margin: 0 0 0.25rem 0;
    }
    
    .company-link h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .external-icon {
        opacity: 0.6;
        transition: all 0.3s ease;
        flex-shrink: 0;
    }
    
    .company-link {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;
        display: inline-block;
    }
    
    .company-link:hover h3 {
        color: #bfdbfe;
    }
    
    .company-link:hover .external-icon {
        opacity: 1;
        transform: translate(2px, -2px);
    }
    
    .period {
        color: #9ca3af;
        font-size: 0.875rem;
        font-family: monospace;
        margin: 0;
    }
    
    .center-dot {
        position: absolute;
        left: 2rem;
        transform: translateX(-50%);
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: #000;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: all 0.3s;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    }
    
    .timeline-item:hover .center-dot {
        border-color: white;
        transform: translateX(-50%) scale(1.1);
    }
    
    .icon {
        color: #d1d5db;
        font-size: 0.75rem;
    }
    
    .right {
        width: 100%;
        padding-left: 0;
    }
    
    .right h4 {
        font-size: 1.125rem;
        font-weight: 500;
        color: #e5e7eb;
        margin: 0 0 0.5rem 0;
    }
    
    .description {
        color: #9ca3af;
        font-size: 0.875rem;
        line-height: 1.5;
        margin: 0;
    }
    
    .experience-links {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .experience-link {
        font-size: 0.8125rem;
        padding: 0.375rem 0.875rem;
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 500;
        font-family: inherit;
        position: relative;
        overflow: hidden;
    }
    
    .experience-link::after {
        content: '↗';
        margin-left: 0.25rem;
        transition: transform 0.3s ease;
        display: inline-block;
    }
    
    .experience-link:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: white;
        transform: translateY(-2px);
    }
    
    .experience-link:hover::after {
        transform: translate(2px, -2px);
    }
    
    @media (max-width: 768px) {
        .section {
            padding: 3rem 1.5rem;
        }
        
        .title {
            font-size: 2rem;
            letter-spacing: 0.3em;
        }
        
        .timeline::before {
            left: 2rem;
        }
        
        .desktop-layout {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 4rem;
        }
        
        .left {
            width: 100%;
            text-align: left;
            padding-right: 0;
            margin-bottom: 1rem;
        }
        
        .left h3 {
            font-size: 1.5rem;
        }
        
        .period {
            font-size: 1rem;
        }
        
        .center-dot {
            left: 2rem;
        }
        
        .right {
            width: 100%;
            padding-left: 0;
        }
        
        .right h4 {
            font-size: 1.25rem;
        }
        
        .description {
            font-size: 1.05rem;
        }
    }
    
    @media (max-width: 480px) {
        .section {
            padding: 2.5rem 1rem;
        }
        
        .desktop-layout {
            padding-left: 3rem;
        }
        
        .left h3 {
            font-size: 1.35rem;
        }
        
        .timeline::before {
            left: 1.5rem;
        }
        
        .center-dot {
            left: 1.5rem;
        }
    }
</style>
