#!/usr/bin/env node
/**
 * Blog Content Validation & Reading Time Update Script
 *
 * Run: pnpm validate-blog
 *
 * This script:
 * 1. Validates all required frontmatter fields
 * 2. Updates reading times based on word count
 * 3. Checks for missing images
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = path.join(__dirname, '../content/blog')
const PUBLIC_DIR = path.join(__dirname, '../public')
const WORDS_PER_MINUTE = 200

// Required frontmatter fields
const REQUIRED_FIELDS = [
  'title',
  'description',
  'date',
  'tags',
  'published',
  'image',
  'author',
]

/**
 * Parse frontmatter from MDX content
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null

  const frontmatter = {}
  const lines = match[1].split('\n')

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()

    // Remove quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    // Parse arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^["']|["']$/g, ''))
    }

    // Parse booleans
    if (value === 'true') value = true
    if (value === 'false') value = false

    frontmatter[key] = value
  }

  return frontmatter
}

/**
 * Count words in content (excluding code blocks and frontmatter)
 */
function countWords(content) {
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '')
  const withoutCode = withoutFrontmatter.replace(/```[\s\S]*?```/g, '')
  const withoutInlineCode = withoutCode.replace(/`[^`]+`/g, '')
  const withoutJSX = withoutInlineCode.replace(/<[^>]+>/g, '')
  const withoutMarkdown = withoutJSX
    .replace(/[#*_~\[\]]/g, '')
    .replace(/\(https?:\/\/[^\)]+\)/g, '')

  return withoutMarkdown.split(/\s+/).filter((word) => word.length > 0).length
}

/**
 * Calculate reading time string
 */
function calculateReadingTime(wordCount) {
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE)
  return `${minutes} min read`
}

/**
 * Update frontmatter with new reading time
 */
function updateReadingTime(content, readingTime) {
  if (content.match(/^---[\s\S]*?readingTime:[\s\S]*?---/)) {
    return content.replace(
      /(^---[\s\S]*?)(readingTime:\s*["']?)[^"'\n]+(["']?)([\s\S]*?---)/,
      `$1$2${readingTime}$3$4`,
    )
  }
  return content.replace(
    /(^---[\s\S]*?)(---)/,
    `$1readingTime: "${readingTime}"\n$2`,
  )
}

/**
 * Main validation function
 */
function main() {
  console.log('📝 Validating blog content...\n')

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  let hasErrors = false
  let updatedCount = 0

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    let content = fs.readFileSync(filePath, 'utf-8')
    const frontmatter = parseFrontmatter(content)
    const errors = []

    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (
        !frontmatter ||
        frontmatter[field] === undefined ||
        frontmatter[field] === ''
      ) {
        errors.push(`Missing required field: ${field}`)
      }
    }

    // Check image file exists
    if (frontmatter?.image) {
      const imagePath = path.join(PUBLIC_DIR, frontmatter.image)
      if (!fs.existsSync(imagePath)) {
        errors.push(`Image not found: ${frontmatter.image}`)
      }
    }

    // Check tags is an array
    if (frontmatter?.tags && !Array.isArray(frontmatter.tags)) {
      errors.push('tags must be an array')
    }

    // Check date format
    if (frontmatter?.date && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.date)) {
      errors.push(
        `Invalid date format: ${frontmatter.date} (expected YYYY-MM-DD)`,
      )
    }

    // Report errors
    if (errors.length > 0) {
      console.log(`❌ ${file}`)
      errors.forEach((err) => console.log(`   └─ ${err}`))
      hasErrors = true
    } else {
      // Update reading time
      const wordCount = countWords(content)
      const readingTime = calculateReadingTime(wordCount)
      const currentReadingTime = frontmatter?.readingTime

      if (currentReadingTime !== readingTime) {
        content = updateReadingTime(content, readingTime)
        fs.writeFileSync(filePath, content)
        console.log(`✅ ${file}: ${wordCount} words → ${readingTime} (updated)`)
        updatedCount++
      } else {
        console.log(`✅ ${file}: ${wordCount} words → ${readingTime}`)
      }
    }
  }

  console.log('')

  if (hasErrors) {
    console.log('❌ Validation failed! Fix the errors above.')
    process.exit(1)
  }

  if (updatedCount > 0) {
    console.log(
      `✨ Updated ${updatedCount} file(s). Don't forget to stage them!`,
    )
  } else {
    console.log('✨ All blog posts are valid!')
  }
}

main()
