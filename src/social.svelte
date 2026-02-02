<script lang="ts" module>
    type Icon = "github" | "vk" | "linkedin" | "facebook" | "simplex" | "instagram" | "email" | "telegram";
</script>

<script lang="ts">
    interface Props {
       icon: Icon;
       href: string;
       name: string;
       title?: string;
    }

    let { icon, href, name, title }: Props = $props();

    let hint = $derived(title || `Ed Asriyan at ${name}`);
    let classes = $derived(['social', icon].join(' '));

    const map: Record<Icon, { symbol: string, color: string }> = {
        'facebook': {
            symbol: '&#xf09a;',
            color: '#1877f2',
        },
        'simplex': {
            symbol: '&#xe800;',
            color: '#01c4ff',
        },
        'email': {
            symbol: '&#xe801;',
            color: '#eab738',
        },
        'linkedin': {
            symbol: '&#xe802;',
            color: 'rgb(41, 119, 201)',
        },
        'instagram': {
            symbol: '&#xf16d;',
            color: '#db3670',
        },
        'vk': {
            symbol: '&#xf189;',
            color: '#0077ff',
        },
        'telegram': {
            symbol: '&#xe803;',
            color: '#179cde',
        },
        'github': {
            symbol: '&#xf113;',
            color: 'grey',
        },
    };

    const onClick = () => {
        window.open(href, '_blank');
    };
</script>

<button title={hint} onclick={onClick} type="button" style="--icon-color: {map[icon]?.color}">
    <svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <mask id={`symbol-mask-${icon}`}>
                <rect width="100" height="100" fill="red"  />
                <text
                    class="social"
                    x="50"
                    y="50"
                    fill="black"
                    font-size="50"
                    text-anchor="middle"
                    dominant-baseline="central"
                >
                    {@html map[icon]?.symbol}
                </text>
            </mask>
        </defs>

        <circle cx="50" cy="50" r="50" class="circle" mask={`url(#symbol-mask-${icon})`} />
    </svg>
</button>

<style>
    @font-face {
        font-family: 'icons';
        src: url('/fontello.ttf') format('truetype');
    }

    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        transition: all 0.3s ease;
        backdrop-filter: blur(4px);
        cursor: pointer;
    }
    
    button:hover {
        transform: scale(1.1);
    }

    .social {
        fill: whitesmoke;
        transition: all 0.3s ease;
        cursor: pointer;
        font-family: 'icons';
        border-radius: 50%;
        overflow: hidden;
    }

    .circle {
        fill: #9ca3af;
    }

    .circle:hover {
        fill: var(--icon-color);
    }

    .icon {
        height: 3rem;
        width: 3rem;
        display: block;
    }
</style>
