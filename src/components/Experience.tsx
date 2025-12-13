import { memo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EXPERIENCES, EXPERIENCE_CONTENT } from '../constants'

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center">
            <span className="text-primary mr-2">
              {EXPERIENCE_CONTENT.sectionTitle.number}
            </span>{' '}
            {EXPERIENCE_CONTENT.sectionTitle.text}
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute top-0 left-0 w-full h-full bg-primary"
            />
          </div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-16 md:mb-24 pl-8 md:pl-[160px] group"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] md:left-[115px] top-0 w-[11px] h-[11px] bg-black border border-white/20 rounded-full group-hover:border-primary group-hover:bg-primary transition-colors duration-300"></div>

              {/* Date - Desktop */}
              <div className="hidden md:block absolute left-0 top-[-5px] w-[100px] text-right">
                <span className="font-mono text-sm text-muted group-hover:text-primary transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Date - Mobile */}
              <div className="md:hidden mb-2">
                <span className="font-mono text-sm text-primary">
                  {exp.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-2 font-display tracking-tight group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-lg text-muted mb-6 font-mono">
                  {exp.role}
                </h4>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-muted text-base leading-relaxed flex items-start"
                    >
                      <span className="text-primary mr-3 mt-1.5 text-xs">
                        ►
                      </span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 border border-primary/20 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Experience)
