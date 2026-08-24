import { Capabilities } from '../components/sections/Capabilities'
import { Hero } from '../components/sections/Hero'
import { SelectedWork } from '../components/sections/SelectedWork'

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork limit={2} showAllLink />
      <Capabilities />
    </>
  )
}
