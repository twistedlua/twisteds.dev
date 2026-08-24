import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    description:
      'A Roblox experience focused on retention, economy design, and live operations at scale.',
    image: '/placeholders/project-1.svg',
    imageAlt: 'Placeholder thumbnail for Project Alpha',
    tags: ['Roblox', 'Game Design', 'Live Ops'],
    metrics: ['1M+ visits', '40% D1 retention'],
    href: '#',
  },
  {
    id: 'project-beta',
    name: 'Project Beta',
    description:
      'Production tooling and workflow systems built to support a distributed game team.',
    image: '/placeholders/project-2.svg',
    imageAlt: 'Placeholder thumbnail for Project Beta',
    tags: ['Production', 'Tooling', 'Workflow'],
    metrics: ['Reduced ship time by 30%'],
    href: '#',
  },
  {
    id: 'project-gamma',
    name: 'Project Gamma',
    description:
      'Software prototype exploring AI-assisted content pipelines for creative workflows.',
    image: '/placeholders/project-3.svg',
    imageAlt: 'Placeholder thumbnail for Project Gamma',
    tags: ['Software', 'AI', 'Automation'],
    metrics: ['Internal pilot', '3× faster iteration'],
    href: '#',
  },
]
