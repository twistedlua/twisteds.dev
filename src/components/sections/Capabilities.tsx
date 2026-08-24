import type { IconType } from 'react-icons'
import {
  LuChartNoAxesCombined,
  LuClapperboard,
  LuCodeXml,
  LuGamepad2,
  LuListChecks,
  LuMusic2,
} from 'react-icons/lu'
import { capabilities } from '../../data/capabilities'
import type { CapabilityId } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

const capabilityIcons: Record<CapabilityId, IconType> = {
  'game-dev': LuGamepad2,
  production: LuListChecks,
  software: LuCodeXml,
  'digital-strategy': LuChartNoAxesCombined,
  content: LuClapperboard,
  music: LuMusic2,
}

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
          {capabilities.map((capability, capabilityIndex) => {
            const Icon = capabilityIcons[capability.id]

            return (
              <li
                key={capability.id}
                className={`capability-card capability-card--${capability.id}`}
                data-reveal
              >
                <div className="capability-card__top">
                  <span className="capability-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="capability-card__number">
                    0{capabilityIndex + 1}
                  </span>
                </div>
                <div className="capability-card__content">
                  <h3 className="capability-card__title">{capability.title}</h3>
                  <p className="capability-card__description">
                    {capability.description}
                  </p>
                </div>
                <Icon
                  className="capability-card__ghost"
                  aria-hidden="true"
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
