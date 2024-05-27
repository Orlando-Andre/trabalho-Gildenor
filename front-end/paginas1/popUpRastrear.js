const porta = 1010

var codigoRastreio;

$(document).ready(function() {

  carregaTabela();

});


function carregaTabela() {
          
  $.ajax({
    
    url:"http://localhost:" + porta + "/status/consultar/" + codigoRastreio,
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Objeto não encontrado");

      }else {

        let linhas;

        for(let i = 0; i < msg.length; i++) { 
          
          linhas += mostraLinhaTabela(msg[i]);

        }  

        //Adiciona as linhas na tabela
        $('#corpoTabela').html(linhas);
      }

    },
    error: function(msg){
      alert("Erro de busca...")
    }
  });
}


function mostraLinhaTabela(data) {
  return (

    '<tr><td>' + data.descricao + '</td></tr>'

  );
}


//ouve se haverá cliques no botão 
document.getElementById('btnFechar').addEventListener('click', function(){
    //manda essa mensagem para o home
    parent.postMessage('fecharIframe', "*");

});


function funcaoReceptora(valor) {

  codigoRastreio = valor

}

