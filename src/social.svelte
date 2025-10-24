<script lang="ts" module>
    type Icon = "github" | "vk" | "linkedin" | "facebook" | "simplex" | "instagram" | "email" | "telegram";
</script>

<script lang="ts">
    interface Props {
       icon: Icon;
       href: string;
       name: string;
       round: boolean;
       title?: string;
    }

    let { icon, href, name, title }: Props = $props();

    let hint = $derived(title || `Ed Asriyan at ${name}`);
    let classes = $derived(['social', icon].join(' '));

    const map: Record<Icon, { symbol: string }> = {
        'facebook': {
            symbol: '&#xf09a;',
        },
        'simplex': {
            symbol: '&#xe800;',
        },
        'email': {
            symbol: '&#xe801;',
        },
        'linkedin': {
            symbol: '&#xe802;',
        },
        'instagram': {
            symbol: '&#xf16d;',
        },
        'vk': {
            symbol: '&#xf189;',
        },
        'telegram': {
            symbol: '&#xe803;',
        },
        'github': {
            symbol: '&#xf113;',
        },
    };

    const onClick = () => {
        window.open(href, '_blank');
    };
</script>

<button title={hint} onclick={onClick} type="button">
    <svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <mask id={`symbol-mask-${icon}`}>
                <rect width="100" height="100" fill="white"  />
                <text
                    class={classes}
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

        <circle cx="50" cy="50" r="50" class={classes} mask={`url(#symbol-mask-${icon})`} />
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
        box-shadow: 0px 0px 70px white;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
    }

    .social {
        fill: black;
        transition: all 0.5s ease;
        cursor: pointer;
        font-family: 'icons';
        speak: none;

        &:hover {
            transition: all 0.5s ease;
        }
    }

    .github {
        &:hover {
            fill: #24292e;
        }
    }

    .telegram {
        &:hover {
            fill: #179cde;
        }
    }

    .vk {
        &:hover {
            fill: #0077ff;
        }
    }

    .facebook {
        &:hover {
            fill: #1877f2;
        }
    }

    .instagram {
        &:hover {
            fill: #db3670;
        }
    }

    .linkedin {
        &:hover {
            fill: rgb(41, 119, 201);
        }
    }

    .spotify {
        &:hover {
            fill: rgb(30, 215, 96);
        }
    }

    .simplex {
        &:hover {
            fill: #01c4ff;
        }
    }

    .email {
        &:hover {
            fill: #eab738;
        }
    }

    .icon {
        height: 45px;
        width: 45px;
        margin: 0.5rem;
    }

    @media all and (max-width: 600px) {
        .icon {
            height: 37px;
            width: 37px;
        }
    }

    @media all and (max-width: 480px) {
        .icon {
            height: 34px;
            width: 34px;
        }
    }
</style>
