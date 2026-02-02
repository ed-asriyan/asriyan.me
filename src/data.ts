import { linear } from "svelte/easing";

export const profile = {
    name: "Ed Asriyan",
    title: "Director of Engineering at Parallels & Founder of AIGid.",
    subtitle: "Building scalable systems in Seattle, WA.",
    avatar: "https://github.com/ed-asriyan.png",
    email: "contact.website@asriyan.me"
};

export const about = {
    bio: "I am an IT enthusiast and engineering leader based in Seattle, WA. With a deep background in C++, Python, Rust, and JavaScript, I specialize in building robust, high-performance systems. Whether it's managing engineering teams at Parallels or founding new ventures like AIGid, I am driven by technical challenges and innovation.",
    location: "Seattle, WA",
    languages: "English / Russian",
    availability: "Open for collaboration",
    gpg: "E075 E24B 56E0 F769 4740 FAED A70D 43C1 D9AB 8D96",
    highlights: ["Seattle, WA", "C++, Python, Rust, and JavaScript"]
};

export const socialLinks = [
    { name: "SimpleX", icon: "simplex", href: "https://smp17.simplex.im/a#4fDJYxKMGNve_os7F-y4Fjt_gc0Ar5x3JHHdfH5k2IE" },
    { name: "Telegram", icon: "telegram", href: "https://t.me/ed_asriyan" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/ed-asriyan" },
    { name: "GitHub", icon: "github", href: "https://github.com/ed-asriyan" },
    { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/ed.asrian" },
    { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/ed_asriyan" },
    { name: "VK", icon: "vk", href: "https://vk.com/id84279691", color: "#0077FF" },
    { name: "Email", icon: "email", href: "mailto:contact.website@asriyan.me" }
];

export const experience = [
    {
        company: "AIGid",
        companyLink: "https://aigid.io",
        position: "Founder",
        period: "2026 - Present",
        description: "The QR-powered AI chatbot that acts as a personal sommelier for every guest, boosting your sales and delighting your customers.",
        icon: "🚀",
        tags: ["Startup"],
        links: [
            { text: "Website", link: "https://aigid.io" },
            { text: "Demo", link: "https://go.aigid.io/7pdmAT" }
        ],
    },
    {
        company: "Parallels",
        companyLink: "https://parallels.com",
        position: "Director of Engineering",
        period: "2025 - Present",
        description: "Directing engineering efforts for cloud infrastructure of world-class virtualization software. Managing diverse teams, overseeing release cycles, and driving technical excellence.",
        icon: "💼",
        tags: ["Employment"],
    },
    { 
        company: "SimpleX Catalog",
        companyLink: "https://simplex-directory.asriyan.me",
        position: "Author & Developer",
        period: "2024 - Present",
        description: "An open-source catalog of SimpleX servers and bots.",
        icon: "🚀",
        tags: ["Projects"],
        links: [
            { text: "GitHub", link: "https://github.com/ed-asriyan/simplex-directory-frontend" },
        ],
    },
    {
        company: "watchtogether.online",
        companyLink: "https://watchtogether.online",
        position: "Author & Developer",
        period: "2024 - Present",
        description: "A seamless 'watch party' experience that unifies YouTube, HLS, and local media sources into a single synchronized room using Svelte. By integrating WebTorrent, the platform bypasses central servers to allow high-quality, serverless P2P video streaming between users.",
        icon: "🚀",
        tags: ["Projects"],
        links: [
            { text: "GitHub", link: "https://github.com/ed-asriyan/watchtogether.online" },
            { text: "Demo", link: "https://watchtogether.online" }
        ]
    },
    {
        company: "Alludo",
        companyLink: "https://web.archive.org/web/20251122063413/https://www.alludo.com/en",
        position: "Senior Engineering Manager",
        period: "2022 - 2025",
        description: "Led multiple engineering teams in developing and maintaining Parallels' web development, focusing on cloud services & infrastructure. Oversaw project management, code quality, and team growth.",
        icon: "💼",
        tags: ["Employment"],
    },
    {
        company: "lottie-converter",
        companyLink: null,
        position: "Author & Developer",
        period: "2020 - Present",
        description: "⭐ 1k+ stars on GitHub. A CLI tool and library for converting Lottie animations to various formats including GIF, WEBP, and video. Built with C++ for performance and reliability.",
        icon: "🚀",
        tags: ["Projects"],
        links: [
            { text: "GitHub", link: "https://github.com/ed-asriyan/lottie-converter" },
            { text: "Docker Hub", link: "https://hub.docker.com/r/edasriyan/lottie-to-gif" }
        ]
    },
    {
        company: "Parallels",
        companyLink: "https://parallels.com",
        position: "Software Developer",
        period: "2019 - 2022",
        description: "Contributed to the development of Parallels MyAccount and Parallels product APIs, focusing on performance optimization, feature development, and cross-platform integrations.",
        icon: "💼",
        tags: ["Employment"],
    },
    {
        company: "M4M",
        companyLink: "https://M4MController.github.io/m4m-web-prototype",
        position: "Co-Founder & CTO",
        period: "2018 - 2020",
        description: "Startup that died before it found product-market fit.",
        icon: "🚀",
        tags: ["Startup", "Projects"],
        links: [
            { text: "GitHub", link: "https://github.com/M4MController" },
            { text: "Demo", link: "https://m4mcontroller.github.io/m4m-web-prototype/private-office.html" }
        ]
    },
    {
        company: "BMSTU",
        companyLink: "https://en.wikipedia.org/wiki/Bauman_Moscow_State_Technical_University",
        position: "Master's Degree in Computer Science",
        description: "Department IU7",
        period: "2019 - 2021",
        icon: "🎓",
        tags: ["Education"],
    },
    {
        company: "Technopark Mail.ru",
        companyLink: "https://park.vk.company",
        position: "Certificate Program in High-Load Systems",
        period: "2016 - 2018",
        description: "Completed VK’s (Mail.ru) rigorous two-year program focused on high-load system architecture and industrial software engineering.",
        icon: "🎓",
        tags: ["Education"],
        links: [
            { text: "Certificate", link: "https://web.archive.org/web/20210228004036/https://park.mail.ru/alumni/139/3225/" },
        ],
    },
    {
        company: "BMSTU",
        companyLink: "https://en.wikipedia.org/wiki/Bauman_Moscow_State_Technical_University",
        position: "Bachelor's Degree in Computer Science",
        description: "Department IU7",
        period: "2015 - 2019",
        icon: "🎓",
        tags: ["Education"],
    },
    {
        company: "School",
        position: "Student",
        period: "2004 - 2015",
        description: "The school with an emphasis on foreign languages",
        icon: "🎓",
        tags: ["Education"],
    },
        {
        company: "I was born",
        position: null,
        period: "1998",
        description: null,
        icon: "👶",
        tags: [],
    },
];

export const projects = [
    {
        name: "WatchTogether.online",
        role: "Author & Developer",
        description: "A seamless 'watch party' experience that unifies YouTube, HLS, and local media sources into a single synchronized room using Svelte. By integrating WebTorrent, the platform bypasses central servers to allow high-quality, serverless P2P video streaming between users.",
        tags: ["C++", "Rust", "Networking", "System Design"],
        link: "https://github.com/ed-asriyan"
    },
    {
        name: "AIGid",
        role: "Founder",
        description: "The QR-powered AI chatbot that acts as a personal sommelier for every guest, boosting your sales and delighting your customers.",
        tags: ["AI", "PMF", "Business"],
        link: "https://aigid.io"
    },
    {
        name: "lottie-converter",
        role: "Author & Developer",
        description: "⭐ 1k+ stars on GitHub. A CLI tool and library for converting Lottie animations to various formats including GIF, WEBP, and video. Built with C++ for performance and reliability.",
        tags: ["C++", "Rust", "Networking", "System Design"],
        link: "https://github.com/ed-asriyan"
    },
    {
        name: "M4M",
        role: "Author & Developer",
        description: "Various contributions to C++ and Rust ecosystems, focusing on memory safety and network protocols.",
        tags: ["IoT", "Python", "xbee", "Embedded"],
        link: "https://github.com/M4MController"
    },
    { 
        name: "SimpleX Catalog",
        role: "Author & Developer",
        description: "An open-source catalog of SimpleX servers and bots.",
        tags: ["Svelte", "TypeScript", "Rust"],
        link: "https://simplex-directory.asriyan.me",
    }
];
