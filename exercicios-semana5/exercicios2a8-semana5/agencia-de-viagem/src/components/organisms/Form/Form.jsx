import './Form.css'
import { Divider } from '../../atoms'

export default function Form() {
    return (
        <>
            <Divider />
            <div className='form-container'>
            <h1 className='formulario-h1'>Adicione seu pacote aqui</h1>
            <div className='formulario'>
            <form>
                <label>
                    País:
                    <input type="text" name="pais" />
                </label>
                <br />
                <label>
                    Título:
                    <input type="text" name="titulo" />
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" name="descricao" />
                </label>
                <br />
                <label>
                    Data:
                    <input type="date" name="data" />
                </label>
                <br />
                <label>
                    Link do pacote:
                    <input type="text" name="link" />
                </label>
                <br />
                <label>
                    Url da imagem:
                    <input type="text" name="url" />
                </label>
                <br />
                <label>
                    Disponibilidade: <br />
                    <input type="radio" name="disponibilidade" id="true" />
                    <label htmlFor="true">Disponível</label><br />
                    <input type="radio" name="disponibilidade" id="false" />
                    <label htmlFor="false">Indisponível</label>
                </label>
                <br />
                <button type="submit" className="button-form">enviar</button>
            </form>
            </div>
            </div>
        </>
    )
}