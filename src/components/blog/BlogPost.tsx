import { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Twitter,
  User,
} from 'lucide-react'
import { getPostBySlug, getAllPosts } from '../../../content'
import { formatDate } from '../../utils/date'
import ReadingProgress from './ReadingProgress'
import TableOfContents from './TableOfContents'
import MDXComponentsProvider from './MDXComponents'
import SEO from '../SEO'
import { trackReadProgress, trackShare } from '../../utils/analytics'

interface Heading {
  id: string
  text: string
  level: number
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [headings, setHeadings] = useState<Heading[]>([])
  const trackedMilestones = useRef<Set<number>>(new Set())

  const post = slug ? getPostBySlug(slug) : undefined
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  // Extract headings for table of contents
  useEffect(() => {
    if (!post) return

    // Delay to ensure MDX content has rendered before querying headings
    const timer = setTimeout(() => {
      const articleElement = document.querySelector('article')
      if (!articleElement) return

      const headingElements = articleElement.querySelectorAll('h2, h3')
      const extracted: Heading[] = Array.from(headingElements).map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1)),
      }))
      setHeadings(extracted)
    }, 100)

    return () => clearTimeout(timer)
  }, [post])

  // Track reading progress milestones
  useEffect(() => {
    if (!post || !slug) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      const milestones = [25, 50, 75, 100] as const
      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !trackedMilestones.current.has(milestone)
        ) {
          trackedMilestones.current.add(milestone)
          trackReadProgress(milestone, slug)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post, slug])

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          url: window.location.href,
        })
        if (slug) trackShare('native', slug)
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      if (slug) trackShare('native', slug)
    }
  }

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${post?.title} by @harshalb_`)
    const url = encodeURIComponent(window.location.href)
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank',
    )
    if (slug) trackShare('twitter', slug)
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Post Not Found</h1>
          <p className="text-muted mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const Content = post.content

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.image}
        article={true}
        publishedTime={post.date}
        author={post.author}
        tags={post.tags}
      />
      <ReadingProgress />

      <article className="py-24 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-text mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted mb-8">{post.description}</p>

            {/* Hero Image */}
            {post.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="mb-8 rounded-xl overflow-hidden border border-white/10 aspect-[2/1]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Meta and Share */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTwitterShare}
                  className="p-2 rounded-lg bg-surface hover:bg-surface/80 text-muted hover:text-primary transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-surface hover:bg-surface/80 text-muted hover:text-primary transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.header>

          {/* Content with TOC */}
          <div className="max-w-4xl mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
            {/* Main Content */}
            <motion.div
              id="blog-post-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl prose prose-invert"
            >
              <MDXComponentsProvider>
                <Content />
              </MDXComponentsProvider>
            </motion.div>

            {/* Table of Contents (Desktop) */}
            <aside className="hidden lg:block">
              <TableOfContents headings={headings} />
            </aside>
          </div>

          {/* Mobile TOC */}
          <div className="lg:hidden">
            <TableOfContents headings={headings} />
          </div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group p-4 rounded-xl bg-surface hover:bg-surface/80 border border-white/5 hover:border-primary/30 transition-all"
                >
                  <span className="text-sm text-muted">← Previous</span>
                  <p className="text-text font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group p-4 rounded-xl bg-surface hover:bg-surface/80 border border-white/5 hover:border-primary/30 transition-all md:text-right md:col-start-2"
                >
                  <span className="text-sm text-muted">Next →</span>
                  <p className="text-text font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </motion.nav>
        </div>
      </article>
    </>
  )
}

export default BlogPost
