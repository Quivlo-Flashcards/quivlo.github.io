import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { Features } from './components/Features'
import { Screenshots } from './components/Screenshots'
import { HowItWorks } from './components/HowItWorks'
import { FAQ } from './components/FAQ'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden min-w-0">
        <Hero />
        <SocialProof />
        <Features />
        <Screenshots />
        <HowItWorks />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
