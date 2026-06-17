import { useState } from 'react'
import './style.css'
import api from '../../services/api';

export default async function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCamposDoFormulario() {
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function enviarFormulario(event) {
        event.preventDefault();
        setEstaEnviando(true);
    }

    const dadosDoFormulario = {
        nome,
        email,
        senha
    };

    try {
        const resposta = await api.post('/cadastro', dadosDoFormulario);
        console.log('Resposta do servidor:', resposta.data);
        alert('Cadastro realizado com sucesso!');
        limparCamposDoFormulario();
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.');
    } finally {
        setEstaEnviando(false);
    }
}