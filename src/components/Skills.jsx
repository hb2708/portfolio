import { motion } from 'framer-motion';

const Skills = () => {
    // Featured skills with depth and context
    const featuredSkills = [
        {
            name: "React Native",
            level: "Expert",
            years: "5+",
            description: "Built and shipped 10+ production apps serving millions of users. Architected MoneyLion's mobile platform handling $1M+ weekly transactions.",
            highlights: ["New Architecture (Fabric)", "TurboModules & JSI", "Performance optimization", "Native modules"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            )
        },
        {
            name: "iOS Native",
            level: "Expert",
            years: "10+",
            description: "Deep expertise in UIKit and SwiftUI. Led iOS development for food delivery app serving 100K+ daily orders with zero downtime.",
            highlights: ["Swift", "UIKit", "SwiftUI", "Core Data", "Performance tuning"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
            )
        },
        {
            name: "System Design",
            level: "Advanced",
            years: "8+",
            description: "Architected scalable mobile systems handling 10× traffic spikes. Built design systems used by 35+ engineers across platforms.",
            highlights: ["Microservices", "CI/CD pipelines", "Design systems", "Performance at scale"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                    <circle cx="5" cy="19" r="2" />
                    <circle cx="12" cy="19" r="2" />
                    <circle cx="19" cy="19" r="2" />
                    <line x1="12" y1="7" x2="12" y2="10" />
                    <line x1="10" y1="12" x2="7" y2="12" />
                    <line x1="14" y1="12" x2="17" y2="12" />
                    <line x1="5" y1="14" x2="5" y2="17" />
                    <line x1="12" y1="14" x2="12" y2="17" />
                    <line x1="19" y1="14" x2="19" y2="17" />
                </svg>
            )
        }
    ];

    // Other skills - compact list
    const otherSkills = {
        "Frontend & Web": ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
        "Backend & APIs": ["Node.js", "REST APIs", "GraphQL", "Firebase"],
        "DevOps & Tools": ["Bitrise CI/CD", "Fastlane", "Git", "Xcode"],
        "Payments & Integration": ["Apple Pay", "Google Pay", "Stripe", "In-App Purchases"]
    };

    return (
        <section id="skills" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">03.</span> Technical Arsenal
                </motion.h2>

                {/* Featured Skills */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-text mb-8">Core Expertise</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                            >
                                {/* Icon and Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        {skill.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {skill.level}
                                        </div>
                                        <div className="text-xs text-muted mt-1">{skill.years} years</div>
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <h4 className="text-xl font-bold text-text mb-3">{skill.name}</h4>

                                {/* Description */}
                                <p className="text-sm text-muted mb-4 leading-relaxed">
                                    {skill.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {skill.highlights.map((highlight, idx) => (
                                        <span key={idx} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Other Skills - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-xl font-bold text-text mb-6">Also Proficient In</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(otherSkills).map(([category, skills], index) => (
                            <div key={index} className="bg-surface/50 p-4 rounded-lg border border-white/5">
                                <h4 className="text-sm font-semibold text-text mb-3">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, idx) => (
                                        <span key={idx} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
