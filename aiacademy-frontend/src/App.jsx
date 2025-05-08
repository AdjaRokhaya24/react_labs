import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      
      <div className="demo-logos">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <main className="content">
        <h2>Bienvenue sur AI Academy</h2>
        <p>
          Notre mission est de rendre l'apprentissage de l'intelligence artificielle accessible à tous.
        </p>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Vous avez cliqué {count} fois
          </button>
          <p>
            Ce compteur illustre la gestion d'état avec le hook useState.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App