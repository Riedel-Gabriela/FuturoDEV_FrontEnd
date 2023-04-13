import { useState } from "react";

export function useForm(initialState) {
    const [form, setForm] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event, url) => {
        const { name, value } = event.target
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
          })
            .then(() => setForm({ ...form, [name]: value }))
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

    return { handleChange, handleSubmit, handleDelete, form }
}