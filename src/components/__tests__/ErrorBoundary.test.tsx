import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../ErrorBoundary'

// Component that throws an error
const ThrowError = () => {
  throw new Error('Test error')
}

// Component that works fine
const WorkingComponent = () => {
  return <div>Working Content</div>
}

describe('ErrorBoundary Component', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <WorkingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Working Content')).toBeInTheDocument()
  })

  it('renders error UI when error is thrown', () => {
    // Suppress console.error for this test
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    )

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
    expect(screen.getByText(/Return Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Refresh Page/i)).toBeInTheDocument()

    consoleErrorSpy.mockRestore()
  })

  it('renders error message in fallback UI', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    )

    expect(screen.getByText(/your data is safe/i)).toBeInTheDocument()

    consoleErrorSpy.mockRestore()
  })
})
