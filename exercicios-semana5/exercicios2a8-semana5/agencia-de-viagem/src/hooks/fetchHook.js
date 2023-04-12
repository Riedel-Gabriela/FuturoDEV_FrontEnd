import { useState, useEffect } from "react";

// Hook customizado podem ser simples ou complexos, o importante é que sejam adequados para seu projeto
export const useFetch = (url) => {
  const [itens, setItens] = useState(null);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      });
  };

  useEffect(() => getData(), []);

  const handleDelete = (item) => {
    fetch(`${url}/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    })
      .then(() => getData());
  };

  return [itens, handleDelete];
}