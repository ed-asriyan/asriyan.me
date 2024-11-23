<script lang="ts" module>
    type Icon = "github" | "vk" | "linkedin";
</script>

<script lang="ts">
   interface Props {
      icon: Icon;
      href: string;
      name: string;
   }

   let { icon, href, name }: Props = $props();

    let title = $derived(`Ed Asriyan at ${name}`);
    let classes = $derived(['social', icon].join(' '));
</script>

<a class={classes}
   href={href}
   title={title}
   target="_blank"></a>

<style>
    @font-face {
        font-family: 'icomoon';
        src: url('/icomoon.ttf') format('truetype');
    }

    .social {
        margin: 0 0.5rem;
        color: rgba(255, 255, 255, 0.93);
        font-size: 40px;
        transition: all 0.5s ease;

        font-family: 'icomoon';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        text-decoration: none;

        &:hover {
            transition: all 0.5s ease;
        }
    }

    .github {
        &:hover {
            color: #24292e;
        }

        &:before {
            content: "\e900";
        }
    }

    .telegram {
        &:hover {
            color: #179cde;
        }

        &:before {
            content: "\e902";
        }
    }

    .vk {
        &:hover {
            color: #0077ff;
        }

        &:before {
            content: "\e901";
        }
    }

    .facebook {
        &:hover {
            color: #1877f2;
        }

        &:before {
            content: "\e905";
        }
    }

    .instagram {
        &:hover {
            color: #db3670;
        }

        &:before {
            content: "\e904";
        }
    }

    .linkedin {
        &:hover {
            color: rgb(41, 119, 201);
        }

        &:before {
            content: "\e903";
        }
    }

    .spotify {
        &:hover {
            color: rgb(30, 215, 96);
        }

        &:before {
            content: "\e906";
        }
    }

    @media all and (max-width: 600px) {
        .social {
            font-size: 37px;
        }
    }

    @media all and (max-width: 480px) {
        .social {
            font-size: 34px;
        }
    }
</style>
