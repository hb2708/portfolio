import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Transform } from 'stream'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.resolve(ROOT_DIR, 'dist')
const BLOG_DIR = path.resolve(ROOT_DIR, 'content/blog')

// Pre-defined routes
const ROUTES = ['/', '/blog']

// Add Projects
const PROJECTS = ['moneylion', 'dahmakan-rider', 'dahmakan-ios']
PROJECTS.forEach((id) => ROUTES.push(`/projects/${id}`))

// Add Blog Posts
if (fs.existsSync(BLOG_DIR)) {
  const blogFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  blogFiles.forEach((f) => {
    ROUTES.push(`/blog/${f.replace('.mdx', '')}`)
  })
}

async function prerender() {
  console.log('🚀 Starting Native SSG Prerendering...')
  console.log(`📝 Found ${ROUTES.length} routes to render`)

  const template = fs.readFileSync(
    path.resolve(DIST_DIR, 'index.html'),
    'utf-8',
  )
  const { render } = await import(
    path.resolve(DIST_DIR, 'server/entry-server.js')
  )

  const pages = []

  for (const url of ROUTES) {
    console.log(`\n📸 Rendering ${url}...`)

    const helmetContext = {}

    try {
      const pipe = await render(url, helmetContext)

      // Capture stream to string
      let appHtml = ''
      const stream = new Transform({
        transform(chunk, encoding, callback) {
          appHtml += chunk.toString()
          callback()
        },
      })

      pipe(stream)

      await new Promise((resolve, reject) => {
        stream.on('finish', resolve)
        stream.on('error', reject)
      })

      const { helmet } = helmetContext

      let html = template.replace('<!--app-html-->', appHtml)

      // Inject Helmet tags
      const headTags = `
                ${helmet.title.toString()}
                ${helmet.priority.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.script.toString()}
            `
      html = html.replace('</head>', `${headTags}</head>`)

      // Determine output path
      let outputPath
      if (url === '/') {
        outputPath = path.join(DIST_DIR, 'index.html')
      } else {
        const cleanRoute = url.startsWith('/') ? url.substring(1) : url
        outputPath = path.join(DIST_DIR, cleanRoute, 'index.html')
      }

      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      fs.writeFileSync(outputPath, html)
      console.log(`✅ Saved to ${outputPath}`)

      // Collect Metadata for Sitemap/RSS
      const titleMatch = helmet.title.toString().match(/<title[^>]*>(.*?)<\/title>/)
      const descMatch = helmet.meta.toString().match(/name="description" content="(.*?)"/)
      const dateMatch = helmet.meta.toString().match(/property="article:published_time" content="(.*?)"/)

      pages.push({
        url: `https://www.gyaan.tech${url}`,
        title: titleMatch ? titleMatch[1] : 'Harshal Bhavsar',
        description: descMatch ? descMatch[1] : '',
        date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0]
      })

    } catch (e) {
      console.error(`❌ Failed to render ${url}:`, e)
    }
  }

  // Generate Sitemap
  console.log('\n🗺️ Generating Sitemap...')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.date}</lastmod>
    <changefreq>${page.url.includes('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page.url === 'https://www.gyaan.tech/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`
  fs.writeFileSync(path.resolve(DIST_DIR, 'sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml created')

  // Generate RSS
  console.log('\n📡 Generating RSS Feed...')
  const blogPosts = pages.filter(p => p.url.includes('/blog/') && p.url !== 'https://www.gyaan.tech/blog')
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Harshal Bhavsar | Engineering Blog</title>
    <link>https://www.gyaan.tech</link>
    <description>Thoughts on React Native, iOS, and Engineering Leadership.</description>
    <language>en-us</language>
    ${blogPosts.map(post => `
    <item>
      <title>${post.title.replace(' | Harshal Bhavsar', '')}</title>
      <link>${post.url}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${post.url}</guid>
    </item>`).join('')}
  </channel>
</rss>`
  fs.writeFileSync(path.resolve(DIST_DIR, 'rss.xml'), rss)
  console.log('✅ rss.xml created')

  // Cleanup server bundle (optional)
  // fs.rmSync(path.resolve(DIST_DIR, 'server'), { recursive: true, force: true })

  console.log('\n✨ Prerendering complete!')
}

prerender()
