import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  publishedTime?: string
  author?: string
  tags?: string[]
  canonical?: string
}

const SEO = ({
  title,
  description,
  image,
  article,
  publishedTime,
  author,
  tags,
  canonical,
}: SEOProps) => {
  const siteTitle =
    'Harshal Bhavsar | Staff Engineer, iOS & React Native Expert'
  const siteDescription =
    'Portfolio of Harshal Bhavsar, a Staff Engineer and Mobile Specialist with 10+ years of experience building scalable apps.'
  const siteUrl = 'https://www.gyaan.tech'
  const twitterHandle = '@harshalb_'
  const defaultImage = `${siteUrl}/og-image.webp`

  const finalTitle = title ? `${title} | Harshal Bhavsar` : siteTitle
  const finalDescription = description || siteDescription
  const finalImage = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image}`
    : defaultImage
  const finalUrl = canonical || siteUrl

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Article Specific Tags */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && author && <meta property="article:author" content={author} />}
      {article &&
        tags &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': article ? 'BlogPosting' : 'Person',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': finalUrl,
          },
          headline: finalTitle,
          description: finalDescription,
          image: finalImage,
          author: {
            '@type': 'Person',
            name: author || 'Harshal Bhavsar',
            url: siteUrl,
          },
          publisher: {
            '@type': 'Person',
            name: 'Harshal Bhavsar',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/harshal.webp`,
            },
          },
          datePublished: publishedTime || '2024-12-18',
        })}
      </script>
    </Helmet>
  )
}

export default SEO
