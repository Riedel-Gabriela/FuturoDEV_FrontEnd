import './Header.css'
import logo from '../../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='Imagem Logo' className='logo'></img>
            <div className='text-header'>
                <h1 id='header-title'>OS MELHORES PACOTES AQUI</h1>
                <p>Alcance o mundo todo em apenas um clique!</p>
            </div>
            <div className='header-right'>
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </header>
    )
}