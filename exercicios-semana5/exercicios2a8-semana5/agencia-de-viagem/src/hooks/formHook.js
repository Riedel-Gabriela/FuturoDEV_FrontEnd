import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const resetForm = () => setForm(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadioButton = (event) => {
    form.disponibilidade = event.target.value==='true'?true:false;
}

  return { handleChange, form, resetForm, handleRadioButton }
}