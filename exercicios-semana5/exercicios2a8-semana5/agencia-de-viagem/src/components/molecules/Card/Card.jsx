import './Card.css'
import { Image } from "../../atoms";

export default function Card({id, pais, titulo, descricao, data, link, url}) {
    return (
        <div key={id} className='card'>
            <Image imagemUrl={url}/>
            <h1>{titulo}</h1>
            <h3>{pais}</h3>
            <p>{descricao}</p>
            <p><strong>{data}</strong></p>
            <button className='button-card'><a href={link} target='_blank'>veja mais</a></button>
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