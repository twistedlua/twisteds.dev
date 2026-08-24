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
        <div className="container contact-page__grid">
          <p className="eyebrow">Get in touch</p>
          <div className="contact-page__links">
            <a href={`mailto:${site.contact.email}`}>
              <span>Email</span>
              <strong>{site.contact.email}</strong>
              <span aria-hidden="true">↗</span>
            </a>
            {socialLinks
              .filter((link) => link.id !== 'email')
              .map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Social</span>
                  <strong>{link.label}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
