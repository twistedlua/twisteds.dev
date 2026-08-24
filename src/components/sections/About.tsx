import { site } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { about } = site

  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-heading"
    >
      <div className="container about__inner">
        <SectionHeading id="about-heading" title={about.heading} />
        <div className="about__content">
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
