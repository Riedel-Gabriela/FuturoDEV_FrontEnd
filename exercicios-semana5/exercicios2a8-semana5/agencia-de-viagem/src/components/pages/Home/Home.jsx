import './Home.css'
import { Introduction, Card } from '../../molecules'
import { useFetch } from '../../../hooks/fetchHook'

export default function Home() {
    const { itens: destinos } = useFetch("http://localhost:3003/destinos")
    return (
        <>
            <Introduction />
            <section className='card-catalog'>
                {destinos?.filter(item => item.disponibilidade == true)
                    .map(item => {
                        return (
                            <Card
                                disponibilidade={item.disponibilidade}
                                key={item.id}
                                pais={item.pais}
                                titulo={item.titulo}
                                descricao={item.descricao}
                                data={item.data}
                                link={item.link}
                                url={item.url}
                            />
                        )
                    })}
            </section>
        </>
    )
}