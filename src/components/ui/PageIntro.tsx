type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="page-intro container">
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <div className="page-intro__content" data-reveal>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}
