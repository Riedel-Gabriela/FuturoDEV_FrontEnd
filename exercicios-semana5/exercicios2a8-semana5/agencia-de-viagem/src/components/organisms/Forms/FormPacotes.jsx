import './Forms.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../hooks/formHook'
import { useFetch } from '../../../hooks/fetchHook'

export default function FormPacotes() {
    const { handleChange, form, handleRadioButton } = useForm({pais:"", titulo:"", descricao:"", data:"", link:"", url:"", disponibilidade: ""})
    const navigate = useNavigate();

    const { createData } = useFetch('http://localhost:3003/destinos')
    const handleSubmit = (event) => {
        event.preventDefault();
        createData(form)
        navigate('/');
    }

    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Adicione seu pacote aqui</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        País ou região:<br />
                        <input type="text" name="pais" value={form.pais} onChange={handleChange} /><br />
                        Título:<br />
                        <input type="text" name="titulo" value={form.titulo} onChange={handleChange} /><br />
                        Descrição:<br />
                        <input type="text" name="descricao" value={form.descricao} onChange={handleChange} /><br />
                        Data:<br />
                        <input type="text" name="data" value={form.data} onChange={handleChange} /><br />
                        Link do pacote:<br />
                        <input type="text" name="link" value={form.link} onChange={handleChange} /><br />
                        Url da imagem:<br />
                        <input type="text" name="url" value={form.url} onChange={handleChange} /><br />
                        Disponibilidade: <br />
                        <input type="radio" name="disponibilidade" value={true} onChange={handleRadioButton} />Disponível<br />
                        <input type="radio" name="disponibilidade" value={false} onChange={handleRadioButton} />Indisponível<br />
                        <button type="submit" className="button-form">enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}