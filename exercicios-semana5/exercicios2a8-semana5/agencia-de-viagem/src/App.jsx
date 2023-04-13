import './App.css'
import './components/molecules'
import { Divider } from './components/atoms'
import { Footer, Header, Introduction, Card } from './components/molecules'
import { FormPacotes, FormCadastro } from './components/organisms'
import { useFetch } from './hooks/fetchHook'

function App() {
  const [destinos] = useFetch("http://localhost:3003/destinos")
  return (
    <div>
      <Header />
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
      <Divider />
      </section>
      <section className='forms-app'>
        <FormPacotes />
        <FormCadastro />
      </section>
      <Footer />
    </div>
  )
}

export default App
