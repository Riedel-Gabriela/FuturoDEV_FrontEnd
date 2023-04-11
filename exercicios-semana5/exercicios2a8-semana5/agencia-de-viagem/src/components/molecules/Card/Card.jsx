import './Card.css'
import { Image, Button } from "../../atoms";


export default function Card({pais, titulo, descricao, data, link, url, disponibilidade}) {
    return (
        <div className='card'>
            <Image imagemUrl={url} formato='card' />
            <h1>{titulo}</h1>
            <h3>{pais}</h3>
            {
                disponibilidade ? (
                    <>
                    <p>{descricao}</p>
                    <p><strong>{data}</strong></p>
                    <Button tipo="button" classe="card"><a href={link} target='_blank'>veja mais</a></Button>
                    </>
                ) : (
                    <p>Este pacote está indisponivel no momento.<br />Espere abrir novas datas ou escolha outro destino.</p> 
                )
            }
        </div>
    )
}
