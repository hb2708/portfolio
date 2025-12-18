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
    } catch (e) {
      console.error(`❌ Failed to render ${url}:`, e)
    }
  }

  // Cleanup server bundle (optional, keeping it for debugging is fine)
  // fs.rmSync(path.resolve(DIST_DIR, 'server'), { recursive: true, force: true })

  console.log('\n✨ Prerendering complete!')
}

prerender()
