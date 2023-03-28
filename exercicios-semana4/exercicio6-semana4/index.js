import fetchCEP from './apis/fetchCEP.js'
import fetchPokemon from './apis/fetchPokemon.js'
import fetchPersonagens from './apis/fetchRickAndMorty.js'

async function minhasReqs() {
    console.log(await fetchCEP())
    console.log(await fetchPokemon())
    console.log(await fetchPersonagens())
}

minhasReqs()