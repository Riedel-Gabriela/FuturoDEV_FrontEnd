import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState([]);

  useEffect(function effectFunction() {
    async function fetchCep() {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v1/88330275`);
      const json = await response.json();
      console.log(json)
      setCep(json.data);
    }
    fetchCep()
  }, []);

  return (
    <>
    <label>Digite o CEP:
    <input type='text' placeholder='00000000' />
    </label>
    </>
  );
}

export default App
