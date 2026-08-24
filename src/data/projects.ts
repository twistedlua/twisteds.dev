import type { Project } from '../types'

const assetPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}placeholders/${fileName}`

export const projects: Project[] = [
  {
    id: 'project-alpha',
    name: 'Roblox Projects',
    description:
      'Development and production work across Roblox games. Individual projects and roles will be added here.',
    image: assetPath('project-1.svg'),
    imageAlt: 'Placeholder for upcoming Roblox project work',
    tags: ['Development', 'Production', 'LiveOps'],
    metrics: [],
  },
  {
    id: 'project-beta',
    name: 'Software Experiments',
    description:
      'Tools and AI experiments built around creator workflows and ideas worth testing.',
    image: assetPath('project-2.svg'),
    imageAlt: 'Placeholder for upcoming software experiments',
    tags: ['Software', 'AI', 'Tools'],
    metrics: [],
  },
  {
    id: 'project-gamma',
    name: 'Content & Music',
    description:
      'Video, editing, and instrumental music created alongside the main game work.',
    image: assetPath('project-3.svg'),
    imageAlt: 'Placeholder for upcoming content and music',
    tags: ['Content', 'Editing', 'Music'],
    metrics: [],
  },
]
