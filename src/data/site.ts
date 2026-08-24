import type { SocialLink } from '../types'

export const site = {
  name: 'Twisted',
  hero: {
    headline: 'I make games and follow',
    headlineEmphasis: 'every rabbit hole.',
    tagline:
      "I'm twisted. I make games and figure out what makes them work, grow, and last. That takes me into production, software, and the business behind them.",
    primaryCta: { label: 'View work', href: '/work' },
    secondaryCta: { label: 'Get in touch', href: '/contact' },
  },
  about: {
    heading: 'About',
    body: [
      "I'm Twisted. Most of what I do starts with games.",
      'I started making things online through Minecraft videos and editing before moving into Roblox development. Games pulled me beyond code into design, production, LiveOps, teams, and the business behind what gets built.',
      "I have a habit of following one question until it turns into five. That's how I ended up experimenting with software and AI, keeping up with content, and making instrumental music. They feel less like separate interests and more like different ways of learning how things work and making my own.",
    ],
  },
  contact: {
    heading: 'Let’s work together.',
    body:
      "I'm always interested in meeting good people and hearing about interesting games, projects, or ideas. If you think we should talk, reach out.",
    email: 'hello@twisteds.dev',
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
