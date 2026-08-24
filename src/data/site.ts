import type { SocialLink } from '../types'

export const site = {
  name: 'Twisted',
  hero: {
    headline: "I'm always building",
    rotatingWords: ['games', 'systems', 'ideas', 'businesses'],
    tagline:
      "I'm twisted. I make games and figure out what makes them work, grow, and last. That takes me into production, software, and the business behind them.",
    primaryCta: { label: 'View work', href: '/work' },
    secondaryCta: { label: 'Get in touch', href: '/contact' },
  },
  about: {
    heading: 'About',
    body: [
      "I'm twisted. Most of what I do starts with games.",
      'I started with Minecraft videos before moving into Roblox development. Coding games turned into designing them, producing them, working with teams, and learning the business behind them.',
      'I follow whatever catches my interest, so software, AI, content, and music ended up here too. I like figuring out how things work, then making my own.',
    ],
  },
  contact: {
    heading: 'Let’s work together.',
    body:
      "I'm always interested in meeting good people and hearing about interesting games, projects, or ideas. If you think we should talk, reach out.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Twisted`,
  },
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const socialLinks: SocialLink[] = [
  {
    id: 'x',
    label: 'X',
    handle: '@tw_stedxd',
    href: 'https://x.com/tw_stedxd',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@tw_stedxd',
    href: 'https://youtube.com/@tw_stedxd',
  },
  {
    id: 'discord',
    label: 'Discord',
    handle: '@tw_stedxd',
    href: 'https://discord.com/users/747182410591895658',
  },
  {
    id: 'roblox',
    label: 'Roblox',
    handle: '@tw_stedxd',
    href: 'https://www.roblox.com/users/2066027071/profile',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@twistedlua',
    href: 'https://github.com/twistedlua',
  },
]
