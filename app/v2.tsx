import Script from 'next/script'

interface Experience {
    id: number
    title: string
    subtitle: string
    date: string
    items: string[]
}

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
]

const V2 = ()=>{
    return  <div className="antialiased">
        <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" aria-hidden="true"></div>
                <div className="absolute inset-0" aria-hidden="true">
                    <div
                        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                </div>
                <div className="relative z-10 max-w-4xl w-full mx-4">
                    <div
                        className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"

                        style={{opacity: 1, transform: "none"}}>
                        <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono"><p className="text-green-500">$ whoami</p><h1
                            className="text-4xl md:text-5xl font-bold mt-2 mb-4">Alireza Elmi</h1><p
                            className="text-gray-400 mb-2">Frontend Developer</p><p
                            className="text-green-500">$ skills</p>
                            <div className="flex flex-wrap gap-2 mt-2" aria-label="Key skills"><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">TypeScript</span><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">React</span><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Next.js</span><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Vue</span><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Tailwind CSS</span><span
                                className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">React Query</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#projects" aria-label="Scroll to projects" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </a>
            </section>
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center"
                                                       style={{opacity: 1}}>Highlighted Projects</h2>
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
                             style={{opacity: 1, transform: "none"}}><h3 className="text-2xl font-bold mb-4">ICIB – Multilingual Platform with Meilisearch</h3><p className="text-gray-400 mb-6">International 10-language platform with advanced search and real-time analytics</p>
                            <div className="mb-6"><h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Advanced dynamic filters integrated with Meilisearch</li>
                                    <li>Real-time analytics dashboard via WebSocket</li>
                                    <li>Reusable multi-step forms (Zod + React Hook Form)</li>
                                    <li>Supports video, audio, and text chat</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2" aria-label="Technologies used"><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Next.js</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Meilisearch</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">WebSocket</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">React Hook Form</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Zod</span>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
                             style={{opacity: 1, transform: "none"}}><h3 className="text-2xl font-bold mb-4">Adlieh AI – Full-stack AI Chat Platform</h3><p className="text-gray-400 mb-6">Full-stack AI chatbot platform in early-stage production</p>
                            <div className="mb-6"><h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>End-to-end system with Laravel backend and Next.js API routes</li>
                                    <li>Integrated OpenAI ChatGPT API for conversational AI</li>
                                    <li>Modular, reusable frontend components</li>
                                    <li>Production-ready authentication and session management</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2" aria-label="Technologies used"><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Laravel</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Next.js</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">OpenAI</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">TypeScript</span>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
                             style={{opacity: 1, transform: "none"}}><h3 className="text-2xl font-bold mb-4">Depoint – E-commerce Checkout &amp; Wallet</h3><p className="text-gray-400 mb-6">Installments/cash shopping cart, wallet, and admin dashboard</p>
                            <div className="mb-6"><h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Implemented complete checkout flows (cash, installments, wallet)</li>
                                    <li>Built admin dashboard for order and payment management</li>
                                    <li>Improved user experience with reusable form components</li>
                                    <li>Contributed to company revenue growth (100B Toman+/year)</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2" aria-label="Technologies used"><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Next.js</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">React</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">Tailwind CSS</span><span
                                className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">React Hook Form</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className="py-20 px-4">
                <div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center"
                                                       style={{opacity: 1}}>Experience</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {EXPERIENCES.map((exp)=> (
                            <article key={exp.id} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800" style={{opacity: 1, transform: "none"}}>
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
                <div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold mb-12 text-center"
                                                       style={{opacity: 1}}>Impact &amp; Achievements</h2>
                    <div className="grid grid-cols-1 gap-12">
                        <div><h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Search &amp; Filters</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• Improved search performance from 600ms to under 250ms</li>
                                        <li>• Implemented advanced dynamic filters with Meilisearch</li>
                                        <li>• Reduced client-side overhead via reusable components</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Real-time UX</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• Built real-time dashboard with live updates (WebSocket)</li>
                                        <li>• Optimized forms and validation (React Hook Form + Zod)</li>
                                        <li>• Improved perceived performance across pages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div><h3
                            className="text-xl font-semibold mb-6 text-green-400">Architecture &amp; Delivery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Scalability</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• Designed scalable architecture and reusable service layers</li>
                                        <li>• Introduced patterns for SSR/SSG/ISR where appropriate</li>
                                        <li>• Reduced technical debt via consistent coding standards</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Team &amp; Process</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• Participated in hiring, onboarding, and mentoring</li>
                                        <li>• Wrote documentation and improved issue troubleshooting</li>
                                        <li>• Drove migration roadmaps (e.g., Vue 2 to Next)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div><h3
                            className="text-xl font-semibold mb-6 text-green-400">Core Stack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Frontend</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• React, Next.js, Vue, Tailwind CSS</li>
                                        <li>• React Query, Zustand, React Hook Form, Zod</li>
                                        <li>• SSR, SSG, ISR, API Routes</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                                     style={{opacity: 1, transform: "none"}}><h4
                                    className="text-lg font-semibold text-gray-300">Backend &amp; Tools</h4>
                                    <ul className="mt-2 space-y-2 text-gray-400">
                                        <li>• Node.js, Laravel, REST, GraphQL</li>
                                        <li>• PostgreSQL, Redis, Docker</li>
                                        <li>• Testing with Jest; ESLint &amp; Prettier</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
                        style={{opacity: 1}}>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" aria-hidden="true"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-mono"><p className="text-green-500 mb-2">$ contact --info</p><h2
                                className="text-3xl font-bold mb-8 text-gray-200">Let's Connect</h2><p
                                className="text-green-500 mb-2">$ location --current</p>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>Shiraz, IR</span></div>
                                <p className="text-green-500 mt-8 mb-2">$ contact --email</p><a
                                    href="mailto:shahrokhelmi@gmail.com"
                                    className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors">shahrokhelmi@gmail.com</a>
                                <p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p><a
                                    href="/alireza-elmi-resume.pdf" target="_blank" rel="noopener noreferrer" download
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
                                    </svg>
                                    <span>Download Resume</span></a><p className="text-green-500 mt-8 mb-4">$ ls
                                    ./social-links</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><a href="https://github.com/elmi-elmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"
                                                                                                         className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group">
                                    <div
                                        className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                        </svg>
                                    </div>
                                    <div><p className="font-semibold text-gray-200">GitHub</p><p
                                        className="text-sm text-gray-400">@elmi-elmi</p></div>
                                </a><a href="https://linkedin.com/in/elmialireza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
                                       className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group">
                                    <div
                                        className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                        </svg>
                                    </div>
                                    <div><p className="font-semibold text-gray-200">LinkedIn</p><p
                                        className="text-sm text-gray-400">Alireza Elmi</p></div>
                                </a><a href="#" aria-label="X profile"
                                       className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group">
                                    <div
                                        className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                        </svg>
                                    </div>
                                    <div><p className="font-semibold text-gray-200">X</p><p
                                        className="text-sm text-gray-400">@elmialireza</p></div>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Script id="resume-jsonld" type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Alireza Elmi',
                        jobTitle: 'Frontend Developer',
                        email: 'mailto:shahrokhelmi@gmail.com',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Shiraz',
                            addressCountry: 'IR'
                        },
                        sameAs: [
                            'https://github.com/elmi-elmi',
                            'https://linkedin.com/in/elmialireza'
                        ],
                        knowsAbout: [
                            'TypeScript','React','Next.js','Vue','Tailwind CSS','React Query','WebSocket','Meilisearch','Zod','React Hook Form','Node.js','Laravel'
                        ],
                        worksFor: [
                            { '@type': 'Organization', name: 'Quarkino' },
                            { '@type': 'Organization', name: 'Yasna Team' },
                            { '@type': 'Organization', name: 'Ostad Bank' },
                            { '@type': 'Organization', name: 'Hoom-IT' }
                        ]
                    })
                }} />
    </div>
}

export default V2


