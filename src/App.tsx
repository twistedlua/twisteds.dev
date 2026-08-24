import { Layout, Footer } from './components/layout'
import { Hero, SelectedWork, About, Capabilities } from './components/sections'

export default function App() {
  return (
    <Layout>
      <div id="top">
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Footer />
      </div>
    </Layout>
  )
}
