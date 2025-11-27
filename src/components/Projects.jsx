import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

// Define variants for the container if they are not already defined
// Assuming containerVariants and itemVariants are defined elsewhere or need to be added.
// For this change, we'll assume they are defined or will be defined.
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger the animation of child items
        },
    },
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">02.</span> Featured Projects
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-mono text-muted bg-white/5 px-2 py-1 rounded">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    to={`/projects/${project.id}`}
                                    state={{ fromList: true }}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors"
                                >
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Projects;
