import { ComponentType } from 'react'

// Shared frontmatter type for MDX blog posts
export interface BlogFrontmatter {
    title: string
    description: string
    date: string
    tags: string[]
    published: boolean
    image: string
    author: string
    readingTime: string
}

// Full blog post type (frontmatter + slug + component)
export interface BlogPost extends BlogFrontmatter {
    slug: string
    content: ComponentType
}
