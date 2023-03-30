import './Card.css'
import { Image } from "../../atoms";

export default function Card({id, pais, titulo, descricao, data, link, url}) {
    return (
        <div key={id} className='card'>
            <Image imagemUrl={url}/>
            <h1>{titulo}</h1>
            <h3>{pais}</h3>
            <p>{descricao}</p>
            <p>{data}</p>
            <button href={link} className='button-card'>veja mais</button>
        </div>
    )
}

function CardIndisponivel({id, pais, titulo, url}) {
    return (
        <div key={id} className='card'>
            <Image imagemUrl={url}/>
            <h1>{titulo}</h1>
            <h3>{pais}</h3>
            <p>Este pacote está indisponivel no momento.<br />Espere abrir novas datas ou escolha outro destino.</p>
        </div>
    )
}

export {CardIndisponivel}