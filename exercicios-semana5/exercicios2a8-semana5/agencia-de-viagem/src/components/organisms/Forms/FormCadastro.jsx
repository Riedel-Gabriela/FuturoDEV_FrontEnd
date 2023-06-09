import './Forms.css'
import { useForm } from '../../../hooks/formHook'
import { useFetch } from '../../../hooks/fetchHook'

export default function FormCadastro() {
    const { handleChange, form, resetForm } = useForm({nome:"", email:"", telefone:""})
    const { createData } = useFetch('http://localhost:3003/cadastro')
    const handleSubmit = (event) => {
        event.preventDefault();
        createData(form)
        resetForm();
    }
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Fique por dentro das novidades</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        Nome:<br />
                        <input type="text" name="nome" value={form.nome} onChange={handleChange} /><br />
                        Email:<br />
                        <input type="email" name="email" value={form.email} onChange={handleChange} /><br />
                        Telefone:<br />
                        <input type="text" name="telefone" value={form.telefone} onChange={handleChange} /><br />
                        <button type="submit" className="button-form">enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}