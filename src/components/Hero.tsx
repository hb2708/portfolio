import { Suspense, lazy, memo } from 'react'
import { Github, Linkedin, Mail, Rocket, Smartphone } from 'lucide-react'
import { XIcon } from './Icons'
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants'
import { trackEvent } from '../utils/analytics'

// Lazy load TypeAnimation to reduce initial bundle size
const TypeAnimation = lazy(() =>
  import('react-type-animation').then((module) => ({
    default: module.TypeAnimation,
  })),
)

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold text-text leading-tight tracking-tighter mb-6 font-display">
              {HERO_CONTENT.mainHeading} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                <Suspense fallback={<span>BUILD WORLD-CLASS TEAMS</span>}>
                  <TypeAnimation
                    sequence={HERO_CONTENT.rotatingText}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Suspense>
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted mb-8 font-mono animate-fade-in [animation-delay:300ms]">
              {HERO_CONTENT.subHeading.first}{' '}
              <span className="text-primary">
                {HERO_CONTENT.subHeading.connector || '&'}
              </span>{' '}
              {HERO_CONTENT.subHeading.second}
              <span className="mx-4 text-white/20">|</span>
              {HERO_CONTENT.subHeading.experience}
            </div>

            <p className="text-lg text-muted mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0 animate-fade-in [animation-delay:500ms]">
              {HERO_CONTENT.intro.prefix}{' '}
              <span className="text-text font-semibold border-b border-primary">
                {HERO_CONTENT.intro.highlight}
              </span>
              {HERO_CONTENT.intro.suffix}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 animate-slide-in-up [animation-delay:700ms]">
              <a
                href="#projects"
                onClick={() =>
                  trackEvent('CTA_CLICK', {
                    action: 'View Projects',
                    label: 'Hero Section',
                  })
                }
                className="px-8 py-4 bg-primary text-background font-bold text-lg hover:bg-white transition-colors uppercase tracking-wider"
              >
                {HERO_CONTENT.buttons.primary}
              </a>
              <a
                href="#contact"
                onClick={() =>
                  trackEvent('CTA_CLICK', {
                    action: 'Contact Me',
                    label: 'Hero Section',
                  })
                }
                className="px-8 py-4 border border-white/20 text-text font-medium text-lg hover:bg-white/5 transition-colors uppercase tracking-wider"
              >
                {HERO_CONTENT.buttons.secondary}
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-muted animate-fade-in [animation-delay:900ms]">
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
                onClick={() =>
                  trackEvent('SOCIAL_LINK_CLICK', {
                    action: 'GitHub',
                    label: 'Hero Section',
                  })
                }
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                onClick={() =>
                  trackEvent('SOCIAL_LINK_CLICK', {
                    action: 'LinkedIn',
                    label: 'Hero Section',
                  })
                }
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.x.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit X (Twitter) Profile"
                onClick={() =>
                  trackEvent('SOCIAL_LINK_CLICK', {
                    action: 'X',
                    label: 'Hero Section',
                  })
                }
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.email.url}
                aria-label="Send Email"
                onClick={() =>
                  trackEvent('SOCIAL_LINK_CLICK', {
                    action: 'Email',
                    label: 'Hero Section',
                  })
                }
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-muted hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              {/* Tech Borders */}
              <div className="absolute inset-0 border border-white/10"></div>
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary"></div>

              <img
                src="/harshal.webp"
                srcSet="/harshal-mobile.webp 300w, /harshal.webp 500w"
                sizes="(max-width: 768px) 300px, 500px"
                alt="Harshal Bhavsar"
                width="500"
                height="500"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Floating Badges - Tech Style */}
              <div className="absolute -top-8 -right-8 bg-primary text-background p-4 rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.4)] animate-float">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface border border-primary/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.1)] animate-float-delayed">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Ribbon - Tech Style */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 animate-slide-in-up [animation-delay:200ms]">
          {HERO_CONTENT.stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/50 hidden md:block animate-fade-in [animation-delay:1000ms]">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-current rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  )
}

interface StatItemProps {
  number: string
  label: string
  context?: string
}

const StatItem = memo(({ number, label, context }: StatItemProps) => (
  <div className="text-center group relative">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tighter">
      {number}
    </div>
    <div className="text-xs text-primary font-mono uppercase tracking-widest">
      {label}
    </div>

    {/* Tooltip on hover */}
    {context && (
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 px-4 py-2 bg-black border border-primary/20 text-xs text-muted whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
        {context}
      </div>
    )}
  </div>
))
StatItem.displayName = 'StatItem'

export default memo(Hero)
