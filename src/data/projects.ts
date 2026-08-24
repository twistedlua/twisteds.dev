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
    featured: true,
    href: 'https://www.roblox.com/games/78815084607045/Hatch-and-Feed-Animals',
  },
  {
    id: 'bomb-fishing',
    name: 'Bomb Fishing!',
    description:
      "I worked as a paid LiveOps contractor, shipping weekly updates after launch. My role focused on ongoing content and operations as the game reached a 16K peak CCU.",
    image: assetPath('projects/bomb-fishing.png'),
    imageAlt: 'Bomb Fishing Roblox game thumbnail',
    tags: ['LiveOps', 'Weekly Updates', 'Contractor', 'Roblox'],
    metrics: [
      '10.13M+ visits',
      '16K peak CCU',
      'Weekly updates',
      'Paid contract',
    ],
    featured: true,
    href: 'https://www.roblox.com/games/118677256126351/Bomb-Fishing',
  },
]
