import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setProgress(latest * 100)
    })
  }, [scrollYProgress])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="h-full bg-primary origin-left"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  )
}

export default ReadingProgress
