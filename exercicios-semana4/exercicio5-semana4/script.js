let url = "https://rickandmortyapi.com/api/character"

const fetchPersonagens = async (url) => {
    const APIResponse = await fetch(url);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
    listarPersonagens(data)
}

const listarPersonagens = async () => {
    const data = await fetchPersonagens(url)
    if (data) {
        const { info, results } = data
        let mainContainer = document.querySelector('.personagem')
        for (let i = 0; i < results.length; i++) {
            if (results[i].status === 'Alive') {
                let cardPersonagem = document.createElement('div')
                cardPersonagem.innerHTML += `<img src = ${results[i].image} alt="imagem do produto">`;
                cardPersonagem.innerHTML += `<p class="id"><span class="itens-color">Id:</span> ${results[i].id}</p>`;
                cardPersonagem.innerHTML += `<p class="nome"><span class="itens-color">Nome:</span> ${results[i].name}</p>`;
                cardPersonagem.innerHTML += `<p class="status"><span class="itens-color">Status:</span> ${results[i].status}</p>`;
                cardPersonagem.innerHTML += `<p class="species"><span class="itens-color">Espécie:</span> ${results[i].species}</p>`;
                cardPersonagem.innerHTML += `<p class="type"><span class="itens-color">Tipo:</span> ${results[i].type}</p>`;
                cardPersonagem.innerHTML += `<p class="gender"><span class="itens-color">Gênero:</span> ${results[i].gender}</p>`;
                cardPersonagem.innerHTML += `<p class="origin"><span class="itens-color">Origem:</span> ${results[i].origin.name}</p>`;
                mainContainer.appendChild(cardPersonagem);
            }
        }
        url = info.next
        console.log(url)
    }
}

function proximaPagina() {
    listarPersonagens(url)
}
