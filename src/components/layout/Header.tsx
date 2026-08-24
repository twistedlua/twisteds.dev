import { NavLink } from 'react-router-dom'
import { site, navLinks } from '../../data/site'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink className="site-header__logo" to="/" aria-label={`${site.name} home`}>
          <span className="site-header__mark" aria-hidden="true">
            T
          </span>
          {site.name}
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                  }
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
