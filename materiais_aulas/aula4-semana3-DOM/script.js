console.log('testando')

//acessar elemento
const elementoPorId = document.getElementById('acessar-elemento-por-id');
const elementoPorClasse = document.getElementsByClassName('acessar-elemento-por-classe')[0];
const elementoPorTag = document.getElementsByTagName('h5')[0];
const elementoPorIdSelector = document.querySelector('#acessar-elemento-por-seletor-id');
const elementoPorClasseSelector = document.querySelector('.acessar-elemento-por-seletor-classe');

//Criar e Adicionar Elementos
const divCriarAdicionarConteudo = document.querySelector('#criar-adicionar') //Primeiro seleciona a div que vai ser inserida a nova div
//== Criar elemento ==
const divQueCriamos = document.createElement('div') //cria a nova div que vai ser inserida na div anterior
divQueCriamos.innerHTML = '<p>Este é um parágrafo criado por javascript.</p>'
//== Adicionar elemento ==
divCriarAdicionarConteudo.appendChild(divQueCriamos) //adiciona a nova div na div anterior

//Podemos criar o elemento já com o conteúdo e inserir na página
divCriarAdicionarConteudo.innerHTML += '<span>Este span foi criado com javascript.</span>'
//o innerHTML substitui tudo dentro. Tem que ser declarado com o += para não apagar o conteúdo anterior.


//Deletar elemento
//Podemos remover direto o elemento
const paragrafoASerRemovido = document.getElementById('remover-elemento')
//paragrafoASerRemovido.remove()
//Ou removemos pelo elemento pai
const divPaiRemover = document.getElementById('remover')
//divPaiRemover.removeChild('remover-elemento')

//Alterar elementos
const paragrafoASerAlterado = document.getElementById('alterar-elemento')
    //alterar conteúdo
    paragrafoASerAlterado.innerHTML = 'Este parágrafo foi alterado com javascript.'
    paragrafoASerAlterado.innerText = 'Alterei o texto usando .innerText'
    //alterar o estilo
    //paragrafoASerAlterado.style.color = 'red'
    //paragrafoASerAlterado.style.fontSize = '30px'
    paragrafoASerAlterado.style = 'color: red; font-size: 30px'
    //alterar o atributo
    paragrafoASerAlterado.setAttribute('class', 'alterado')

//ONCLICK
const inputEscrever = document.getElementById('input-imprimir')

function escrever() {
    const valorDoInputEscrever = inputEscrever.value
    console.log(valorDoInputEscrever)
}

const botaoEscrever = document.getElementById('imprimir')

//adicionar elemento ao clicar
function adicionar() {
    const adicionarERemoverElemento = document.getElementById('adicionar-remover-elemento')
    adicionarERemoverElemento.innerHTML += '<p id="item-adicionado">Elemento adicionado</p>'
}
//remover elemento ao clicar
function remover() {
    const elementoAddRemovido = document.getElementById('item-adicionado')
    elementoAddRemovido.remove()
}

//alterar a cor ao passar o mouse
function alterarCor(cor) {
    const divQueVaiAlterarACor = document.getElementById('altera-cor')
    divQueVaiAlterarACor.style.backgroundColor = cor
}

//addEventListener

const inputAdicionar = document.querySelector('#input-adicionar')
const botaoAdicionarItem = document.getElementById('adicionar-item')
const lista = document.querySelector('#lista')

    //essa função não aparece no html. Recebe dois parâmetros, o que ele vai ouvir e uma função
botaoAdicionarItem.addEventListener('click', () => {
    lista.innerHTML += `<li>${inputAdicionar.value}</li>`
})
