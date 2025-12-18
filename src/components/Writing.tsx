import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts } from '../../content'
import { formatDate } from '../utils/date'
import { WRITING_CONTENT } from '../constants'

const Writing = () => {
  // Get the 3 most recent blog posts
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <section id="writing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text flex items-center">
            <span className="text-primary mr-2">
              {WRITING_CONTENT.sectionTitle.number}
            </span>{' '}
            {WRITING_CONTENT.sectionTitle.text}
          </h2>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-surface/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:hidden flex justify-center mt-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded-full text-primary font-semibold hover:border-primary/30 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Writing
