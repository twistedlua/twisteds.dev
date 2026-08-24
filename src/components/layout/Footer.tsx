import { site, socialLinks } from '../../data/site'
import { Button } from '../ui/Button'

export function Footer() {
  const { contact, footer } = site

  return (
    <footer id="contact" className="site-footer section" aria-labelledby="contact-heading">
      <div className="container site-footer__inner">
        <div className="site-footer__contact">
          <h2 id="contact-heading" className="site-footer__heading">
            {contact.heading}
          </h2>
          <p className="site-footer__body">{contact.body}</p>
          <Button href={`mailto:${contact.email}`}>{contact.email}</Button>
        </div>
        <div className="site-footer__meta">
          <nav aria-label="Social links">
            <ul className="site-footer__links">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="site-footer__link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
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
