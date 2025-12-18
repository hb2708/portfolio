import { BlogPost, BlogFrontmatter } from '../src/types/blog'
import { ComponentType } from 'react'

// Auto-discover all MDX blog posts
const modules = import.meta.glob<{
    default: ComponentType
    frontmatter: BlogFrontmatter
}>('./blog/*.mdx', { eager: true })

// Build blog posts array from discovered modules
export const blogPosts: BlogPost[] = Object.entries(modules).map(
    ([path, module]) => {
        // Extract slug from path: "./blog/my-post.mdx" -> "my-post"
        const slug = path.replace('./blog/', '').replace('.mdx', '')

        return {
            slug,
            ...module.frontmatter,
            content: module.default,
        }
    },
)

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

// Get all published posts (sorted by date, newest first)
export function getAllPosts(): BlogPost[] {
    return blogPosts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
    return getAllPosts().filter((post) => post.tags.includes(tag))
}

// Get all unique tags
export function getAllTags(): string[] {
    const tags = new Set<string>()
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
}
