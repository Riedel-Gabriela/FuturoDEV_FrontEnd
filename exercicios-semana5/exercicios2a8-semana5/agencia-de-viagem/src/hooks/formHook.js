import { useState } from "react";

export function useForm(initialState) {
    const [form, setForm] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        setForm(initialState)
    };

    return { handleChange, handleSubmit, form }
}