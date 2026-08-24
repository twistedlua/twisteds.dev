import { ContactIcon } from '../components/ui/ContactIcon'
import { PageIntro } from '../components/ui/PageIntro'
import { site, socialLinks } from '../data/site'

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s make something worth shipping."
        description={site.contact.body}
      />
      <section className="contact-page section">
        <div className="container contact-page__grid" data-reveal>
          <p className="eyebrow">Get in touch</p>
          <div className="contact-page__links">
            <a
              className="contact-page__link"
              href={`mailto:${site.contact.email}`}
            >
              <span className="contact-page__platform">
                <ContactIcon name="email" />
                <span>Email</span>
              </span>
              <strong>{site.contact.email}</strong>
              <span aria-hidden="true">↗</span>
            </a>
            {socialLinks.map((link) =>
              link.href ? (
                <a
                  key={link.id}
                  className="contact-page__link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-page__platform">
                    <ContactIcon name={link.id} />
                    <span>{link.label}</span>
                  </span>
                  <strong>{link.handle}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <div
                  key={link.id}
                  className="contact-page__link contact-page__link--static"
                >
                  <span className="contact-page__platform">
                    <ContactIcon name={link.id} />
                    <span>{link.label}</span>
                  </span>
                  <strong>{link.handle}</strong>
                  <span aria-hidden="true">•</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  )
}
