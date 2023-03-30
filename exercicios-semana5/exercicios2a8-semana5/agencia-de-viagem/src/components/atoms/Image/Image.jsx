import './Image.css'

export default function Image({imagemUrl}) {
    return (
        <img
        className='imagem-quadrada'
        src={imagemUrl}
        alt='Imagem'
        />
    )
}