import { memo } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { XIcon } from './Icons'
import { FOOTER_CONTENT, SOCIAL_LINKS } from '../constants'
import { trackEvent } from '../utils/analytics'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-background border-t border-white/10 py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            {FOOTER_CONTENT.title}
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            {FOOTER_CONTENT.description}
          </p>

          <a
            href={SOCIAL_LINKS.email.url}
            onClick={() => trackEvent('EMAIL_CLICK', { label: 'Footer CTA' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 mb-16"
          >
            <Mail className="w-5 h-5" />
            {FOOTER_CONTENT.cta}
          </a>

          <div className="flex items-center justify-center gap-8 mb-16">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              onClick={() =>
                trackEvent('SOCIAL_LINK_CLICK', {
                  action: 'GitHub',
                  label: 'Footer',
                })
              }
              className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/30 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">
                {SOCIAL_LINKS.github.label}
              </span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              onClick={() =>
                trackEvent('SOCIAL_LINK_CLICK', {
                  action: 'LinkedIn',
                  label: 'Footer',
                })
              }
              className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/30 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">
                {SOCIAL_LINKS.linkedin.label}
              </span>
            </a>
            <a
              href={SOCIAL_LINKS.x.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit X (Twitter) Profile"
              onClick={() =>
                trackEvent('SOCIAL_LINK_CLICK', {
                  action: 'X',
                  label: 'Footer',
                })
              }
              className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-2 group"
            >
              <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/30 transition-colors">
                <XIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">
                {SOCIAL_LINKS.x.label}
              </span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 text-sm text-muted/60">
            <p className="mb-4">{FOOTER_CONTENT.copyright}</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href={SOCIAL_LINKS.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                {FOOTER_CONTENT.viewSource}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
