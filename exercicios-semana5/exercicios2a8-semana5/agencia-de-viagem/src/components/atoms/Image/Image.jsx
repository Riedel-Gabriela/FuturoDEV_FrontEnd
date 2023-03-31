import './Image.css'

export default function Image({imagemUrl, formato}) {
    return (
        <img
        className={`imagem-${formato}`}
        src={imagemUrl}
        alt='Imagem'
        />
    )
}