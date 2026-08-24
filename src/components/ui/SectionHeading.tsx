type SectionHeadingProps = {
  id?: string
  title: string
  subtitle?: string
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </header>
  )
}
