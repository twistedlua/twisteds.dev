import type { Project } from '../types'

const assetPath = (filePath: string) =>
  `${import.meta.env.BASE_URL}${filePath}`

export const projects: Project[] = [
  {
    id: 'hatch-and-feed-animals',
    name: 'Hatch and Feed Animals!',
    description:
      'I designed the idea, built and scripted the full game in two weeks, then shipped it with paid ads. It peaked at 2.56K concurrent players, and I sold a partial stake at its peak for five figures.',
    image: assetPath('projects/hatch-and-feed-animals.png'),
    imageAlt: 'Hatch and Feed Animals Roblox game thumbnail',
    tags: ['Game Design', 'Luau', 'Production', 'Launch'],
    metrics: [
      '1.38M+ visits',
      '2.56K peak CCU',
      'Built in 2 weeks',
      '5-figure partial exit',
    ],
    href: 'https://www.roblox.com/games/78815084607045/Hatch-and-Feed-Animals',
  },
  {
    id: 'project-beta',
    name: 'Software Experiments',
    description:
      'Tools and AI experiments built around creator workflows and ideas worth testing.',
    image: assetPath('placeholders/project-2.svg'),
    imageAlt: 'Placeholder for upcoming software experiments',
    tags: ['Software', 'AI', 'Tools'],
    metrics: [],
  },
  {
    id: 'project-gamma',
    name: 'Content & Music',
    description:
      'Video, editing, and instrumental music created alongside the main game work.',
    image: assetPath('placeholders/project-3.svg'),
    imageAlt: 'Placeholder for upcoming content and music',
    tags: ['Content', 'Editing', 'Music'],
    metrics: [],
  },
]
