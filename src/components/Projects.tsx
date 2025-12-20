import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { Globe, ExternalLink } from 'lucide-react'
import { AppStoreIcon, PlayStoreIcon } from './Icons'
import { PROJECTS, PROJECTS_CONTENT } from '../constants'

const Projects = () => {
  const [searchParams] = useSearchParams()

  // Memoize animation variants for performance
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }),
    [],
  )

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center">
            <span className="text-primary mr-2">
              {PROJECTS_CONTENT.sectionTitle.number}
            </span>{' '}
            {PROJECTS_CONTENT.sectionTitle.text}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`group relative bg-surface border border-text/5 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col rounded-xl ${
                index === 0 || index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Tech Header */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
                <span className="font-mono text-xs text-primary/80">
                  0{index + 1}
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-surface/50">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow border-t border-text/5 bg-surface relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 font-display tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted text-sm md:text-base mb-6 line-clamp-3 font-sans leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 border border-primary/20 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {searchParams.get('debug') === 'true' ? (
                  <Link
                    to={`/projects/${project.id}`}
                    state={{ fromList: true }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-text hover:text-primary transition-colors uppercase tracking-widest font-mono group/link"
                  >
                    {PROJECTS_CONTENT.viewCaseStudy}
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {project.links ? (
                      <>
                        {project.links.ios && (
                          <a
                            href={project.links.ios}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on App Store`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-text/5 border border-text/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                          >
                            <AppStoreIcon className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.android && (
                          <a
                            href={project.links.android}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on Google Play Store`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-text/5 border border-text/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                          >
                            <PlayStoreIcon className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.web && (
                          <a
                            href={project.links.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} website`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-text/5 border border-text/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                          >
                            <Globe className="w-5 h-5" />
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-text hover:text-primary transition-colors uppercase tracking-widest font-mono group/link"
                      >
                        {PROJECTS_CONTENT.viewProject}
                        <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Projects)
