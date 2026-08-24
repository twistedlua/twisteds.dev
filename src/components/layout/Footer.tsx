import { site, socialLinks } from '../../data/site'
import { Button } from '../ui/Button'
import { ContactIcon } from '../ui/ContactIcon'

export function Footer() {
  const { contact, footer } = site

  return (
    <footer id="contact" className="site-footer section" aria-labelledby="contact-heading">
      <div className="container site-footer__inner">
        <div className="site-footer__contact" data-reveal>
          <h2 id="contact-heading" className="site-footer__heading">
            {contact.heading}
          </h2>
          <p className="site-footer__body">{contact.body}</p>
          <Button href="/contact">Get in touch</Button>
        </div>
        <div className="site-footer__meta" data-reveal>
          <nav aria-label="Social links">
            <ul className="site-footer__links">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  {link.href ? (
                    <a
                      className="site-footer__link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.handle}
                    >
                      <ContactIcon name={link.id} />
                      {link.label}
                    </a>
                  ) : (
                    <span
                      className="site-footer__link site-footer__link--static"
                      title={link.handle}
                    >
                      <ContactIcon name={link.id} />
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <p className="site-footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
