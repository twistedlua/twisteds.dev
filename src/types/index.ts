export type Project = {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  metrics: string[]
  href?: string
}

export type CapabilityId =
  | 'game-dev'
  | 'production'
  | 'software'
  | 'digital-strategy'
  | 'content'
  | 'music'

export type Capability = {
  id: CapabilityId
  title: string
  description: string
}

export type SocialPlatform = 'x' | 'youtube' | 'discord' | 'roblox' | 'github'

export type SocialLink = {
  id: SocialPlatform
  label: string
  handle: string
  href?: string
}
