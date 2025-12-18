import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import BlogPost from '../BlogPost'
import * as content from '../../../../content'

// Mock the content module
vi.mock('../../../../content', () => ({
  getPostBySlug: vi.fn(),
  getAllPosts: vi.fn(),
}))

// Mock dynamic SEO
vi.mock('../SEO', () => ({
  default: () => <div data-testid="mock-seo" />,
}))

// Mock Shiki in CodeBlock (as it's used within BlogPost content)
vi.mock('shiki', () => ({
  createHighlighter: vi.fn().mockResolvedValue({
    codeToHtml: vi.fn((code) => `<pre><code>${code}</code></pre>`),
  }),
}))

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  description: 'Test Post Description',
  date: '2024-12-19',
  tags: ['testing'],
  published: true,
  image: '/test-image.png',
  author: 'Test Author',
  readingTime: '5 min read',
  content: () => (
    <div id="blog-post-content">
      <h2 id="header-1">Header One</h2>
      <p>Some content</p>
      <h3 id="header-2">Header Two</h3>
    </div>
  ),
}

const renderWithProviders = (entries = ['/blog/test-post']) => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={entries}>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('BlogPost Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(content.getAllPosts).mockReturnValue([])
    vi.mocked(content.getPostBySlug).mockReturnValue(undefined)
  })

  it('renders "Post Not Found" when post does not exist', () => {
    vi.mocked(content.getPostBySlug).mockReturnValue(undefined)

    renderWithProviders(['/blog/non-existent'])

    expect(screen.getByText(/Post Not Found/i)).toBeInTheDocument()
  })

  it('renders post content correctly when post exists', async () => {
    vi.mocked(content.getPostBySlug).mockReturnValue(mockPost)
    vi.mocked(content.getAllPosts).mockReturnValue([mockPost])

    renderWithProviders()

    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
    expect(screen.getByText('Test Author')).toBeInTheDocument()
  })

  it('extracts and displays table of contents headings', async () => {
    vi.mocked(content.getPostBySlug).mockReturnValue(mockPost)
    vi.mocked(content.getAllPosts).mockReturnValue([mockPost])

    renderWithProviders()

    // TOC items should appear after the timeout
    await waitFor(
      () => {
        expect(screen.getByText('Header One')).toBeInTheDocument()
        expect(screen.getByText('Header Two')).toBeInTheDocument()
      },
      { timeout: 2000 },
    )
  })

  it('renders navigation to next/previous posts', () => {
    const nextPost = { ...mockPost, slug: 'next-post', title: 'Next Title' }
    const prevPost = { ...mockPost, slug: 'prev-post', title: 'Prev Title' }

    vi.mocked(content.getPostBySlug).mockReturnValue(mockPost)
    vi.mocked(content.getAllPosts).mockReturnValue([
      prevPost,
      mockPost,
      nextPost,
    ])

    renderWithProviders()

    expect(screen.getByText('Next Title')).toBeInTheDocument()
    expect(screen.getByText('Prev Title')).toBeInTheDocument()
  })
})
