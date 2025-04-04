function Coletarcep() {
    let cep = document.getElementById("cep").value;
    console.log(cep);
    dados(cep);
}
  async function dados(cep) {
   let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
   console.log(dados)
   dadosTela(dados) 
  
    
}

function dadosTela(dados) {
  document.querySelector("#endereco").innerHTML = dados.logradouro;
  document.querySelector("#bairro").innerHTML = dados.bairro;
  document.querySelector("#cidade").innerHTML = dados.localidade;
  document.querySelector("#estado").innerHTML = dados.estado;
  document.querySelector("#regiao").innerHTML = dados.regiao;
  
} 
function butaolimpar(){ 
 
  document.querySelector("#endereco").innerHTML = ""
  document.querySelector("#bairro").innerHTML = ""
  document.querySelector("#cidade").innerHTML = ""
  document.querySelector("#estado").innerHTML = ""
  document.querySelector("#regiao").innerHTML = ""
}
