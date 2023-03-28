import fetch from "node-fetch";
export default async function fetchPersonagens() {
    return await fetch(`https://rickandmortyapi.com/api/character/1`)
        .then(response => {
            return response.json()
        })
}