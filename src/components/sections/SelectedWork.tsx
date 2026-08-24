import { projects } from '../../data/projects'
import { ProjectCard, SectionHeading } from '../ui'

export function SelectedWork() {
  return (
    <section
      id="work"
      className="section selected-work"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <SectionHeading
          id="work-heading"
          title="Selected Work"
          subtitle="Recent projects across games, production, and software."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
