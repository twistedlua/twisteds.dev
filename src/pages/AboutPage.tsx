import { Capabilities } from '../components/sections/Capabilities'
import { PageIntro } from '../components/ui/PageIntro'
import { site } from '../data/site'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Most of what I do starts with games."
        description="The rest comes from getting curious about everything around them."
      />
      <section className="about-page section">
        <div className="container about-page__grid" data-reveal>
          <p className="eyebrow">Background</p>
          <div className="about-page__copy">
            {site.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <Capabilities />
    </>
  )
}
