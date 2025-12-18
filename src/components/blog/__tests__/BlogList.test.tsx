import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect, vi } from 'vitest'
import BlogList from '../BlogList'
import * as content from '../../../../content'

// Mock the content module
vi.mock('../../../../content', () => ({
  getAllPosts: vi.fn(),
  getAllTags: vi.fn(),
}))

const mockPosts = [
  {
    slug: 'post-1',
    title: 'Post One',
    description: 'Description One',
    date: '2024-01-01',
    tags: ['react'],
    published: true,
    image: '/img1.png',
    author: 'Author One',
    readingTime: '5 min read',
    content: () => <div>Content 1</div>,
  },
  {
    slug: 'post-2',
    title: 'Post Two',
    description: 'Description Two',
    date: '2024-01-02',
    tags: ['ios'],
    published: true,
    image: '/img2.png',
    author: 'Author Two',
    readingTime: '3 min read',
    content: () => <div>Content 2</div>,
  },
]

const mockTags = ['react', 'ios']

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </HelmetProvider>,
  )
}

describe('BlogList Component', () => {
  it('renders the blog header and description', () => {
    vi.mocked(content.getAllPosts).mockReturnValue(mockPosts)
    vi.mocked(content.getAllTags).mockReturnValue(mockTags)

    renderWithProviders(<BlogList />)

    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(
      screen.getByText(/Thoughts on mobile engineering/i),
    ).toBeInTheDocument()
  })

  it('renders all published posts', () => {
    vi.mocked(content.getAllPosts).mockReturnValue(mockPosts)
    vi.mocked(content.getAllTags).mockReturnValue(mockTags)

    renderWithProviders(<BlogList />)

    expect(screen.getByText('Post One')).toBeInTheDocument()
    expect(screen.getByText('Post Two')).toBeInTheDocument()
    expect(screen.getByText('2 articles')).toBeInTheDocument()
  })

  it('filters posts by search query', async () => {
    vi.mocked(content.getAllPosts).mockReturnValue(mockPosts)
    vi.mocked(content.getAllTags).mockReturnValue(mockTags)

    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    renderWithProviders(<BlogList />)

    const searchInput = screen.getByPlaceholderText(/Search articles/i)
    await user.type(searchInput, 'One')

    expect(screen.getByText('Post One')).toBeInTheDocument()
    expect(screen.queryByText('Post Two')).not.toBeInTheDocument()
  })

  it('filters posts by tag', async () => {
    vi.mocked(content.getAllPosts).mockReturnValue(mockPosts)
    vi.mocked(content.getAllTags).mockReturnValue(mockTags)

    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    renderWithProviders(<BlogList />)

    const reactTagButton = screen.getByRole('button', { name: 'react' })
    await user.click(reactTagButton)

    expect(screen.getByText('Post One')).toBeInTheDocument()
    expect(screen.queryByText('Post Two')).not.toBeInTheDocument()
  })

  it('shows empty state when no posts match', async () => {
    vi.mocked(content.getAllPosts).mockReturnValue(mockPosts)
    vi.mocked(content.getAllTags).mockReturnValue(mockTags)

    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    renderWithProviders(<BlogList />)

    const searchInput = screen.getByPlaceholderText(/Search articles/i)
    await user.type(searchInput, 'Non-existent')

    expect(
      screen.getByText(/No articles found matching your search/i),
    ).toBeInTheDocument()
  })
})
