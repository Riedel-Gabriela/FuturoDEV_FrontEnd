import fetch from "node-fetch";
export default async function fetchCEP() {
    return await fetch(`https://brasilapi.com.br/api/cep/v1/88330275`)
        .then(response => {
            return response.json()
        })

}
