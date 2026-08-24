import { Link } from 'react-router-dom'
import { Capabilities } from '../components/sections/Capabilities'
import { Hero } from '../components/sections/Hero'
import { SelectedWork } from '../components/sections/SelectedWork'

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork limit={3} />
      <div className="container section-link">
        <Link to="/work">See all work ↗</Link>
      </div>
      <Capabilities />
    </>
  )
}
