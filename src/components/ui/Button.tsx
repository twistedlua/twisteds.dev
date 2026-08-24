import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({
  href,
  variant = 'primary',
  children,
}: ButtonProps) {
  const className = `btn btn--${variant}`
  const isInternal = href.startsWith('/')
  const isExternal = href.startsWith('http')

  if (isInternal) {
    return (
      <Link className={className} to={href}>
        {children}
        <span aria-hidden="true">↗</span>
      </Link>
    )
  }

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}
