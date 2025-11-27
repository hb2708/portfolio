import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-surface/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center"
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

                            {/* Timeline Dot - Enhanced with Icon */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                                <div className="relative">
                                    {/* Pulsing ring - only for current role */}
                                    {index === 0 && (
                                        <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                                    )}
                                    {/* Main dot with gradient and icon */}
                                    <div className={`relative w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full border-4 border-background shadow-lg ${index === 0 ? 'shadow-primary/50' : 'shadow-primary/30'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        {index === 0 ? (
                                            // Current role - briefcase icon
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3V6h3a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3V9a3 3 0 013-3h3v-.75zm3-1.5a1.5 1.5 0 00-1.5 1.5V6h3v-.75a1.5 1.5 0 00-1.5-1.5h-3z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            // Previous roles - code icon
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>

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
                                            <span key={idx} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">
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
