import fetch from "node-fetch";
export default async function fetchPokemon() {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(response => {
            return response.json()
        })
}