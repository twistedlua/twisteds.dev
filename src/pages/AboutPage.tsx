import { Capabilities } from '../components/sections/Capabilities'
import { PageIntro } from '../components/ui/PageIntro'
import { site } from '../data/site'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Creative work, backed by production thinking."
        description="I work across Roblox development, game production, software, digital strategy, content, and music."
      />
      <section className="about-page section">
        <div className="container about-page__grid">
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
