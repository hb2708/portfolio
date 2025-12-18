export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  longDescription: string
  challenges?: string[]
  solutions?: string[]
  features?: string[]
  tech: string[]
  image: string
  links?: {
    ios?: string
    android?: string
    web?: string
  }
  link?: string
}
