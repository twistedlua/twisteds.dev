import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'

type SelectedWorkProps = {
  limit?: number
  title?: string
  subtitle?: string
}

export function SelectedWork({
  limit,
  title = 'Selected Work',
  subtitle = 'Recent projects across games, production, and software.',
}: SelectedWorkProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section
      id="work"
      className="section selected-work"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <SectionHeading
          id="work-heading"
          title={title}
          subtitle={subtitle}
        />
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
