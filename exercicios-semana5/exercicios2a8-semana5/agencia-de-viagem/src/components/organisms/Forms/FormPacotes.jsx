import './Forms.css'
import { useForm } from '../../../hooks/hooks'
import { Input, Button } from '../../atoms'

export default function FormPacotes() {
    const { handleChange, handleSubmit, form } = useForm({pais:"", titulo:"", descricao:"", data:"", link:"", url:"", disponibilidade:""})
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Adicione seu pacote aqui</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        <Input tipo="text" nome="pais" valor={form.pais} onchange={handleChange}>País:</Input>
                        <br />
                        <Input tipo="text" nome="titulo" valor={form.titulo} onchange={handleChange}>Título:</Input>
                        <br />
                        <Input tipo="text" nome="descricao" valor={form.descricao} onchange={handleChange}>Descrição:</Input>
                        <br />
                        <Input tipo="date" nome="data" valor={form.data} onchange={handleChange}>Data:</Input>
                        <br />
                        <Input tipo="text" nome="link" valor={form.link} onchange={handleChange}>Link do pacote:</Input>
                        <br />
                        <Input tipo="text" nome="url" valor={form.url} onchange={handleChange}>Url da imagem:</Input>
                        <br />
                        Disponibilidade: <br />
                        <Input tipo="radio" nome="disponibilidade" valor={form.disponibilidade = true} onchange={handleChange}>Disponível</Input>
                        <br />
                        <Input tipo="radio" nome="disponibilidade" valor={form.disponibilidade = false} onchange={handleChange}>Indisponível</Input>
                        <br />
                        <Button tipo="submit" classe="form">enviar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}