import './App.module.css'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/Header/NavBar'
import { HomePage } from './components/Main/Homepage/HomePage'

import './global.css'

function App() {

  return (
    <section>
      <header>
        <NavBar />
      </header>
      <main>  
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  )   
}

export default App
