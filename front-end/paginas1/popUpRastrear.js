const porta = 1010

var codigoRastreio;

window.addEventListener('message', function(event) {

  const dados = event.data;

  if (dados) {

    codigoRastreio = dados.cod;
    carregaTabela();

  }
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
          
          linhas += mostraLinhaTabela(msg[i] , i+1);

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



function mostraLinhaTabela(data , i) {
  return (

    '<tr><td>'+i+'.' + data.descricao + '</td></tr>'

  );
}

//ouve se haverá cliques no botão 
document.getElementById('btnFechar').addEventListener('click', function(){
    //manda essa mensagem para o home
    parent.postMessage('fecharIframe', "*");

});




