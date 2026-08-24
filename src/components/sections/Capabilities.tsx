import { capabilities } from '../../data/capabilities'
import { SectionHeading } from '../ui/SectionHeading'

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section capabilities"
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        <SectionHeading
          id="capabilities-heading"
          title="Capabilities"
          subtitle="Areas of focus across creative and technical work."
        />
        <ul className="capabilities__grid">
          {capabilities.map((capability) => (
            <li key={capability.id} className="capability-card">
              <h3 className="capability-card__title">{capability.title}</h3>
              <p className="capability-card__description">
                {capability.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
