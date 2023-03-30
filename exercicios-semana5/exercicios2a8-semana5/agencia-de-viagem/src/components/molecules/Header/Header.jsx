import './Header.css'
import logo from '../../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='Imagem Logo' className='logo'></img>
            <div className='text-header'>
                <h1 id='header-title'><strong>Pangéia tour</strong></h1>
                <h2>Suas fronteiras nunca foram tão próximas</h2>
            </div>
        </header>
    )
}