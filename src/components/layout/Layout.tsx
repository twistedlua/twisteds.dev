import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useScrollReveal(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
