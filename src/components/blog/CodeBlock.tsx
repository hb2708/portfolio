import { useState, useEffect, useRef } from 'react'
import { Check, Copy } from 'lucide-react'
import { trackCodeCopy } from '../../utils/analytics'
import { useTheme } from '../../context/ThemeContext'

interface CodeBlockProps {
  children: string
  className?: string
  filename?: string
}

const CodeBlock = ({ children, className, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const codeRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const language = className?.replace('language-', '') || 'text'

  useEffect(() => {
    const loadShiki = async () => {
      try {
        const { createHighlighter } = await import('shiki')
        const shikiTheme =
          resolvedTheme === 'dark' ? 'github-dark' : 'github-light'

        const highlighter = await createHighlighter({
          themes: [shikiTheme],
          langs: [
            'typescript',
            'javascript',
            'swift',
            'ruby',
            'json',
            'bash',
            'yaml',
            'tsx',
            'jsx',
            'diff',
          ],
        })

        const html = highlighter.codeToHtml(children.trim(), {
          lang: language,
          theme: shikiTheme,
        })
        setHighlightedCode(html)
      } catch (error) {
        console.error('Shiki loading error:', error)
        // Fallback to plain code
        setHighlightedCode(
          `<pre><code>${children.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`,
        )
      }
    }

    loadShiki()
  }, [children, language, resolvedTheme])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim())
      setCopied(true)
      trackCodeCopy(language)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-text/10 bg-surface">
      {/* Header with filename and language */}
      <div className="flex items-center justify-between px-4 py-2 bg-text/5 border-b border-text/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          {filename && (
            <span className="text-xs font-mono text-muted">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted/60 uppercase">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-text/5 hover:bg-text/10 transition-colors text-muted hover:text-text"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div
        ref={codeRef}
        className="overflow-x-auto p-4 text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!bg-transparent"
        dangerouslySetInnerHTML={{
          __html: highlightedCode || `<pre><code>${children}</code></pre>`,
        }}
      />
    </div>
  )
}

export default CodeBlock
