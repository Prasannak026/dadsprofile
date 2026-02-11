import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import Footer from './sections/Footer'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import Services from './sections/Services'

function App() {
  return (
    <div className="relative overflow-hidden">
      <main className="relative">
        <Hero />
        <About />
        <Gallery />
        <Expertise />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
