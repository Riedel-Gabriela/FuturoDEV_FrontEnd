//Criar e Adicionar Elementos


function addTextos() {
    const divCriarAdicionarConteudo = document.querySelector('#textos-acidionados')
    const novaDiv = document.createElement("div")
    novaDiv.innerHTML += '<p>Este parágrafo foi criado com javascript.</p>'
    novaDiv.innerHTML += '<p>Este parágrafo foi criado com javascript.</p>'
    novaDiv.innerHTML += '<p>Este parágrafo foi criado com javascript.</p>'
    novaDiv.innerHTML += '<p>Este parágrafo foi criado com javascript.</p>'
    novaDiv.innerHTML += '<p>Este parágrafo foi criado com javascript.</p>'
    divCriarAdicionarConteudo.appendChild(novaDiv)
}

