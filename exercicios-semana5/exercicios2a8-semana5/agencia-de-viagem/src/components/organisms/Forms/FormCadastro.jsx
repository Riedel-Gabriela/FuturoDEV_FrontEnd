import './Forms.css'
import { useForm } from '../../../hooks/hooks'
import { Input, Button } from '../../atoms'

export default function FormCadastro() {
    const { handleChange, handleSubmit, form } = useForm({nome:"", email:"", telefone:""})
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Fique por dentro das novidades</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        <Input tipo="text" valor={form.nome} onchange={handleChange} nome="nome">Nome:</Input>
                        <br />
                        <Input tipo="email" valor={form.email} onchange={handleChange} nome="email">Email:</Input>
                        <br />
                        <Input tipo="text" valor={form.telefone} onchange={handleChange} nome="telefone">Telefone:</Input>
                        <br />
                        <Button tipo="submit" classe="form">enviar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}