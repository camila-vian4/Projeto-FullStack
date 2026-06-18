import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'
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
        <Route path='/' element={<HomePage />}/>
        <Route path='/cadastro' element={<CadastroPage />}/>
        <Route path='/lista-usuarios' element={<ListaUsuariosPage />}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
