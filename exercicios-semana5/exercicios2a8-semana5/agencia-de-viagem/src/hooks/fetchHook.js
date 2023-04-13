import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //Sempre inicializa com uma lista, então o initial state é lista vazia
  const [itens, setItens] = useState([]);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      });
  };

  useEffect(() => getData(), []);
  
//usando o array, tem que lembrar que na primeira posição esta um e na segunda outro
//posso exportar um objeto e utilizar o nome do item.
  return [itens];
}