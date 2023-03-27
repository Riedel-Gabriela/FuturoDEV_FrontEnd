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
                cardPersonagem.innerHTML += `<p class="id">Id: ${results[i].id}</p>`;
                cardPersonagem.innerHTML += `<p class="nome">Nome: ${results[i].name}</p>`;
                cardPersonagem.innerHTML += `<p class="status">Status: ${results[i].status}</p>`;
                cardPersonagem.innerHTML += `<p class="species">Espécie: ${results[i].species}</p>`;
                cardPersonagem.innerHTML += `<p class="type">Tipo: ${results[i].type}</p>`;
                cardPersonagem.innerHTML += `<p class="gender">Gênero: ${results[i].gender}</p>`;
                cardPersonagem.innerHTML += `<p class="origin">Origem: ${results[i].origin.name}</p>`;
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
