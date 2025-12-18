import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CodeBlock from '../CodeBlock'

// Mock Shiki since it's an async import that depends on WASM/Node environment
vi.mock('shiki', () => ({
  createHighlighter: vi.fn().mockResolvedValue({
    codeToHtml: vi.fn((code) => `<pre><code>${code}</code></pre>`),
  }),
}))

describe('CodeBlock Component', () => {
  it('renders the code content', () => {
    const code = 'const x = 10;'
    render(<CodeBlock>{code}</CodeBlock>)

    // Use a function matcher for getByText to find text within the highlighted HTML structure
    expect(
      screen.getByText((content) => content.includes('const x = 10;')),
    ).toBeInTheDocument()
  })

  it('displays the language label', () => {
    render(
      <CodeBlock className="language-typescript">{'const x = 10;'}</CodeBlock>,
    )
    expect(screen.getByText('typescript')).toBeInTheDocument()
  })

  it('displays the filename when provided', () => {
    render(<CodeBlock filename="test.ts">{'const x = 10;'}</CodeBlock>)
    expect(screen.getByText('test.ts')).toBeInTheDocument()
  })

  it('handles copy to clipboard', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()

    // Mock clipboard API correctly for JSDOM
    const mockWriteText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', {
      clipboard: {
        writeText: mockWriteText,
      },
    })

    render(<CodeBlock>{'const x = 10;'}</CodeBlock>)

    const copyButton = screen.getByLabelText(/Copy code/i)
    await user.click(copyButton)

    expect(mockWriteText).toHaveBeenCalledWith('const x = 10;')
    expect(screen.getByText(/Copied!/i)).toBeInTheDocument()
  })
})
