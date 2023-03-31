import './Card.css'
import { Image } from "../../atoms";

export default function Card({pais, titulo, descricao, data, link, url, disponibilidade }) {
    return (
        <div className='card'>
            <Image imagemUrl={url} />
            <h1>{titulo}</h1>
            <h3>{pais}</h3>
            {
                disponibilidade ? (
                    <>
                    <p>{descricao}</p>
                    <p><strong>{data}</strong></p>
                    <button className='button-card'><a href={link} target='_blank'>veja mais</a></button>
                    </>
                ) : (
                    <p>Este pacote está indisponivel no momento.<br />Espere abrir novas datas ou escolha outro destino.</p> 
                )
            }

        </div>
    )
}
