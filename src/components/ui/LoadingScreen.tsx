import { useEffect, useState } from 'react'

const sessionKey = 'twisteds-intro-seen-v4'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(
    () => sessionStorage.getItem(sessionKey) !== 'true',
  )
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      return
    }

    document.body.classList.add('is-loading')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const leaveDelay = prefersReducedMotion ? 100 : 1050
    const hideDelay = prefersReducedMotion ? 150 : 1550
    const leaveTimeout = window.setTimeout(() => setIsLeaving(true), leaveDelay)
    const hideTimeout = window.setTimeout(() => {
      sessionStorage.setItem(sessionKey, 'true')
      setIsVisible(false)
    }, hideDelay)

    return () => {
      window.clearTimeout(leaveTimeout)
      window.clearTimeout(hideTimeout)
      document.body.classList.remove('is-loading')
    }
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`loading-screen${isLeaving ? ' is-leaving' : ''}`}
      role="status"
      aria-label="Loading twisteds.dev"
    >
      <div className="loading-screen__content" aria-hidden="true">
        <p className="loading-screen__wordmark">
          twisted<span>.</span>
        </p>
      </div>
    </div>
  )
}
