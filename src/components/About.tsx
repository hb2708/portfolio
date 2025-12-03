import { motion } from 'framer-motion';
import {
    DayOneIcon,
    CrossPlatformIcon,
    RemoteIcon,
    VisaIcon,
    PsychologicalSafetyIcon,
    AutomationIcon,
    ScalableIcon
} from './Icons';

const About = () => {
    const valueProps = [
        {
            title: "Day One Impact",
            description: "I've shipped production code on my first week at every company. No 6-month ramp-up I dive into legacy codebases and start delivering immediately.",
            icon: <DayOneIcon className="w-6 h-6" />
        },
        {
            title: "Cross-Platform Expertise",
            description: "Fluent in React Native, iOS native, and web. I can architect solutions that share code intelligently and ship features across all platforms simultaneously.",
            icon: <CrossPlatformIcon className="w-6 h-6" />
        },
        {
            title: "Remote-First Mindset",
            description: "Led distributed teams across 3 continents. I excel at async communication, documentation, and building systems that don't require me to be the bottleneck.",
            icon: <RemoteIcon className="w-6 h-6" />
        }
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center">
                            <span className="text-primary mr-2">01.</span> About Me
                        </h2>
                        <h3 className="text-2xl font-bold text-text mb-6">
                            Staff Engineer & <span className="text-primary">Product Builder</span>
                        </h3>
                        <p className="text-muted mb-6 leading-relaxed text-lg">
                            I specialize in <span className="text-text font-medium">React Native</span> and <span className="text-text font-medium">iOS</span> development.
                            With 10+ years of experience, I build apps that work well and are easy to use.
                        </p>
                        <p className="text-muted mb-6 leading-relaxed text-lg">
                            Currently leading mobile engineering at <span className="text-text font-medium">MoneyLion</span>, I help the team solve hard technical problems to reach business goals.
                        </p>

                        {/* Subtle visa status badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm">
                            <VisaIcon className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-medium">No visa sponsorship required (Malaysia / India)</span>
                        </div>
                    </motion.div>

                    {/* Philosophy Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2 bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-bold text-text mb-6">How I Lead</h3>

                        {/* Impact-focused intro instead of generic quote */}
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-lg text-text font-semibold mb-2">
                                Mentored 10+ engineers • Built systems serving millions • Led teams across 3 continents
                            </p>
                            <p className="text-muted text-sm">
                                My leadership philosophy: Empower people, automate toil, ship value.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Three Pillars - Full Width Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-24"
                >
                    <h3 className="text-2xl font-bold text-text mb-8 text-center">
                        Great engineering teams are built on <span className="text-primary">three pillars</span>
                    </h3>

                    {/* Enhanced bullet points with icons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <PsychologicalSafetyIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="text-text font-bold mb-2 text-lg">Psychological Safety</h5>
                                <p className="text-muted text-sm leading-relaxed">Creating a safe space where everyone can share ideas and learn from mistakes.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <AutomationIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="text-text font-bold mb-2 text-lg">Automation First</h5>
                                <p className="text-muted text-sm leading-relaxed">Automating repetitive tasks so the team can focus on building new features.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <ScalableIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h5 className="text-text font-bold mb-2 text-lg">Scalable Architecture</h5>
                                <p className="text-muted text-sm leading-relaxed">Building simple, maintainable systems that grow with the business.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Work With Me - Employer Value Props */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-text mb-8 text-center">
                        Why <span className="text-primary">Work With Me</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valueProps.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold text-text mb-3">{value.title}</h4>
                            <p className="text-base text-muted leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
