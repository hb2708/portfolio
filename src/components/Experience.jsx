/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Work Experience</h2>
                    <p className="text-muted text-lg">My professional journey in mobile engineering.</p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface before:to-transparent">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon/Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary transition-colors">
                                <Briefcase className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-surface/50 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-surface/80">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <h3 className="font-bold text-xl text-text">{exp.company}</h3>
                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-primary/90 mb-1">{exp.role}</h4>
                                    <p className="text-sm text-muted flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {exp.location}
                                    </p>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-background border border-white/5 text-muted">
                                            {tech}
                                        </span>
                                    ))}
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
