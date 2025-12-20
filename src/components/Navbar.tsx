import { useState, memo, useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS, NAVBAR_CONTENT, SOCIAL_LINKS } from '../constants'
import { trackEvent } from '../utils/analytics'
import { useTheme } from '../context/ThemeContext'

// Smart NavLink that handles both routes and anchor links
const NavLink = ({
  href,
  children,
  onClick,
  className,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a route (starts with /), use normal navigation
    if (href.startsWith('/')) {
      e.preventDefault()
      navigate(href)
      onClick?.()
      return
    }

    // If it's an anchor link and we're not on home page, navigate to home first
    if (href.startsWith('#') && location.pathname !== '/') {
      e.preventDefault()
      navigate('/' + href)
      onClick?.()
      return
    }

    // Otherwise, let the default anchor behavior work
    onClick?.()
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

const Navbar = () => {
  const { scrollY } = useScroll()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 20)
  })

  const handleMobileNavClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    trackEvent('THEME_TOGGLE', { theme: nextTheme })
  }

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-0`}
      >
        <div
          className={`
            relative flex items-center justify-between w-full max-w-5xl px-6 py-3 
            rounded-full transition-all duration-300
            ${
              hasScrolled || isMobileMenuOpen
                ? 'bg-surface/50 backdrop-blur-md border border-text/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
                : 'bg-transparent border border-transparent'
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-text hover:text-primary transition-colors font-display tracking-tighter"
          >
            {NAVBAR_CONTENT.logo.first}
            <span className="text-primary">{NAVBAR_CONTENT.logo.second}</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-primary hover:bg-text/5 rounded-full transition-all uppercase tracking-wide font-mono"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-text/5 text-text transition-colors"
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('RESUME_DOWNLOAD', { label: 'Navbar' })}
              className="hidden md:block px-5 py-2 text-sm font-bold text-background bg-primary hover:opacity-90 hover:shadow-[0_0_20px_var(--color-primary)] rounded-full transition-all duration-300 uppercase tracking-wider font-mono"
            >
              {NAVBAR_CONTENT.resumeButton}
            </a>

            <button
              className="md:hidden text-text p-1 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-surface/95 backdrop-blur-xl border border-text/10 rounded-2xl shadow-2xl p-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium text-text hover:text-primary transition-colors font-display uppercase tracking-wider px-2 py-1"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  trackEvent('RESUME_DOWNLOAD', {
                    label: 'Mobile Navbar',
                  })
                }}
                className="text-center px-6 py-3 text-sm font-bold text-background bg-primary hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-xl transition-all duration-300 uppercase tracking-wider font-mono"
              >
                {NAVBAR_CONTENT.resumeButton}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(Navbar)
