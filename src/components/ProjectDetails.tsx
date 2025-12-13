import { useEffect } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Zap,
  CheckCircle,
  Globe,
} from 'lucide-react'
import { AppStoreIcon, PlayStoreIcon } from './Icons'
import { PROJECTS } from '../constants'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const project = PROJECTS.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    if (location.state?.fromList) {
      navigate(-1)
    } else {
      navigate('/#projects')
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-text">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center text-muted hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.links ? (
                <>
                  {project.links.ios && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-surface border border-white/10 text-text font-bold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
                    >
                      <AppStoreIcon className="w-5 h-5 mr-2" />
                      App Store
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-surface border border-white/10 text-text font-bold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
                    >
                      <PlayStoreIcon className="w-5 h-5 mr-2" />
                      Play Store
                    </a>
                  )}
                  {project.links.web && (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-surface border border-white/10 text-text font-bold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Website
                    </a>
                  )}
                </>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Live
                </a>
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-8 rounded-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-text">Key Challenges</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges?.map((challenge, index) => (
                <li key={index} className="flex items-start text-muted">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></span>
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface p-8 rounded-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-text">
                Technical Solutions
              </h2>
            </div>
            <ul className="space-y-4">
              {project.solutions?.map((solution, index) => (
                <li key={index} className="flex items-start text-muted">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0"></span>
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features?.map((feature, index) => (
              <div
                key={index}
                className="bg-surface p-6 rounded-xl border border-white/5 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text">{feature}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots Placeholder (Optional) */}
        <div className="text-center">
          <p className="text-muted text-sm">
            * Additional screenshots and internal demos available upon request.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
