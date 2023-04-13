import './Forms.css'
import { useState } from 'react'
import { useForm } from '../../../hooks/formHook'
import { Button } from '../../atoms'

export default function FormPacotes() {
    const { handleChange, handleSubmit, form } = useForm({pais:"", titulo:"", descricao:"", data:"", link:"", url:"", disponibilidade: true})
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Adicione seu pacote aqui</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        País:<br />
                        <input type="text" name="pais" value={form.pais} onChange={handleChange} /><br />
                        Título:<br />
                        <input type="text" name="titulo" value={form.titulo} onChange={handleChange} /><br />
                        Descrição:<br />
                        <input type="text" name="descricao" value={form.descricao} onChange={handleChange} /><br />
                        Data:<br />
                        <input type="date" name="data" value={form.data} onChange={handleChange} /><br />
                        Link do pacote:<br />
                        <input type="text" name="link" value={form.link} onChange={handleChange} /><br />
                        Url da imagem:<br />
                        <input type="text" name="url" value={form.url} onChange={handleChange} /><br />
                        Disponibilidade: <br />
                        <input type="radio" name="disponibilidade" value={form.disponibilidade} onChange={handleChange} />Disponível<br />
                        <input type="radio" name="disponibilidade" value={form.disponibilidade} onChange={handleChange} />Indisponível<br />
                        <Button type="submit" classe="form">enviar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}