import { site } from '../../data/site'
import { Button } from '../ui/Button'

export function Hero() {
  const { hero } = site

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          Independent developer & producer
        </div>
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__headline">
            I build things
            <br />
            that <em>people play.</em>
          </h1>
          <div className="hero__aside">
            <p className="hero__tagline">{hero.tagline}</p>
            <div className="hero__actions">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
        <p className="hero__signature">{hero.headline}</p>
      </div>
    </section>
  )
}
