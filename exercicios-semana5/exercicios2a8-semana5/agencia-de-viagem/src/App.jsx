import './App.css'
import './components/molecules'
import { Divider } from './components/atoms'
import { Footer, Header, Introduction, Card } from './components/molecules'
import { FormPacotes, FormCadastro } from './components/organisms'

function App() {
  const destinos = [
    { id: 1, pais: 'Itália', titulo: 'Visite Nápoles', descricao: 'Aéreo + Hotel (7 diárias)', data: 'Março/2024', link: 'https://www.hurb.com/br/packages/napoles-passagem-aerea-hospedagem/1417860', url: 'https://images.travelclass.tur.br/uploads/2021/04/sicilia-no-inverno.jpg', disponibilidade: true },
    { id: 2, pais: 'França', titulo: 'Conheça Paris', descricao: 'Aéreo + Hotel (5 diárias)', data: 'Agosto/2023', link: 'https://www.hurb.com/br/packages/paris-passagem-aerea-hospedagem/1405055', url: 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/75.jpg', disponibilidade: true },
    { id: 3, pais: 'México', titulo: 'Tudo incluso! Cancún', descricao: 'Resort All Inclusive (5 diárias)', data: 'Abril/2024', link: 'https://www.hurb.com/br/packages/cancun-passagem-aerea-hospedagem-all-inclusive/1393673', url: 'https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/viagem-para-cancun.jpg', disponibilidade: true },
    { id: 4, pais: 'Alemanha', titulo: 'Berlim te espera!', descricao: 'Aéreo + Hotel (7 diárias)', data: 'Março/2025', link: 'https://www.hurb.com/br/packages/berlim-passagem-aerea-hospedagem/1417720', url: 'https://cdn.getyourguide.com/img/location/e7cd5b184985f010.jpeg/75.jpg', disponibilidade: true },
    { id: 5, pais: 'Irlanda', titulo: 'Visite Dublin', descricao: 'Aéreo + Hotel (5 diárias)', data: 'Março/2025', link: 'https://www.hurb.com/br/packages/dublin-passagem-aerea-hospedagem/1428162', url: 'https://cdn.wizard.com.br/wp-content/uploads/2014/10/11151349/curiosidades-sobre-irlanda.jpg', disponibilidade: true },
    { id: 6, pais: 'Japão', titulo: 'Tokio de pertinho', descricao: 'Aéreo + Hotel (7 diárias)', data: 'Março/2025', link: 'https://www.hurb.com/br/packages/toquio-passagem-aerea-hospedagem/1416755', url: 'https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2015/10/Shibuya-Japao.jpg', disponibilidade: true }
  ]
  return (
    <div>
      <Header />
      <Introduction />
      <section className='card-catalog'>
        {destinos
        .filter(item => item.disponibilidade == true)
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
      <Divider />
      </section>
      <section>
        <div className='forms-app'>
        <FormPacotes />
        <FormCadastro />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
