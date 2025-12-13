import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Component', () => {
  const renderFooter = () => {
    return render(<Footer />)
  }

  it('renders main CTA section', () => {
    renderFooter()
    expect(
      screen.getByText(/Let's Build Something Exceptional/i),
    ).toBeInTheDocument()
  })

  it('renders email CTA button', () => {
    renderFooter()
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
  })

  it('renders social links with ARIA labels', () => {
    renderFooter()
    const githubLinks = screen.getAllByLabelText(/Visit GitHub Profile/i)
    const linkedinLinks = screen.getAllByLabelText(/Visit LinkedIn Profile/i)
    const xLinks = screen.getAllByLabelText(/Visit X \(Twitter\) Profile/i)
    expect(githubLinks.length).toBeGreaterThan(0)
    expect(linkedinLinks.length).toBeGreaterThan(0)
    expect(xLinks.length).toBeGreaterThan(0)
  })

  it('renders copyright with current year', () => {
    renderFooter()
    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument()
  })

  it('renders view source link', () => {
    renderFooter()
    expect(screen.getByText(/View Source/i)).toBeInTheDocument()
  })

  it('email CTA has correct href', () => {
    renderFooter()
    const emailButton = screen.getByText(/Get In Touch/i).closest('a')
    expect(emailButton).toHaveAttribute('href', 'mailto:hb2708@gmail.com')
  })

  it('social links have correct security attributes', () => {
    renderFooter()
    const githubLink = screen.getAllByLabelText(/Visit GitHub Profile/i)[0]
    const linkedinLink = screen.getAllByLabelText(/Visit LinkedIn Profile/i)[0]
    const xLink = screen.getAllByLabelText(/Visit X \(Twitter\) Profile/i)[0]

    // Check rel attributes for security
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(xLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check target blank
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(xLink).toHaveAttribute('target', '_blank')
  })

  it('renders portfolio repository link', () => {
    renderFooter()
    expect(screen.getByText(/View Source/i)).toBeInTheDocument()
    const repoLink = screen.getByText(/View Source/i).closest('a')
    expect(repoLink).toHaveAttribute('href')
    expect(repoLink?.getAttribute('href')).toContain('github.com')
  })

  it('social links have correct URLs', () => {
    renderFooter()
    const githubLink = screen.getAllByLabelText(/Visit GitHub Profile/i)[0]
    const linkedinLink = screen.getAllByLabelText(/Visit LinkedIn Profile/i)[0]

    expect(githubLink).toHaveAttribute('href')
    expect(linkedinLink).toHaveAttribute('href')

    const githubHref = githubLink.getAttribute('href')
    const linkedinHref = linkedinLink.getAttribute('href')

    expect(githubHref).toContain('github.com')
    expect(linkedinHref).toContain('linkedin.com')

    const xLink = screen.getAllByLabelText(/Visit X \(Twitter\) Profile/i)[0]
    expect(xLink).toHaveAttribute('href')
    expect(xLink.getAttribute('href')).toContain('x.com')
  })

  it('renders contact section heading', () => {
    renderFooter()
    expect(
      screen.getByText(/Let's Build Something Exceptional/i),
    ).toBeInTheDocument()
  })
})
