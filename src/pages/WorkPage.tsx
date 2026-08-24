import { SelectedWork } from '../components/sections/SelectedWork'
import { PageIntro } from '../components/ui/PageIntro'

export function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Games, tools, and digital projects."
        description="A growing selection of work across development, production, software, and creative direction."
      />
      <SelectedWork
        title="Projects"
        subtitle="Games I've built, shipped, and supported."
      />
    </>
  )
}
