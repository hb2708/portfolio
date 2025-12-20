import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Tag, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getAllPosts, getAllTags } from '../../../content'
import BlogCard from './BlogCard'
import SEO from '../SEO'

const BlogList = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allPosts = getAllPosts()
  const allTags = getAllTags()

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag = !selectedTag || post.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [allPosts, searchQuery, selectedTag])

  return (
    <section className="py-24 md:py-32 bg-background min-h-screen">
      <SEO
        title="Blog"
        description="Technical articles about iOS, React Native, and mobile engineering by Harshal Bhavsar."
      />
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Thoughts on mobile engineering, React Native, iOS development, and
            building great products at scale.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface border border-text/10 rounded-xl text-text placeholder:text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <Tag className="w-4 h-4 text-muted" />
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                !selectedTag
                  ? 'bg-primary text-background'
                  : 'bg-surface text-muted hover:text-text border border-text/10'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-primary text-background'
                    : 'bg-surface text-muted hover:text-text border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="max-w-5xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted text-lg">
                No articles found matching your search.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Post Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted text-sm mt-12"
        >
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
        </motion.p>
      </div>
    </section>
  )
}

export default BlogList
