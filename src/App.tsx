import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages
const Home = lazy(() => import('./components/Home'))
const ProjectDetails = lazy(() => import('./components/ProjectDetails'))
const BlogList = lazy(() => import('./components/blog/BlogList'))
const BlogPost = lazy(() => import('./components/blog/BlogPost'))

// Scroll to top on route change (except for hash links and back/forward navigation)
// Also sends page views to Google Analytics for SPA navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Only scroll to top on PUSH navigation (not POP which is back/forward)
    // And don't scroll if there's a hash (anchor link)
    if (navigationType === 'PUSH' && !hash) {
      window.scrollTo(0, 0)
    }

    // Send page view to Google Analytics for SPA navigation
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-CW9KDWDTWS', {
        page_path: pathname + (hash || ''),
      })
    }
  }, [pathname, hash, navigationType])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-2 focus:bg-primary focus:text-background focus:font-bold focus:rounded-md transition-all"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="projects/:id" element={<ProjectDetails />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:slug" element={<BlogPost />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App
