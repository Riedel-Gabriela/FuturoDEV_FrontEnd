import { useForm } from "../../hooks";

export const FormExample = () => {
    const { handleChange, handleSubmit, form } = useForm({name:"", email:"", senha:""})
    return (
        <section>
            <h3>Form sem custom hook</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.name} onChange={handleChange} placeholder="nome" name="name"/>
                <input type="email" value={form.email} onChange={handleChange} placeholder="email" name="email"/>
                <input type="password" name="senha" value={form.senha} onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
};