import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/usuarios" element={<ListaUsuariosPage />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
