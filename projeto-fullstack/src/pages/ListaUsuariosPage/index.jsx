import { useEffect, useState } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function ListaUsuariosPage() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        // Se der certo.
        const response = await api.get('/usuarios')
        setUsuarios(response.data)

      } catch (erro) {
        // Se der errado.
        toast.erro('Erro ao buscar usuários.')
      }
    }
    buscarUsuarios()
  }, [])

  return (
    <div className='lista-usuarios'>
      <h1>Lista de Usuários</h1>

      {
        usuarios.lenght === 0 ? (
          <p>Nenhum usuário cadastrado...</p>
        ) : (
          <table className='tabela-usuarios'>
            <thead>
              <tr>
                <tr>Nome</tr>
                <tr>E-mail</tr>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.email}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  )
}