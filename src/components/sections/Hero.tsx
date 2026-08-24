import { site } from '../../data/site'
import { Button } from '../ui/Button'

export function Hero() {
  const { hero } = site

  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 id="hero-heading" className="hero__headline">
          {hero.headline}
        </h1>
        <p className="hero__tagline">{hero.tagline}</p>
        <div className="hero__actions">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
