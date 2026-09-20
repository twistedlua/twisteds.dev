import type { Project } from '../types'

const assetPath = (filePath: string) =>
  `${import.meta.env.BASE_URL}${filePath}`

export const projects: Project[] = [
  {
    id: 'escape-logs-for-animals',
    name: 'Escape Logs for Animals!',
    description:
      'I ideated, scripted, and shipped the full game in 72 hours for a fast-moving trend, building the map and shaping its gameplay, feedback loops, and monetization. It has held roughly 400–500 organic concurrent players and is tracking toward about $4K in monthly revenue.',
    image: assetPath('projects/escape-logs-for-animals.png'),
    imageAlt: 'Escape Logs for Animals Roblox game thumbnail',
    tags: ['Game Design', 'Luau', 'Monetization', 'Launch'],
    metrics: [
      '400–500 organic CCU',
      'Built in 72 hours',
      '~$4K/mo projected',
      'Full game build',
    ],
    featured: false,
    href: 'https://www.roblox.com/games/128014543028490/Escape-Logs-for-Animals',
  },
  {
    id: 'save-animals',
    name: 'Save Animals!',
    description:
      'After its launch spike faded, I joined for partial equity to rebuild the game for long-term performance. I designed the update roadmap, then developed and shipped updates alongside the owner, reviving it into a consistent revenue-generating game.',
    image: assetPath('projects/save-animals.png'),
    imageAlt: 'Save Animals Roblox game thumbnail',
    tags: ['LiveOps', 'Game Design', 'Production', 'Development'],
    metrics: [
      '20K peak CCU',
      'LiveOps turnaround',
      'Update roadmap',
      'Partial equity',
    ],
    featured: true,
    href: 'https://www.roblox.com/games/123822115505881/Save-Animals',
  },
  {
    id: 'hatch-and-feed-animals',
    name: 'Hatch and Feed Animals!',
    description:
      'I designed the idea, built and scripted the full game in two weeks, then shipped it with paid ads. It peaked at 2.06K concurrent players, and I sold a partial stake at its peak for five figures.',
    image: assetPath('projects/hatch-and-feed-animals.png'),
    imageAlt: 'Hatch and Feed Animals Roblox game thumbnail',
    tags: ['Game Design', 'Luau', 'Production', 'Launch'],
    metrics: [
      '1.38M+ visits',
      '2.06K peak CCU',
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
    featured: false,
    href: 'https://www.roblox.com/games/118677256126351/Bomb-Fishing',
  },
]
