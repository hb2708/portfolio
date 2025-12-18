import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.resolve(ROOT_DIR, 'dist')
const BLOG_DIR = path.resolve(ROOT_DIR, 'content/blog')
const PORT = 4173
const BASE_URL = `http://localhost:${PORT}`

// Hardcoded project IDs from src/constants/index.ts
const PROJECTS = ['moneylion', 'dahmakan-rider', 'dahmakan-ios']

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  console.log('🚀 Starting Prerendering Process...')

  // 1. Discover all routes
  const routes = ['/', '/blog']

  // Add Blog Posts
  if (fs.existsSync(BLOG_DIR)) {
    const blogFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
    blogFiles.forEach((f) => {
      routes.push(`/blog/${f.replace('.mdx', '')}`)
    })
  }

  // Add Projects
  PROJECTS.forEach((id) => {
    routes.push(`/projects/${id}`)
  })

  console.log(`📝 Found ${routes.length} routes to prerender:`)
  routes.forEach((r) => console.log(`   - ${r}`))

  // 2. Start Preview Server
  console.log('\n🔌 Starting preview server...')
  const previewProcess = spawn('pnpm', ['preview', '--port', PORT.toString()], {
    stdio: 'inherit',
    shell: true,
    cwd: ROOT_DIR,
  })

  // Give server time to start
  await sleep(5000)

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    // Set viewport to desktop
    await page.setViewport({ width: 1280, height: 800 })

    for (const route of routes) {
      console.log(`\n📸 Rendering ${route}...`)

      try {
        // Navigate and wait for network idle
        await page.goto(`${BASE_URL}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 60000,
        })

        // Extra wait for React Hydration / Helmet updates
        await sleep(1500)

        // Get HTML
        const html = await page.content()

        let outputPath
        if (route === '/') {
          outputPath = path.join(DIST_DIR, 'index.html')
        } else {
          const cleanRoute = route.startsWith('/') ? route.substring(1) : route
          outputPath = path.join(DIST_DIR, cleanRoute, 'index.html')
        }

        const outputDir = path.dirname(outputPath)
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        fs.writeFileSync(outputPath, html)
        console.log(`✅ Saved to ${outputPath}`)
      } catch (err) {
        console.error(`❌ Failed to render ${route}:`, err.message)
      }
    }

    await browser.close()
    console.log('\n✨ Prerendering complete!')
  } catch (err) {
    console.error('Fatal error:', err)
    process.exit(1)
  } finally {
    console.log('Closing preview server...')
    previewProcess.kill()
    try {
      process.kill(previewProcess.pid)
    } catch (e) {
      // ignore
    }
    process.exit(0)
  }
}

main()
