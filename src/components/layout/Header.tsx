import { site, navLinks } from '../../data/site'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#top" aria-label={`${site.name} home`}>
          {site.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
