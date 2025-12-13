import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages
const Home = lazy(() => import('./components/Home'))
const ProjectDetails = lazy(() => import('./components/ProjectDetails'))

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
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
