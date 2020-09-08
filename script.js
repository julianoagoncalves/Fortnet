//Busca o elemento <input> com o valor do CEP
let input = document.getElementById('cep')

//Adiciona um Listener do evento "On Change" no campo CEP
input.addEventListener('change', (e) => {
    //Recupera o valor escrito no campo
    let cep = e.target.value
    
    //Instancia a requisição para o servidor da API
    const request = new Request(`https://viacep.com.br/ws/${cep}/json`)

    fetch(request)
        .then(response => {
            response.json().then((value) => {
            preencheCampos(value)
        })
        .catch(error => {
            console.error(error);
        })
    })

})

let preencheCampos = (data) => {

    const logradouro = document.getElementById("logradouro")
    const uf = document.getElementById("uf")
    const localidade = document.getElementById("localidade")
    const bairro = document.getElementById("bairro")

    logradouro.value = data.logradouro
    uf.value = data.uf
    localidade.value = data.localidade
    bairro.value = data.bairro
}