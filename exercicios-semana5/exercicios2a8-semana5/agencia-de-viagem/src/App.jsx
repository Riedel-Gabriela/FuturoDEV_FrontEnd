import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import './components/molecules'
import { Home, CadastroPacote, NotFound } from './components/pages/index'
import { Footer, Header } from './components/molecules'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CadastroPacote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
