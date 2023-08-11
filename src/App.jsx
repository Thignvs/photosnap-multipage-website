import { Outlet } from 'react-router-dom'
import NavBar from './assets/home/NavBar'
import Footer from './assets/home/Footer'

function App() {


  return (
    <>
    <header>
      <nav>
      <NavBar />
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
