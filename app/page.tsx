import React from 'react';

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
    links?: {
        github?: string
        demo?: string
    }
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
    icon: 'github' | 'linkedin' | 'x' | 'website'
}

const LABELS = {
    heroWhoAmI: "whoami",
    heroSkills: "skills --primary",
    projects: "Featured Projects",
    achievements: "Key Achievements:",
    experience: "Professional Experience",
    impact: "Impact & Technical Skills",
    education: "Education & Background",
    contactInfoCmd: "contact --info",
    contactHeader: "Let's Connect",
    contactLocationCmd: "location --current",
    contactEmailCmd: "contact --email",
    contactResumeCmd: "cat resume.pdf",
    socialListCmd: "ls ./social-links",
    phoneCmd: "contact --phone",
};

const HERO = {
    name: "Alireza Elmi",
    role: "Senior Frontend Developer",
    aboutBase: "Specialized in building scalable, high-performance web applications.",
    yearsStart: 2020,
    avatarSrc: "",
    location: {
        city: "Shiraz",
        countryCode: "IR",
    },
    phone: "+989387691178"
};

const SKILLS_CATEGORIES = {
    "Languages & Frameworks": ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Nuxt.js", "HTML5", "CSS3"],
    "UI & Styling": ["Tailwind CSS", "ShadCN", "SCSS", "Vuetify", "Bootstrap", "Responsive Design"],
    "State Management": ["React Query", "Zustand", "React Hook Form", "Zod"],
    "Backend": ["Laravel", "Node.js", "NestJS", "Django", "REST API", "GraphQL"],
    "Tools & DevOps": ["Git", "Docker", "CI/CD", "Jest", "ESLint", "Prettier", "Linux"]
};

const PRIMARY_SKILLS: string[] = [
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Tailwind CSS",
    "Laravel",
];

const PROJECTS: Project[] = [
    {
        id: 1,
        name: "ICIB - International Multilingual Platform",
        description: "Advanced 10-language platform with intelligent search and real-time analytics",
        achievements: [
            "Built dynamic filters with Meilisearch integration for lightning-fast search",
            "Developed real-time analytics dashboard using WebSocket (Bugsy)",
            "Created reusable multi-step forms with Zod validation and React Hook Form",
            "Implemented video, audio, and text chat functionality",
            "Optimized performance for international users across multiple regions"
        ],
        tech: ["Next.js", "TypeScript", "Meilisearch", "WebSocket", "React Hook Form", "Zod", "Tailwind CSS"],
        links: {
            demo: "#" // اگر لینک دمو دارید
        }
    },
    {
        id: 2,
        name: "Adlieh AI - Intelligent Chat Platform",
        description: "Full-stack AI-powered chatbot platform with advanced conversational capabilities",
        achievements: [
            "Architected end-to-end system with Laravel backend and Next.js API routes",
            "Integrated OpenAI ChatGPT API for sophisticated conversational AI",
            "Built modular, reusable frontend components for scalability",
            "Implemented production-ready authentication and session management",
            "Currently in early-stage production with growing user base"
        ],
        tech: ["Laravel", "Next.js", "OpenAI API", "TypeScript", "PostgreSQL", "Redis"],
        links: {
            demo: "#"
        }
    },
    {
        id: 3,
        name: "Depoint - E-commerce & Payment System",
        description: "Complete e-commerce solution with advanced payment processing and admin dashboard",
        achievements: [
            "Developed comprehensive checkout system (cash, installments, wallet payments)",
            "Built sophisticated admin dashboard for order and payment management",
            "Created reusable UI components improving development speed by 40%",
            "Contributed to 100+ billion Toman annual revenue growth",
            "Implemented advanced inventory management features"
        ],
        tech: ["Next.js", "React", "Tailwind CSS", "React Hook Form", "Zustand", "TypeScript"],
        links: {
            demo: "#"
        }
    }
];

const EXPERIENCES: Experience[] = [
    {
        id: 1,
        title: "Senior Frontend Developer | Quarkino",
        subtitle: "SaaS - Low Code/No Code Platform",
        date: "Remote | May 2023 – Present",
        items: [
            "Led migration strategy from Vue 2 to Next.js, improving performance by 60%",
            "Architected scalable service layers and reusable components for cross-project efficiency",
            "Developed advanced RESTful client-side services using React Query",
            "Built complex multi-step forms with Zod validation and ShadCN UI components",
            "Implemented complete checkout and payment system for Depoint platform",
            "Created real-time dashboard with live updates using WebSocket technology",
            "Optimized search performance from 600ms to under 250ms using Meilisearch",
            "Designed and developed full-stack AI chat application with Laravel and OpenAI",
            "Mentored junior developers and participated in hiring and onboarding processes"
        ],
    },
    {
        id: 2,
        title: "Frontend Developer | Yasna Team",
        subtitle: "Web Application Development Agency",
        date: "Remote | 2021 – 2023",
        items: [
            "Maintained and enhanced 8+ production websites serving thousands of users",
            "Built 4 new projects from scratch using Vue 2 and modern development practices",
            "Implemented secure authentication systems (JWT, OAuth2, social logins)",
            "Developed and optimized custom CMS platform built with Vue 2",
            "Created responsive dashboards and blog management systems"
        ]
    },
    {
        id: 3,
        title: "Frontend Developer | Ostad Bank",
        subtitle: "Private Tutoring & Education Platform",
        date: "Remote | 2020 – 2021",
        items: [
            "Developed interactive web applications using Nuxt.js framework",
            "Built responsive educational interfaces optimized for various devices",
            "Implemented user-friendly learning management features"
        ]
    },
    {
        id: 4,
        title: "Frontend Developer | Hoom-IT",
        subtitle: "Web Application Development",
        date: "Remote | 2019 – 2020",
        items: [
            "Developed modern web applications using Vue 2 framework",
            "Created responsive user interfaces with focus on user experience",
            "Collaborated with design teams to implement pixel-perfect designs"
        ]
    }
];

const EDUCATION = {
    masters: {
        degree: "M.Sc. in Electrical Engineering (Control Systems)",
        university: "University of Tehran",
        date: "2019 – 2022",
        achievement: "Ranked 25th in National Master's Entrance Exam (2019)"
    },
    bachelors: {
        degree: "B.Sc. in Electrical Engineering (Power Systems)",
        university: "Bu-Ali Sina University",
        date: "2012 – 2017",
        achievement: "Member of University Robotics Team"
    }
};

const IMPACT: ImpactSection[] = [
    {
        sectionTitle: "Performance & Optimization",
        cards: [
            {
                title: "Search & Database",
                bullets: [
                    "Improved search performance from 600ms to <250ms with Meilisearch",
                    "Implemented advanced dynamic filters for complex data queries",
                    "Optimized database queries reducing server load by 45%",
                    "Built efficient caching strategies for high-traffic applications"
                ],
            },
            {
                title: "Real-time & UX",
                bullets: [
                    "Developed real-time dashboards with WebSocket integration",
                    "Created smooth form validation with React Hook Form + Zod",
                    "Improved page load times by 60% through code optimization",
                    "Enhanced user experience with progressive loading strategies"
                ],
            },
        ],
    },
    {
        sectionTitle: "Architecture & Leadership",
        cards: [
            {
                title: "System Design",
                bullets: [
                    "Designed scalable architectures for multiple high-traffic projects",
                    "Implemented SSR/SSG/ISR patterns for optimal performance",
                    "Created reusable component libraries reducing development time",
                    "Established coding standards and best practices across teams"
                ],
            },
            {
                title: "Team Impact",
                bullets: [
                    "Led hiring processes and onboarded 5+ new developers",
                    "Mentored junior developers improving team productivity",
                    "Managed complex migration projects (Vue 2 → Next.js)",
                    "Reduced bug reports by 50% through improved documentation"
                ],
            },
        ],
    },
    {
        sectionTitle: "Technical Expertise",
        cards: [
            {
                title: "Frontend Stack",
                bullets: [
                    "Expert in React, Next.js, Vue.js ecosystem",
                    "Advanced TypeScript and modern JavaScript (ES6+)",
                    "Proficient in Tailwind CSS, ShadCN, responsive design",
                    "State management with React Query, Zustand"
                ],
            },
            {
                title: "Full-Stack & DevOps",
                bullets: [
                    "Backend development with Laravel, Node.js, NestJS",
                    "Database design with PostgreSQL, Redis optimization",
                    "CI/CD pipelines with Docker and modern deployment",
                    "Testing strategies with Jest and end-to-end testing"
                ],
            },
        ],
    },
];

const CONTACT = {
    location: `${HERO.location.city}, ${HERO.location.countryCode}`,
    email: "shahrokhelmi@gmail.com",
    phone: HERO.phone,
    resumeHref: "/alireza-elmi-resume.pdf",
    socials: [
        { label: "GitHub", href: "https://github.com/elmi-elmi", handle: "@elmi-elmi", icon: 'github' as const },
        { label: "LinkedIn", href: "https://linkedin.com/in/elmialireza", handle: "Alireza Elmi", icon: 'linkedin' as const },
        { label: "Website", href: "#", handle: "Portfolio", icon: 'website' as const },
    ] satisfies SocialLink[]
};

const LANGUAGES = [
    { name: "Persian", level: "Native" },
    { name: "English", level: "Upper Intermediate" },
    { name: "German", level: "Beginner" }
];

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
    const iconClass = "w-5 h-5 text-green-400";

    if (icon === 'github') {
        return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
        );
    }
    if (icon === 'linkedin') {
        return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
        );
    }
    if (icon === 'website') {
        return (
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 019 9"></path>
            </svg>
        );
    }
    return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
    );
}

export default function Portfolio() {
    const currentYear = new Date().getFullYear();
    const years = Math.max(1, currentYear - HERO.yearsStart);
    const about = `Senior Frontend Developer with ${years}+ years of experience ${HERO.aboutBase}`;

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden antialiased">
            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/10 opacity-20" aria-hidden="true"></div>

                {/*<div className="absolute inset-0" aria-hidden="true">*/}
                {/*    <div className="absolute inset-0 opacity-20">*/}
                {/*        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <defs>*/}
                {/*                <pattern id="dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">*/}
                {/*                    <circle cx="30" cy="30" r="1" fill="#9C92AC" fillOpacity="0.3"/>*/}
                {/*                </pattern>*/}
                {/*            </defs>*/}
                {/*            <rect width="100%" height="100%" fill="url(#dot-pattern)"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="relative z-10 max-w-5xl w-full mx-4">
                    <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            {HERO.avatarSrc &&
                                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-gray-700/50">
                                    <img src={HERO.avatarSrc} alt={`${HERO.name} portrait`} className="w-full h-full object-cover" />
                                </div>
                            }
                            <div className="flex items-center gap-2" aria-hidden="true">
                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>

                        <div className="font-mono space-y-4">
                            <p className="text-green-400 text-lg">
                                <span className="mr-2">$</span>
                                {LABELS.heroWhoAmI}
                            </p>

                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                    {HERO.name}
                                </h1>
                                <p className="text-xl md:text-2xl text-green-400 font-semibold">{HERO.role}</p>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                                {about}
                            </p>

                            <div className="pt-4">
                                <p className="text-green-400 text-lg mb-3">
                                    <span className="mr-2">$</span>
                                    {LABELS.heroSkills}
                                </p>
                                <div className="flex flex-wrap gap-3" aria-label="Primary technical skills">
                                    {PRIMARY_SKILLS.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            {LABELS.projects}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Showcase of impactful projects demonstrating advanced technical skills and business value
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {PROJECTS.map((project, index) => (
                            <article
                                key={project.id}
                                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-xl"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {project.name}
                                            </h3>
                                            {project.links && (
                                                <div className="flex gap-2">
                                                    {project.links.demo && (
                                                        <a href={project.links.demo}
                                                           className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-colors text-sm">
                                                            Demo
                                                        </a>
                                                    )}
                                                    {project.links.github && (
                                                        <a href={project.links.github}
                                                           className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-lg border border-gray-600/30 hover:bg-gray-600/30 transition-colors text-sm">
                                                            Code
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-green-400">
                                                {LABELS.achievements}
                                            </h4>
                                            <ul className="space-y-2">
                                                {project.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-sm px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 px-4 bg-gradient-to-b from-black/50 to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {LABELS.experience}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {years}+ years of progressive experience in frontend development and technical leadership
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 hidden md:block"></div>

                        <div className="space-y-8">
                            {EXPERIENCES.map((exp, index) => (
                                <article
                                    key={exp.id}
                                    className=" bg-gradient-to-br from-gray-900/90 to-gray-800/60 rounded-2xl p-8 ml-0 md:ml-20 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-xl"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -start-14 top-8 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 hidden md:block"></div>

                                    <header className="mb-6">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-2">
                                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                                {exp.title}
                                            </h3>
                                            <span className="text-sm md:text-base text-green-400 font-medium">
                                                {exp.date}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-lg">{exp.subtitle}</p>
                                    </header>

                                    <ul className="space-y-3">
                                        {exp.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-300 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-16 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {LABELS.education}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                            <h3 className="text-xl font-semibold text-white mb-2">{EDUCATION.masters.degree}</h3>
                            <p className="text-green-400 font-medium mb-1">{EDUCATION.masters.university}</p>
                            <p className="text-gray-400 mb-3">{EDUCATION.masters.date}</p>
                            <p className="text-purple-300 text-sm">{EDUCATION.masters.achievement}</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                            <h3 className="text-xl font-semibold text-white mb-2">{EDUCATION.bachelors.degree}</h3>
                            <p className="text-green-400 font-medium mb-1">{EDUCATION.bachelors.university}</p>
                            <p className="text-gray-400 mb-3">{EDUCATION.bachelors.date}</p>
                            <p className="text-purple-300 text-sm">{EDUCATION.bachelors.achievement}</p>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">Languages</h3>
                        <div className="flex justify-center gap-6 flex-wrap">
                            {LANGUAGES.map((lang) => (
                                <div key={lang.name} className="text-center">
                                    <p className="text-white font-medium">{lang.name}</p>
                                    <p className="text-gray-400 text-sm">{lang.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Skills Section */}
            <section id="impact" className="py-24 px-4 bg-gradient-to-b from-black/50 to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            {LABELS.impact}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive technical expertise and measurable business impact
                        </p>
                    </div>

                    <div className="space-y-16">
                        {IMPACT.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-400">
                                    {section.sectionTitle}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {section.cards.map((card, i) => (
                                        <div
                                            key={i}
                                            className="bg-gradient-to-br from-gray-900/90 to-gray-800/60 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>
                                            <ul className="space-y-3">
                                                {card.bullets.map((bullet, bi) => (
                                                    <li key={bi} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-300 leading-relaxed">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technical Skills Grid */}
                    <div className="mt-20">
                        <h3 className="text-3xl font-bold mb-12 text-center text-purple-400">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => (
                                <div key={category} className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                    <h4 className="text-lg font-bold text-purple-300 mb-4">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 py-1 bg-purple-500/10 text-purple-200 rounded border border-purple-500/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative p-10 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-700/50 bg-black/70 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/5" aria-hidden="true"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-8" aria-hidden="true">
                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            <div className="font-mono space-y-8">
                                <div>
                                    <p className="text-green-400 text-lg mb-2">
                                        <span className="mr-2">$</span>
                                        {LABELS.contactInfoCmd}
                                    </p>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {LABELS.contactHeader}
                                    </h2>
                                </div>

                                {/* Location */}
                                <div>
                                    <p className="text-green-400 text-lg mb-3">
                                        <span className="mr-2">$</span>
                                        {LABELS.contactLocationCmd}
                                    </p>
                                    <div className="flex items-center gap-3 text-gray-300 text-lg">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span>{CONTACT.location}</span>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <p className="text-green-400 text-lg mb-3">
                                        <span className="mr-2">$</span>
                                        {LABELS.phoneCmd}
                                    </p>
                                    <a
                                        href={`tel:${CONTACT.phone}`}
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors text-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        {CONTACT.phone}
                                    </a>
                                </div>

                                {/* Email */}
                                <div>
                                    <p className="text-green-400 text-lg mb-3">
                                        <span className="mr-2">$</span>
                                        {LABELS.contactEmailCmd}
                                    </p>
                                    <a
                                        href={`mailto:${CONTACT.email}`}
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        {CONTACT.email}
                                    </a>
                                </div>

                                {/* Resume */}
                                <div>
                                    <p className="text-green-400 text-lg mb-3">
                                        <span className="mr-2">$</span>
                                        {LABELS.contactResumeCmd}
                                    </p>
                                    <a
                                        href={CONTACT.resumeHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-colors text-lg"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
                                        </svg>
                                        <span>Download Resume</span>
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <p className="text-green-400 text-lg mb-4">
                                        <span className="mr-2">$</span>
                                        {LABELS.socialListCmd}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {CONTACT.socials.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${social.label} profile`}
                                                className="flex items-center gap-4 px-4 py-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 group hover:border-gray-600/50"
                                            >
                                                <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                                                    <SocialIcon icon={social.icon} />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                                                        {social.label}
                                                    </p>
                                                    <p className="text-sm text-gray-400">{social.handle}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-black/80 border-t border-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-400 mb-4">
                        Built with React, Next.js & Tailwind CSS
                    </p>
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {HERO.name}. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}