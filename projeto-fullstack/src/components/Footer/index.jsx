import './style.css'

export default function Footer() {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()}
                Meu projeto - Todos os direitos reservados.
                <br />
                Desenvolvido por Camila Viana.
            </p>
        </footer>
    )
}