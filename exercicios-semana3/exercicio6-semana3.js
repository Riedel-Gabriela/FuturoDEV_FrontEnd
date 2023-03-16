//Ex 6 - Filter + map
//Usando o array original “listaDePessoas” faça um filtro, 
//mas dessa vez retornando os objetos que possuam idade menor que 18 anos. 

const listaDePessoas = [
    { nome: "Rayane", sobrenome: "Cristina", idade: 21 },
    { nome: "Carlos", sobrenome: "Henrique", idade: 17 },
    { nome: "Julio", sobrenome: "Cesar", idade: 19 },
    { nome: "Camila", sobrenome: "Fernandes", idade: 18 },
    { nome: "Julia", sobrenome: "Fernandes", idade: 10 },
    { nome: "Bruno", sobrenome: "Albuquerque", idade: 31 },
    { nome: "Túlio", sobrenome: "Bastos", idade: 22 },
    { nome: "Cristiane", sobrenome: "Maria", idade: 41 },
];

const menoresDeIdade = listaDePessoas.filter((pessoa) => pessoa.idade < 18)


//Com esse array de objetos filtrado, 
//agora use o .map para criar uma nova chave chamada anosParaMaioridade 
//sendo seu valor a quantidade de anos que falta para o usuário completar 18 anos.

const novaListaDePessoasMenoresDeIdade = menoresDeIdade.map((pessoa) => {
    const {nome, sobrenome, idade} = pessoa //Desestruturando
    const anosParaMaioridade = 18 - idade
    const novaPessoa = {
        nome : nome, //Quando a chave tem o mesmo nome do valor, não precisa colocar ": valor". Aqui pode apagar o nome como a seguir.
        sobrenome : pessoa.sobrenome, //desestruturei, o pessoa.chave viraria somente chave. Mas posso escrever de várias formas
        idade, //Quando a chave tem o mesmo nome do valor, não precisa colocar ": valor".
        anosParaMaioridade, //Quando a chave tem o mesmo nome do valor, não precisa colocar ": valor".
    }
    return novaPessoa
})

console.log(novaListaDePessoasMenoresDeIdade)