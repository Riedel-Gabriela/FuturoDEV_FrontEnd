import './Forms.css'
import { useForm } from '../../../hooks/formHook'
import { Button } from '../../atoms'

export default function FormCadastro() {
    const { handleChange, handleSubmit, form, message } = useForm({nome:"", email:"", telefone:""})
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
                        <Button tipo="submit" classe="form">enviar</Button>
                    </form>
                </div>
                <p>{message}</p>
            </div>
        </>
    )
}