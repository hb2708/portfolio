import { motion } from 'framer-motion';

const About = () => {
    const values = [
        {
            title: "User-Centric",
            description: "Building features that solve real problems, not just technical ones.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            )
        },
        {
            title: "Scalable Systems",
            description: "Designing systems that grow with the business and handle high traffic.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            )
        },
        {
            title: "Mentorship",
            description: "Helping the team grow through code reviews and sharing knowledge.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" className="py-20 bg-surface/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-text mb-12 flex items-center"
                    >
                        <span className="text-primary mr-2">01.</span> About Me
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Bio Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-text mb-6">
                                Staff Engineer & <span className="text-primary">Product Builder</span>
                            </h3>
                            <p className="text-muted mb-6 leading-relaxed text-lg">
                                I specialize in <span className="text-text font-medium">React Native</span> and <span className="text-text font-medium">iOS</span> development.
                                With 10+ years of experience, I build apps that work well and are easy to use.
                            </p>
                            <p className="text-muted mb-8 leading-relaxed text-lg">
                                Currently leading mobile engineering at <span className="text-text font-medium">MoneyLion</span>, I help the team solve hard technical problems to reach business goals.
                            </p>

                            <div className="bg-background p-6 rounded-xl border border-primary/20 flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-text font-bold text-sm uppercase tracking-wide mb-1">Visa Status</h4>
                                    <p className="text-muted text-sm">
                                        Holder of <span className="text-accent font-semibold">Residence Pass-Talent</span>.
                                        <br />
                                        <span className="text-green-400 font-medium">No Visa Sponsorship Required</span> for employment in Malaysia.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Philosophy Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="text-2xl font-bold text-text mb-6">How I Lead</h3>
                            <blockquote className="text-lg text-muted italic mb-6 border-l-4 border-primary pl-4">
                                &quot;Great engineering is about helping teams build reliable systems that solve real problems for people.&quot;
                            </blockquote>
                            <p className="text-muted leading-relaxed mb-4">
                                My approach combines good tech with kindness. I believe in:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span className="text-muted">Creating a safe space where everyone can share ideas.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span className="text-muted">Automating boring tasks so we can focus on new features.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span className="text-muted">Building simple, scalable code that is easy to maintain.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Core Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                    {value.icon}
                                </div>
                                <h4 className="text-lg font-bold text-text mb-2">{value.title}</h4>
                                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
