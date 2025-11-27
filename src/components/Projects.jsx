import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Globe, ExternalLink } from 'lucide-react';
import { AppStoreIcon, PlayStoreIcon } from './Icons';
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
    const [searchParams] = useSearchParams();
    return (
        <section id="projects" className="py-24 md:py-32 bg-surface/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center"
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
                            <div className="relative h-48 overflow-hidden bg-surface">
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
                                    {project.tech.slice(0, 5).map((t) => (
                                        <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {searchParams.get('debug') === 'true' ? (
                                    <Link
                                        to={`/projects/${project.id}`}
                                        state={{ fromList: true }}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all group-hover:border-primary w-full"
                                    >
                                        View Case Study
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                ) : (
                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.links ? (
                                            <>
                                                {project.links.ios && (
                                                    <a
                                                        href={project.links.ios}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-surface border border-white/10 text-text font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                                                    >
                                                        <AppStoreIcon className="w-4 h-4" />
                                                        <span>App Store</span>
                                                    </a>
                                                )}
                                                {project.links.android && (
                                                    <a
                                                        href={project.links.android}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-surface border border-white/10 text-text font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                                                    >
                                                        <PlayStoreIcon className="w-4 h-4" />
                                                        <span>Play Store</span>
                                                    </a>
                                                )}
                                                {project.links.web && (
                                                    <a
                                                        href={project.links.web}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-surface border border-white/10 text-text font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                                                    >
                                                        <Globe className="w-4 h-4" />
                                                        <span>Website</span>
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all group-hover:border-primary"
                                            >
                                                View Live Project
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Projects;
