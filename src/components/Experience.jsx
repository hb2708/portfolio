import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">04.</span> Experience
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10"></div>

                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative mb-12 md:mb-20 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                        >

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-10"></div>

                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} `}>
                                <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group text-left">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-text mb-1">{exp.company}</h3>
                                    <h4 className="text-lg text-muted mb-4">{exp.role}</h4>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((desc, idx) => (
                                            <li key={idx} className="text-muted text-sm leading-relaxed">
                                                • {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
