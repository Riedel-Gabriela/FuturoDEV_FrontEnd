import { useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../../../assets/logo.png'

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <img src={logo} alt='Imagem Logo' className='logo'></img>
                <h1 id='header-title'><strong>Pangéia tour</strong></h1>
                <h2 className='text-header'>Suas fronteiras nunca foram tão próximas</h2>
                <nav>
                    <button onClick={() => navigate(-1)}> Voltar </button>
                    <button onClick={() => navigate('/create')}> Criar Pacote</button>
                    <button onClick={() => navigate('/')}> Home </button>
                </nav>
        </header>
    )
}