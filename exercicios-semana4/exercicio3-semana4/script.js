$("#cep").blur(function (e) {
    let cep = this.value
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then(response => {
      response.json()
        .then(data => showData(data))
    })
})

const showData = (result) => {
    for(const campo in result){
      if(document.querySelector("#"+campo)){
        document.querySelector("#"+campo).value = result[campo]
  
      }
    }
  }