import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogPost } from '../../types/blog'
import { formatDate } from '../../utils/date'

interface BlogCardProps {
    post: BlogPost
    index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-surface rounded-xl border border-white/5 hover:border-primary/30 hover:bg-surface/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
                {/* Thumbnail */}
                {post.image && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                    </div>
                )}

                <div className="flex flex-col flex-grow p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                        {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-4 text-sm text-muted">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                        </div>
                        <span className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                            Read
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}

export default BlogCard
