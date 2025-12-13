import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from '../Skills'

describe('Skills Component', () => {
  const renderSkills = () => {
    return render(<Skills />)
  }

  it('renders section title', () => {
    renderSkills()
    expect(screen.getByText(/Technical Arsenal/i)).toBeInTheDocument()
  })

  it('renders core expertise section', () => {
    renderSkills()
    expect(screen.getByText(/Core Expertise/i)).toBeInTheDocument()
  })

  it('renders all featured skills', () => {
    renderSkills()
    expect(screen.getByText(/React Native/i)).toBeInTheDocument()
    expect(screen.getByText(/iOS Native/i)).toBeInTheDocument()
    expect(screen.getByText(/System Design/i)).toBeInTheDocument()
  })

  it('renders skill levels', () => {
    renderSkills()
    const expertBadges = screen.getAllByText(/Expert/i)
    const advancedBadges = screen.getAllByText(/Advanced/i)
    expect(expertBadges.length).toBeGreaterThan(0)
    expect(advancedBadges.length).toBeGreaterThan(0)
  })

  it('renders years of experience', () => {
    renderSkills()
    const sixPlusYears = screen.getAllByText(/6\+ years/i)
    const tenPlusYears = screen.getAllByText(/10\+ years/i)
    expect(sixPlusYears.length).toBeGreaterThan(0)
    expect(tenPlusYears.length).toBeGreaterThan(0)
  })

  it('renders other skills section', () => {
    renderSkills()
    expect(screen.getByText(/Also Proficient In/i)).toBeInTheDocument()
  })

  it('renders skill categories', () => {
    renderSkills()
    expect(screen.getByText(/Frontend & Web/i)).toBeInTheDocument()
    expect(screen.getByText(/Backend & APIs/i)).toBeInTheDocument()
    expect(screen.getByText(/DevOps & Tools/i)).toBeInTheDocument()
  })
})
