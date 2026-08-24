import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { RotatingWord } from '../ui/RotatingWord'

export function Hero() {
  const { hero } = site

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1
            id="hero-heading"
            className="hero__headline"
            aria-label="I'm always building games, systems, ideas, and businesses."
            data-reveal
          >
            <span aria-hidden="true">
              {hero.headline} <RotatingWord words={hero.rotatingWords} />
            </span>
          </h1>
          <div className="hero__aside" data-reveal>
            <p className="hero__tagline">{hero.tagline}</p>
            <div className="hero__actions">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
