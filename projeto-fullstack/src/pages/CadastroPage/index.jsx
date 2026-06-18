import { useState } from 'react'
import api from '../../services/api'
import './style.css'
import { toast } from 'react-toastify'

export default function CadastroPage() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [estaEnviando, setEstaEnviando] = useState(false)

  // Limpa os campos do formulário.
  function limparCamposDoFormulario() {
    setNome('')
    setEmail('')
    setSenha('')
  }

  async function envioDoFormulario(event) {
    // Evita que a página seja recarregada automaticamente.
    event.preventDefault()
    setEstaEnviando(true)

    const dadosDoFormulario = { nome, email, senha }

    try {

      // Tenta cadastrar um usuário na API.
      const resposta = await api.post('/usuarios', dadosDoFormulario)

      // Se der certo.
      toast.success(resposta.data.mensagem)
      limparCamposDoFormulario()

    } catch (erro) {
      // Se der errado.
      const mensagemDoServidor = erro?.response?.data?.mensagem
      toast.error(mensagemDoServidor)

    } finally {
      // Executa dando certo ou errado.
      setEstaEnviando(false)
    }
  }

  return (
    <div className='cadastro-page'>
      <form onSubmit={envioDoFormulario}>
        <div className='grupo-form'>
          <label htmlFor="campo-nome">Nome</label>
          <input
            id='campo-nome'
            type="text"
            placeholder='Ex.: Maria Silva'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className='grupo-form'>
          <label htmlFor="campo-email">E-mail</label>
          <input
            id='campo-email'
            type="email"
            placeholder='Ex.: mariasilva@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='grupo-form'>
          <label htmlFor="campo-senha">Senha</label>
          <input
            id='campo-senha'
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type='submit' disabled={estaEnviando}>
          {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
        </button>

      </form>
    </div>
  )
}