import { useEffect, useState } from 'react'

type RotatingWordProps = {
  words: readonly string[]
}

export function RotatingWord({ words }: RotatingWordProps) {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion || words.length < 2) {
      return
    }

    const interval = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % words.length)
    }, 2400)

    return () => window.clearInterval(interval)
  }, [words])

  return (
    <span className="rotating-word" aria-hidden="true">
      <span key={words[wordIndex]} className="rotating-word__item">
        {words[wordIndex]}.
      </span>
    </span>
  )
}
