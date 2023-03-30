import './Header.css'
import logo from '../../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='Imagem Logo' className='logo'></img>
            <div className='text-header'>
                <h1 id='header-title'><strong>Criando Bagagem</strong></h1>
                <h2>O mundo é o limite.</h2>
            </div>
        </header>
    )
}