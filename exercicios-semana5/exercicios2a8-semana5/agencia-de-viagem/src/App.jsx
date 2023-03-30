import './App.css'
import './components/molecules'
import { Footer, Header, Introduction, Card, CardIndisponivel } from './components/molecules'

function App() {
  const destinos = [
    { id: 1, pais: 'Itália', titulo: 'Título da viagem à Itália', descricao: 'Descrição da viagem.', data: 'Junho/2023', link: '#', url: 'https://images.travelclass.tur.br/uploads/2021/04/sicilia-no-inverno.jpg', status: 'disponivel' },
    { id: 2, pais: 'França', titulo: 'Título da viagem à França', descricao: 'Descrição da viagem.', data: 'Agosto/2023', link: '#', url: 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/75.jpg', status: 'disponivel' },
    { id: 3, pais: 'Laos', titulo: 'Título da viagem à Laos', descricao: 'Descrição da viagem.', data: 'Dezembro/2023', link: '#', url: 'https://s2.static.brasilescola.uol.com.br/be/2022/06/paisagem-van-vieng-laos.jpg', status: 'disponivel' },
    { id: 4, pais: 'Alemanha', titulo: 'Título da viagem à Alemanha', descricao: 'Descrição da viagem.', data: 'Janeiro/2024', link: '#', url: 'https://www.vounajanela.com/wp-content/uploads/2018/05/o-que-fazer-em-Berlim-1050x599.jpg', status: 'indisponivel' },
    { id: 5, pais: 'Irlanda', titulo: 'Título da viagem à Irlanda', descricao: 'Descrição da viagem.', data: 'Março/2024', link: '#', url: 'https://cdn.wizard.com.br/wp-content/uploads/2014/10/11151349/curiosidades-sobre-irlanda.jpg', status: 'disponivel' },
    { id: 6, pais: 'Japão', titulo: 'Título da viagem ao Japão', descricao: 'Descrição da viagem.', data: 'Fevereiro/2024', link: '#', url: 'https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2015/10/Shibuya-Japao.jpg', status: 'disponivel' }
  ]
  return (
    <div>
      <Header />
      <Introduction />
      <section className='card-catalog'>
        {destinos.map(item => {
          if (item.status == 'disponivel') {
            return (
              <div key={item.id}>
                <Card
                  id={item.id}
                  pais={item.pais}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  data={item.data}
                  link={item.link}
                  url={item.url}
                />
              </div>
            )
          }
          return (
            <div key={item.id}>
              <CardIndisponivel
                id={item.id}
                pais={item.pais}
                titulo={item.titulo}
                url={item.url}
              />
            </div>
          )
        })}

      </section>
      <Footer />
    </div>
  )
}

export default App
