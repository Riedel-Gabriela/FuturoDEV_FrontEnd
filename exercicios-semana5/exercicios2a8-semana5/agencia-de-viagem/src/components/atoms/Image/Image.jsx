export default function Image({imagemUrl, textoAlternativo, formato}) {
    return (
        <img
        className={`imagem-${formato}`}
        src={imagemUrl}
        alt={textoAlternativo || "Imagem"}
        />
    )
}