import type { Project } from '../types'

const assetPath = (filePath: string) =>
  `${import.meta.env.BASE_URL}${filePath}`

export const projects: Project[] = [
  {
    id: 'build-a-bridge-for-animals',
    name: 'Build a Bridge for Animals!',
    description:
      'I reskinned an existing game for a partial stake and designed and optimized its monetization. It reached a peak of 500 concurrent players.',
    image: assetPath('projects/build-a-bridge-for-animals.png'),
    imageAlt: 'Build a Bridge for Animals Roblox game thumbnail',
    tags: ['Reskin', 'Game Design', 'Monetization', 'Roblox'],
    metrics: ['500 peak CCU', 'Partial stake', 'Monetization optimization'],
    featured: false,
    href: 'https://www.roblox.com/games/134245912372996/Build-a-Bridge-for-Animals',
  },
  {
    id: 'escape-logs-for-animals',
    name: 'Escape Logs for Animals!',
    description:
      'I ideated, scripted, and shipped the full game in 72 hours for a fast-moving trend, building the map and shaping its gameplay, feedback loops, and monetization. It peaked at 1.5K concurrent players, and I exited at a five-figure valuation.',
    image: assetPath('projects/escape-logs-for-animals.png'),
    imageAlt: 'Escape Logs for Animals Roblox game thumbnail',
    tags: ['Game Design', 'Luau', 'Monetization', 'Launch'],
    metrics: [
      '1.5K peak CCU',
      'Built in 72 hours',
      '5-figure exit valuation',
      'Full game build',
    ],
    featured: true,
    href: 'https://www.roblox.com/games/128014543028490/Escape-Logs-for-Animals',
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
