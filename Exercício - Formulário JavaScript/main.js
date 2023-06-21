// Como o próprio método diz, função para poder replicar o conteudo dos campos Nome e Sobrenome
// Possibilitando a criação do login, concatenando o "." entre o conteudo e conteudo2, gerando o login
function replicarConteudo() {
    var conteudo = document.getElementById("nome").value;
    var conteudo2 = document.getElementById("sobrenome").value;
    var resultado = conteudo + "." + conteudo2;
                                                                           //Expressões Regulares
    document.getElementById("login").value = resultado.replace(/\s/g, ""); //.replace(/\s/g, "") tem como
                                                                           // função retirar os espaços
                                                                           // ainda preciso compreende melhor
                                                                           // o funcionamento da mesma
    

}


function completarFormulario(dadosEndereco){
    document.getElementById("endereco").value = dadosEndereco.logradouro;
    document.getElementById("bairro").value = dadosEndereco.bairro;
    document.getElementById("cidade").value = dadosEndereco.localidade;
    document.getElementById("estado").value = dadosEndereco.uf;

}
// Função abaixo é idealizada para consumir a API https://viacep.com.br/, validando e coletando informações
// O formato padrão do arquivo que sera coletado da API sera em formato Json 

//Busca o Cep quando a label "sai de foco"
document.getElementById("cep").addEventListener('focusout', getCEPLocation);


async function getCEPLocation() {
    
    var cep = document.getElementById("cep").value;
    cep.replace(/\D/g, ""); //Função de retirar os caracteres não numéricos
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var dados = await fetch(url);
    var dadosEndereco = await dados.json();
    if(dadosEndereco.hasOwnProperty('erro')){
        var cepErro = document.getElementById('cep-erro')
        cepErro.classList.remove('d-none')
    }else{
        completarFormulario(dadosEndereco)
        var cepErro = document.getElementById('cep-erro')
        cepErro.classList.add('d-none')}
    
    
        
  

}
    

     
    
