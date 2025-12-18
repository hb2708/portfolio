import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { List } from 'lucide-react'
import { trackTOCClick } from '../../utils/analytics'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = (id: string, text: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      trackTOCClick(text, id)
      setIsOpen(false)
    }
  }

  if (headings.length === 0) return null

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-background shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle table of contents"
      >
        <List className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-background/90 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Table of Contents */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className={`
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          fixed lg:sticky right-0 lg:right-auto top-32 z-40 lg:z-0
          w-72 max-h-[calc(100vh-10rem)] overflow-y-auto
          p-4 lg:p-0 bg-surface lg:bg-transparent rounded-l-xl lg:rounded-none
          transition-transform lg:transition-none
        `}
      >
        <div className="lg:pl-8 lg:border-l border-white/10">
          <h4 className="text-sm font-bold text-text mb-4 uppercase tracking-wider">
            On This Page
          </h4>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => handleClick(heading.id, heading.text)}
                  className={`
                    block w-full text-left text-sm transition-colors
                    ${heading.level === 2 ? 'pl-0' : 'pl-4'}
                    ${
                      activeId === heading.id
                        ? 'text-primary font-medium'
                        : 'text-muted hover:text-text'
                    }
                  `}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  )
}

export default TableOfContents
