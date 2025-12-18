import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (container.hasChildNodes() && !container.innerHTML.includes('<!--app-html-->')) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
