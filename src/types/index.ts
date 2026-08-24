export type Project = {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  metrics: string[]
  href: string
}

export type Capability = {
  id: string
  title: string
  description: string
}

export type SocialLink = {
  id: string
  label: string
  href: string
}
