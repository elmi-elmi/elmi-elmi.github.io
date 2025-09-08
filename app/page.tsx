import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

interface Experience {
    id: number
    title: string
    subtitle: string
    date: string
    items: string[]
}

interface Project {
    id: number
    name: string
    description: string
    achievements: string[]
    tech: string[]
}

interface ImpactCard {
    title: string
    bullets: string[]
}

interface ImpactSection {
    sectionTitle: string
    cards: ImpactCard[]
}

interface SocialLink {
    label: string
    href: string
    handle: string
    icon: 'github' | 'linkedin' | 'x'
}

const LABELS = {
    heroWhoAmI: "$ whoami",
    heroSkills: "$ skills",
    projects: "Highlighted Projects",
    achievements: "Key Achievements:",
    experience: "Experience",
    impact: "Impact & Achievements",
    contactInfoCmd: "$ contact --info",
    contactHeader: "Let's Connect",
    contactLocationCmd: "$ location --current",
    contactEmailCmd: "$ contact --email",
    contactResumeCmd: "$ cat resume.pdf",
    socialListCmd: "$ ls ./social-links",
};

const HERO = {
    name: "Alireza Elmi",
    role: "Frontend Developer",
    aboutBase: "building scalable, high-performance interfaces in React, Next.js, and Vue. Experienced across e‑commerce, multilingual sites, AI systems, and Meilisearch-powered search with a focus on reusable architecture and performance.",
    yearsStart: 2019,
    avatarSrc: "",
    location: {
        city: "Shiraz",
        countryCode: "IR",
    },
};

const SKILLS: string[] = [
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "Angular",
    "Tailwind CSS",
];

const PROJECTS: Project[] = [
    {
        id: 1,
        name: "ICIB – Multilingual Platform with Meilisearch",
        description: "International 10-language platform with advanced search and real-time analytics",
        achievements: [
            "Advanced dynamic filters integrated with Meilisearch",
            "Real-time analytics dashboard via WebSocket",
            "Reusable multi-step forms (Zod + React Hook Form)",
            "Supports video, audio, and text chat",
        ],
        tech: ["Next.js", "Meilisearch", "WebSocket", "React Hook Form", "Zod"],
    },
    {
        id: 2,
        name: "Adlieh AI – Full-stack AI Chat Platform",
        description: "Full-stack AI chatbot platform in early-stage production",
        achievements: [
            "End-to-end system with Laravel backend and Next.js API routes",
            "Integrated OpenAI ChatGPT API for conversational AI",
            "Modular, reusable frontend components",
            "Production-ready authentication and session management",
        ],
        tech: ["Laravel", "Next.js", "OpenAI", "TypeScript"],
    },
    {
        id: 3,
        name: "Depoint – E-commerce Checkout & Wallet",
        description: "Installments/cash shopping cart, wallet, and admin dashboard",
        achievements: [
            "Implemented complete checkout flows (cash, installments, wallet)",
            "Built admin dashboard for order and payment management",
            "Improved user experience with reusable form components",
            "Contributed to company revenue growth (100B Toman+/year)",
        ],
        tech: ["Next.js", "React", "Tailwind CSS", "React Hook Form"],
    },
];

const EXPERIENCES: Experience[] = [
    {
        id: 1,
        title: "Frontend Developer | Quarkino",
        subtitle: "Saas - Low Code/No Code",
        date: "Remote, May 2023 – Present",
        items: [
            "Proposed and led roadmap for migration from Vue 2 to Next.",
            "Designed scalable architecture and reusable service layers for cross-project",
            "Developed RESTful client-side services using React Query",
            "Built complex multi-step and reusable forms using Zod, React Hook Form, and ShadCN",
            "Fully implemented the checkout and payment system for Dipoint (cash, installments, wallet)",
            "Created a real-time dashboard with live updates using WebSocket",
            "Developed advanced dynamic filters integrated with Meilisearch",
            "Improved search performance from 600ms to under 250ms",
            "Designed and built an end-to-end AI chat web app (frontend and backend) using Laravel, Next.js server, and OpenAI ChatGPT API",
            "Participated in team hiring, onboarding, mentoring, and issue troubleshooting"
        ],
    },
    {
        id: 2,
        title: "Frontend Developer | Yasna Team",
        subtitle: "Web Application Development",
        date: "Remote, 2021 – 2023",
        items: [
            "Maintained and developed over 8 websites and built 4 new projects from scratch using Vue 2",
            "Implemented authentication pages (JWT, Google OAuth2, social logins), dashboards, blogs, etc.",
            "Maintained and optimized a custom CMS built with Vue 2"
        ]
    },
    {
        id: 3,
        title: "Frontend Developer | Ostad Bank",
        subtitle: "Private Tutoring Platform",
        date: "Remote, 2020 – 2021",
        items: [
            "Developed web applications using Nuxt.js",
        ]
    },
    {
        id: 4,
        title: "Frontend Developer | Hoom-IT",
        subtitle: "Web Application Development",
        date: "Remote, 2019 – 2020",
        items: [
            "Built web applications using Vue 2",
        ]
    },
];

const IMPACT: ImpactSection[] = [
    {
        sectionTitle: "System Performance",
        cards: [
            {
                title: "Search & Filters",
                bullets: [
                    "Improved search performance from 600ms to under 250ms",
                    "Implemented advanced dynamic filters with Meilisearch",
                    "Reduced client-side overhead via reusable components",
                ],
            },
            {
                title: "Real-time UX",
                bullets: [
                    "Built real-time dashboard with live updates (WebSocket)",
                    "Optimized forms and validation (React Hook Form + Zod)",
                    "Improved perceived performance across pages",
                ],
            },
        ],
    },
    {
        sectionTitle: "Architecture & Delivery",
        cards: [
            {
                title: "Scalability",
                bullets: [
                    "Designed scalable architecture and reusable service layers",
                    "Introduced patterns for SSR/SSG/ISR where appropriate",
                    "Reduced technical debt via consistent coding standards",
                ],
            },
            {
                title: "Team & Process",
                bullets: [
                    "Participated in hiring, onboarding, and mentoring",
                    "Wrote documentation and improved issue troubleshooting",
                    "Drove migration roadmaps (e.g., Vue 2 to Next)",
                ],
            },
        ],
    },
    {
        sectionTitle: "Core Stack",
        cards: [
            {
                title: "Frontend",
                bullets: [
                    "React, Next.js, Vue, Tailwind CSS",
                    "React Query, Zustand, React Hook Form, Zod",
                    "SSR, SSG, ISR, API Routes",
                ],
            },
            {
                title: "Backend & Tools",
                bullets: [
                    "Node.js, Laravel, REST, GraphQL",
                    "PostgreSQL, Redis, Docker",
                    "Testing with Jest; ESLint & Prettier",
                ],
            },
        ],
    },
];

const CONTACT = {
    location: `${HERO.location.city}, ${HERO.location.countryCode}`,
    email: "shahrokhelmi@gmail.com",
    resumeHref: "/alireza-elmi-resume.pdf",
    socials: [
        { label: "GitHub", href: "https://github.com/elmi-elmi", handle: "@elmi-elmi", icon: 'github' as const },
        { label: "LinkedIn", href: "https://linkedin.com/in/elmialireza", handle: "Alireza Elmi", icon: 'linkedin' as const },
        // { label: "X", href: "#", handle: "@elmialireza", icon: 'x' as const },
    ] satisfies SocialLink[]
};

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
    if (icon === 'github') {
        return (
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
        );
    }
    if (icon === 'linkedin') {
        return (
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
        );
    }
    return (
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
    );
}

export default function Home() {
    const years = Math.max(1, new Date().getFullYear() - HERO.yearsStart);
    const about = `Frontend developer with ${years}+ years ${HERO.aboutBase}`;

    return (
        <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden antialiased">
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" aria-hidden="true"></div>
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                </div>
                <div className="relative z-10 max-w-4xl w-full mx-4">
                    <div className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6">
                        <div className="flex items-center gap-4 mb-4">
                            {HERO.avatarSrc && <div className="relative w-14 h-14 rounded-full overflow-hidden ring-1 ring-gray-800">
                                <Image src={HERO.avatarSrc} alt={`${HERO.name} portrait`} fill className="object-cover" sizes="56px" />
                            </div>}
                            <div className="flex items-center gap-2" aria-hidden="true">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="font-mono">
                            <p className="text-green-500">{LABELS.heroWhoAmI}</p>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3">{HERO.name}</h1>
                            <p className="text-gray-400 mb-4">{HERO.role}</p>
                            <p className="text-gray-300 mb-6">{about}</p>
                            <p className="text-green-500">{LABELS.heroSkills}</p>
                            <div className="flex flex-wrap gap-2 mt-2" aria-label="Key skills">
                                {SKILLS.map((s)=> (
                                    <span key={s} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="#projects" aria-label="Scroll to projects" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </Link>
            </section>

            <section id="projects" className="py-20 px-4  bg-gradient-to-t from-green-700/10 to-blue-700/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">{LABELS.projects}</h2>
                    <div className="grid grid-cols-1 gap-8">
                        {PROJECTS.map((project)=> (
                            <article key={project.id} className="bg-gray-900/50  rounded-xl p-6 backdrop-blur-sm border border-gray-800">
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-2">{LABELS.achievements}</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {project.achievements.map((a, i)=> (
                                            <li key={i}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                                    {project.tech.map((t)=> (
                                        <span key={t} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">{t}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="py-20 px-4 bg-gradient-to-b from-green-700/10 to-blue-700/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">{LABELS.experience}</h2>
                    <div className="grid grid-cols-1 gap-6">
                                            
                        {EXPERIENCES.map((exp)=> (
                            <article key={exp.id} className="bg-gray-900/50 relative  rounded-xl p-6 backdrop-blur-sm border border-gray-800">

                               <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <span className="text-sm text-gray-400"><time>{exp.date}</time></span>
                                </header>
                                <p className="text-gray-400 mt-1">{exp.subtitle}</p>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                                    {exp.items.map((item, idx)=> (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                               
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="impact" className="py-20 px-4 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">{LABELS.impact}</h2>
                    <div className="grid grid-cols-1 gap-12">
                        {IMPACT.map((sec, idx)=> (
                            <div key={idx}>
                                <h3 className="text-xl font-semibold mb-6 text-green-400">{sec.sectionTitle}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {sec.cards.map((card, i)=> (
                                        <div key={i} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                                            <h4 className="text-lg font-semibold text-gray-300">{card.title}</h4>
                                            <ul className="mt-2 space-y-2 text-gray-400">
                                                {card.bullets.map((b, bi)=> (
                                                    <li key={bi}>• {b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" aria-hidden="true"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-mono">
                                <p className="text-green-500 mb-2">{LABELS.contactInfoCmd}</p>
                                <h2 className="text-3xl font-bold mb-8 text-gray-200">{LABELS.contactHeader}</h2>
                                <p className="text-green-500 mb-2">{LABELS.contactLocationCmd}</p>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>{CONTACT.location}</span>
                                </div>
                                <p className="text-green-500 mt-8 mb-2">{LABELS.contactEmailCmd}</p>
                                <a href={`mailto:${CONTACT.email}`} className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors">{CONTACT.email}</a>
                                <p className="text-green-500 mt-8 mb-2">{LABELS.contactResumeCmd}</p>
                                <a href={CONTACT.resumeHref} target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
                                    </svg>
                                    <span>Download Resume</span>
                                </a>
                                <p className="text-green-500 mt-8 mb-4">{LABELS.socialListCmd}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {CONTACT.socials.map((s)=> (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} profile`} className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group">
                                            <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                                                <SocialIcon icon={s.icon} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-200">{s.label}</p>
                                                <p className="text-sm text-gray-400">{s.handle}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Script id="resume-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: HERO.name,
                jobTitle: HERO.role,
                email: `mailto:${CONTACT.email}`,
                address: { '@type': 'PostalAddress', addressLocality: HERO.location.city, addressCountry: HERO.location.countryCode },
                sameAs: CONTACT.socials.filter(s=> s.href.startsWith('http')).map(s=> s.href),
                knowsAbout: ['TypeScript','React','Next.js','Vue','Tailwind CSS','React Query','WebSocket','Meilisearch','Zod','React Hook Form','Node.js','Laravel'],
                worksFor: [
                    { '@type': 'Organization', name: 'Quarkino' },
                    { '@type': 'Organization', name: 'Yasna Team' },
                    { '@type': 'Organization', name: 'Ostad Bank' },
                    { '@type': 'Organization', name: 'Hoom-IT' }
                ]
            }) }} />
        </main>
    );
}
