import { Image } from "../../atoms";

export default function Card() {
    return (
        <div>
            <div>
                <Image
                    imagemUrl='https://images.travelclass.tur.br/uploads/2021/04/sicilia-no-inverno.jpg'
                    formato='quadrada'
                    textoAlternativo='Imagem Itália'
                />
                <h2>Trip Title</h2>
                <h3>Country</h3>
                <p>Description</p>
                <p>date</p>
                <a href="#">veja mais</a>
            </div>
            <div>
                <Image
                    imagemUrl='https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/75.jpg'
                    formato='quadrada'
                    textoAlternativo='Imagem Paris'
                />
                <h2>Trip Title</h2>
                <h3>Country</h3>
                <p>Description</p>
                <p>date</p>
                <a href="#">veja mais</a>
            </div>
            <div>
                <Image
                    imagemUrl='https://s2.static.brasilescola.uol.com.br/be/2022/06/paisagem-van-vieng-laos.jpg'
                    formato='quadrada'
                    textoAlternativo='Imagem Laos'
                />
                <h2>Trip Title</h2>
                <h3>Country</h3>
                <p>Description</p>
                <p>date</p>
                <a href="#">veja mais</a>
            </div>
        </div>
    )
}