import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render(url: string, helmetContext: any) {
  return new Promise((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </StrictMode>,
      {
        onAllReady() {
          resolve(pipe)
        },
        onShellError(err) {
          reject(err)
        },
        onError(err) {
          console.error(err)
        },
      },
    )
  })
}
