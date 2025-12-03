import { motion } from 'framer-motion';
import { ReactNativeIcon, IOSIcon, SystemDesignIcon } from './Icons';

const Skills = () => {
    // Featured skills with depth and context
    const featuredSkills = [
        {
            name: "React Native",
            level: "Expert",
            years: "5+",
            description: "Built and shipped 10+ production apps serving millions of users. Architected MoneyLion's mobile platform handling $1M+ weekly transactions.",
            highlights: ["New Architecture (Fabric)", "TurboModules & JSI", "Performance optimization", "Native modules"],
            icon: <ReactNativeIcon className="w-8 h-8" />
        },
        {
            name: "iOS Native",
            level: "Expert",
            years: "10+",
            description: "Deep expertise in UIKit and SwiftUI. Led iOS development for food delivery app serving 100K+ daily orders with zero downtime.",
            highlights: ["Swift", "UIKit", "SwiftUI", "Core Data", "Performance tuning"],
            icon: <IOSIcon className="w-8 h-8" />
        },
        {
            name: "System Design",
            level: "Advanced",
            years: "8+",
            description: "Architected scalable mobile systems handling 10× traffic spikes. Built design systems used by 35+ engineers across platforms.",
            highlights: ["Microservices", "CI/CD pipelines", "Design systems", "Performance at scale"],
            icon: <SystemDesignIcon className="w-8 h-8" />
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
