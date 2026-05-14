import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import Contacto from "./sections/Contacto"
import Habilidades from "./sections/Habilidades"
import Hero from "./sections/Hero"
import Proyectos from "./sections/Proyectos"
import SobreMi from "./sections/SobreMi"

function App() {

  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer/>
    </>
  )
}

export default App
