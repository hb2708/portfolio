import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About Component', () => {
  const renderAbout = () => {
    return render(<About />)
  }

  it('renders section title', () => {
    renderAbout()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
  })

  it('renders role and highlights', () => {
    renderAbout()
    expect(screen.getByText(/Staff Engineer/i)).toBeInTheDocument()
    expect(screen.getByText(/Product Builder/i)).toBeInTheDocument()
  })

  it('renders value propositions', () => {
    renderAbout()
    expect(screen.getByText(/Day One Impact/i)).toBeInTheDocument()
    expect(screen.getByText(/Cross-Platform Expertise/i)).toBeInTheDocument()
    expect(screen.getByText(/Remote-First Mindset/i)).toBeInTheDocument()
  })

  it('renders three pillars of engineering', () => {
    renderAbout()
    expect(screen.getByText(/Psychological Safety/i)).toBeInTheDocument()
    expect(screen.getByText(/Automation First/i)).toBeInTheDocument()
    expect(screen.getByText(/Scalable Architecture/i)).toBeInTheDocument()
  })

  it('renders visa status badge', () => {
    renderAbout()
    expect(
      screen.getByText(/No visa sponsorship required/i),
    ).toBeInTheDocument()
  })

  it('renders leadership philosophy', () => {
    renderAbout()
    expect(screen.getByText(/How I Lead/i)).toBeInTheDocument()
  })
})
