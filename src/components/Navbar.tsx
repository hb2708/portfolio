import { useState, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, NAVBAR_CONTENT, SOCIAL_LINKS } from '../constants';
import { trackEvent } from '../utils/analytics';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Re-check scroll status when location changes (e.g. navigating from details to home section)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // Check immediately
        handleScroll();

        // Check after delays to allow layout shifts/scrolls to complete
        // Using multiple checks to be robust against different loading speeds
        const t1 = setTimeout(handleScroll, 100);
        const t2 = setTimeout(handleScroll, 300);
        const t3 = setTimeout(handleScroll, 600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [location]);

    const handleMobileNavClick = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-text hover:text-primary transition-colors z-50 font-display tracking-tighter">
                    {NAVBAR_CONTENT.logo.first}<span className="text-primary">{NAVBAR_CONTENT.logo.second}</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest font-mono"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={SOCIAL_LINKS.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('RESUME_DOWNLOAD', { label: 'Desktop Nav' })}
                        className="px-6 py-2 text-sm font-bold text-background bg-primary hover:bg-white transition-colors uppercase tracking-wider font-mono"
                    >
                        {NAVBAR_CONTENT.resumeButton}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text z-50 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? NAVBAR_CONTENT.mobileMenu.close : NAVBAR_CONTENT.mobileMenu.open}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
                        id="mobile-menu"
                        onAnimationComplete={() => {
                            // Simple focus trap logic
                            const menu = document.getElementById('mobile-menu');
                            const focusableElements = menu?.querySelectorAll('a[href], button, textarea, input, select');
                            const firstElement = focusableElements?.[0] as HTMLElement;
                            if (firstElement) {
                                firstElement.focus();
                            }
                        }}
                    >
                        <div className="flex flex-col px-6 py-8 space-y-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleMobileNavClick}
                                    className="text-lg font-medium text-text hover:text-primary transition-colors font-display uppercase tracking-wider"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={SOCIAL_LINKS.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => { setIsMobileMenuOpen(false); trackEvent('RESUME_DOWNLOAD', { label: 'Mobile Nav' }); }}
                                className="inline-block px-6 py-3 text-center text-base font-bold text-background bg-primary hover:bg-white transition-colors uppercase tracking-wider font-mono"
                            >
                                {NAVBAR_CONTENT.resumeButton}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default memo(Navbar);
