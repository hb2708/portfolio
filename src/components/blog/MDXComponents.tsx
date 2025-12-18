import { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'

interface MDXComponentsProviderProps {
  children: React.ReactNode
}

// Custom components for MDX content
const components = {
  // Code blocks with syntax highlighting
  pre: ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
  },
  code: ({
    className,
    children,
    ...props
  }: {
    className?: string
    children: string
  }) => {
    // Inline code vs code blocks
    const isInline = !className
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      )
    }
    return <CodeBlock className={className}>{children}</CodeBlock>
  },

  // Headings with anchor links
  h1: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h1
      id={id}
      className="text-3xl md:text-4xl font-bold text-text mt-12 mb-6 scroll-mt-24"
    >
      {children}
    </h1>
  ),
  h2: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-bold text-text mt-10 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h3
      id={id}
      className="text-xl md:text-2xl font-bold text-text mt-8 mb-3 scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h4
      id={id}
      className="text-lg md:text-xl font-bold text-text mt-6 mb-2 scroll-mt-24"
    >
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted text-lg leading-relaxed mb-6">{children}</p>
  ),

  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-lg leading-relaxed">{children}</li>
  ),

  // Links
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  ),

  // Blockquotes
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
      <div className="text-muted italic">{children}</div>
    </blockquote>
  ),

  // Horizontal rules
  hr: () => <hr className="border-white/10 my-12" />,

  // Tables
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-surface">{children}</thead>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-sm font-bold text-text border border-white/10">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 text-sm text-muted border border-white/10">
      {children}
    </td>
  ),

  // Strong and emphasis
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-text">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),

  // Images
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl border border-white/10"
        loading="lazy"
      />
      {alt && (
        <figcaption className="text-center text-sm text-muted mt-3">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
}

const MDXComponentsProvider = ({ children }: MDXComponentsProviderProps) => {
  const memoizedComponents = useMemo(() => components, [])

  return <MDXProvider components={memoizedComponents}>{children}</MDXProvider>
}

export default MDXComponentsProvider
