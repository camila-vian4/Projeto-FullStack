import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                Desenvolvido por Camila Viana.
            </p>
        </footer>
    )
}