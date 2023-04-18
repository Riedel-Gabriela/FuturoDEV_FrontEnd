import { useNavigate } from "react-router-dom";
import './Card.css'
import { Image } from "../../atoms";
import { useFetch } from '../../../hooks/fetchHook'


export default function Card({id, pais, titulo, descricao, data, link, url, disponibilidade}) {
    const { deleteData } = useFetch('http://localhost:3003/destinos');
    const navigate = useNavigate();
    function handleDelete(id) {
        deleteData(id);
        window.location.reload()
    }
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
                    <button type="buton" className="button-carddelete" onClick={() => handleDelete(id)}>excluir pacote</button>
                    <button type="button" className="button-card"><a href={link} target='_blank'>veja mais</a></button>
                    </>
                ) : (
                    <p>Este pacote está indisponivel no momento.<br />Espere abrir novas datas ou escolha outro destino.</p> 
                )
            }
        </div>
    )
}
