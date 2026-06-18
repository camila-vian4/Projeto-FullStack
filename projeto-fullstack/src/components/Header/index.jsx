import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>Sistema de Gerenciamento de Usuários</h1>

            <nav>
                <Link to='/'>Início</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/lista-usuarios'>Lista de Usuários</Link>
            </nav>
        </header>
    )
}