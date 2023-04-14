import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3003/cadastro', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(() => setForm(initialState))
      .then(() => setMessage('Cadastrado com sucesso'))
    console.log(form);
  };

  const handleDelete = (item) => {
    fetch(`${url}/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    })
      .then(() => getData());
  };

  return { handleChange, handleSubmit, handleDelete, form, message }
}