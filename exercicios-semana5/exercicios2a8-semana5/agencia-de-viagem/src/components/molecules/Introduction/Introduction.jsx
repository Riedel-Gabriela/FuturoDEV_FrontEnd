import './Introduction.css'
import { Divider } from '../../atoms'

export default function Introduction() {
    return (
        <div>
            <div className='body-text'>
            <h1 className='introduction'>Qual seu próximo destino?</h1>
            <h2>Confira os melhores pacotes</h2>
            </div>
            <Divider />
        </div>
    )
}