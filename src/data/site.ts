import type { SocialLink } from '../types'

export const site = {
  name: 'Twisted',
  title: 'Twisted — Game Development, Production & Software',
  description:
    'Portfolio of Twisted — game development, production, software, and creative digital work.',
  url: 'https://twisteds.dev',
  hero: {
    headline: 'Twisted',
    tagline:
      'Building games, shipping products, and creating across development, production, software, and digital work.',
    primaryCta: { label: 'View Work', href: '#work' },
    secondaryCta: { label: 'Contact', href: '#contact' },
  },
  about: {
    heading: 'About',
    body: [
      'Placeholder bio — room to expand on Roblox development, game production, acquisitions and deals, software and AI, content creation, and music.',
      'This section will grow as the portfolio takes shape. For now, it establishes structure and tone.',
    ],
  },
  contact: {
    heading: 'Contact',
    body: 'Open to collaborations, production work, and interesting projects.',
    email: 'hello@twisteds.dev',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Twisted`,
  },
} as const

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/' },
  { id: 'email', label: 'Email', href: 'mailto:hello@twisteds.dev' },
]
