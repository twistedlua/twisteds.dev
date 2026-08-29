import { NavLink, useLocation } from 'react-router-dom'
import { site, navLinks } from '../../data/site'

export function Header() {
  const location = useLocation()

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink
          className="site-header__logo"
          to="/"
          aria-label={`${site.name} home`}
          onClick={handleHomeClick}
        >
          <span className="site-header__wordmark" aria-hidden="true">
            twis<span className="site-header__twist">t</span>ed
            <span className="site-header__dot">.</span>
          </span>
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
                  onClick={link.href === '/' ? handleHomeClick : undefined}
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
