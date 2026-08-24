type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-intro__content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}
