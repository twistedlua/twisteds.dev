import { useEffect, useState } from 'react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { RotatingWord } from '../ui/RotatingWord'

export function Hero() {
  const { hero } = site
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] = useState(
    () => window.scrollY < 40,
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollIndicatorVisible(window.scrollY < 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <a
          className={`hero__scroll-indicator${isScrollIndicatorVisible ? '' : ' is-hidden'}`}
          href="#work"
          aria-label="Scroll to selected work"
          aria-hidden={!isScrollIndicatorVisible}
          tabIndex={isScrollIndicatorVisible ? undefined : -1}
        >
          <span>Scroll</span>
          <svg
            className="hero__scroll-arrow"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="m3.5 5.75 4.5 4.5 4.5-4.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
