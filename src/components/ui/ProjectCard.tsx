import type { Project } from '../../types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="project-card__media">
        <img
          className="project-card__image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={640}
          height={360}
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        {project.metrics.length > 0 ? (
          <ul className="project-card__metrics" aria-label="Results">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        ) : null}
        {project.tags.length > 0 ? (
          <ul className="project-card__tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )

  return (
    <article className="project-card" data-reveal>
      {project.href ? (
        <a
          className="project-card__link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name}`}
        >
          {content}
        </a>
      ) : (
        <div className="project-card__link">{content}</div>
      )}
    </article>
  )
}
