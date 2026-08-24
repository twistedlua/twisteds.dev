import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  external?: boolean
}

export function Button({
  href,
  variant = 'primary',
  children,
  external = false,
}: ButtonProps) {
  const className = `btn btn--${variant}`

  if (external) {
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
