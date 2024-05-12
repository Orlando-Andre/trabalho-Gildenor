const porta = 1010

var tipo;
var numeroLinha = 0;

$(document).ready(function() {

  //Pega o tipo de usuario - Administrador ou padrão
  tipo = obterParametroDaURL('tipo');

});

function obterParametroDaURL(parametro) {
  var url = new URL(window.location.href);
  return url.searchParams.get(parametro);
}


function validarCodigoRastreio() {

    if(nome.length == 0 || nome == "") {
      alert("Informe um nome");
  
      var campoNome = document.getElementById('nome');
      campoNome.focus();
  
    }else{
      if(senha.length == 0 || senha == ""){
        alert("Informe uma senha")
  
        var campoSenha = document.getElementById('senha');
        campoSenha.focus();
  
      } else {    
        return true;
      }
    }
}

//Pesquisa Simples
function pesquisaSimples() {

    numeroLinha = 0;
    let txtPesquisa = $("#pesquisa").val();
  
    if(txtPesquisa.length == 0 || txtPesquisa == "") {
      alert("Informe um código de rastreio para realizar a pesquisa");
  
      var campoPesquisa = document.getElementById('pesquisa');
      campoPesquisa.focus();
  
    } else {
  
      $.ajax({
                
        url:"http://localhost:"+ porta +"/rastreio/pesquisar/" + txtPesquisa,
        type: 'get',
        data: {},
  
        success: function(msg) {
  
          if(Object.keys(msg).length === 0) {
  
            alert("Código de rastreio não encontrado...");
            linhas = '<tr><td>'  + "    " + '</td></tr>'
            //Adiciona as linhas na tabela
            $('#corpoTabela').html(linhas);
  
          } else {
  
            let linhas;
  
            for(let i = 0; i < msg.length; i++) {
              linhas += mostraLinhaTabela(msg[i]);
            }  
  
            //Adiciona as linhas na tabela
            $('#corpoTabela').html(linhas);
          }
  
          document.getElementById("pesquisa").value = "";
  
        },
        error: function(msg){
          alert("Erro de Pesquisa...")
        }
  
      });
    }
}

function mostraLinhaTabela(data) {
  numeroLinha ++;
    return ( 
      '<tr><td>'  + numeroLinha + '. ' + data.descricao + '</td></tr>'
    );
}
  