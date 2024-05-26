const porta = 1010

var tipo;
var numeroLinha = 0;

$(document).ready(function() {

  //Pega o tipo de usuario - Administrador ou padrão
  tipo = obterParametroDaURL('tipo');

  preencheCmbAgencia();

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

      // pesquisar se aquele código foi realmente gerado
      $.ajax({
                
        url:"http://localhost:"+ porta +"/envios/pesquisar/" + txtPesquisa,
        type: 'get',
        data: {},
  
        success: function(msg) {

  
          if(msg === null || msg === undefined || Object.keys(msg).length === 0) {

            alert("Esse código de envio não existe");

            linhas = '<tr><td>'  + "    " + '</td></tr>'

            //Adiciona as linhas na tabela
            $('#corpoTabela').html(linhas);

            document.getElementById("pesquisa").value = "";
  
          } else {

            // pesquisar o rastreiamento do código digitado 
            $.ajax({
                        
              url:"http://localhost:"+ porta +"/rastreio/pesquisar/" + txtPesquisa,
              type: 'get',
              data: {},
        
              success: function(msg) {
        
                if(Object.keys(msg).length === 0) {
        
                  alert("Nenhuma informação desse código foi inserida");

                  linhas = '<tr><td>'  + "    " + '</td></tr>'

                  //Adiciona as linhas na tabela
                  $('#corpoTabela').html(linhas);

                  // document.getElementById("pesquisa").value = "";
        
                } else {
        
                  let linhas;
        
                  for(let i = 0; i < msg.length; i++) {
                    linhas += mostraLinhaTabela(msg[i]);
                  }  
        
                  //Adiciona as linhas na tabela
                  $('#corpoTabela').html(linhas);
                }
        
              },
              error: function(msg){
                alert("Erro de Pesquisa...")
              }
        
            });

          }
  
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


//Consulta todas as agências para preencher a combobox de agências
function preencheCmbAgencia() {

  $.ajax({
      
    url:"http://localhost:" + porta + "/agencia/carregarTabela",
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Sem agências cadastradas");

      }else {

        let opcoes;

        for(let i = 0; i < msg.length; i++) { 
          
          opcoes += mostraLinhaCmbAgencia(msg[i]);

        }  

        //Adiciona as opcoes na combobox 
        $('#cmbAgencia').html(opcoes);
        $('#cmbAgenciaDestino').html(opcoes);
      }

    },
    error: function(msg){
      alert("Erro de busca...")
    }
  });
}

function mostraLinhaCmbAgencia(data) {
  return (

    '<option value="'+ data.idAgencia + '">' + data.nome +'</option>'
    
  );
}

function atualizarRastreio() {

  let codigoEnvio = $("#pesquisa").val();

  let codigoAgenciaAtual = $("#cmbAgencia").val();
  let nomeAgenciaAtual = $("#cmbAgencia option:selected").text();

  let status = $("#comboboxStatus").val();

  let codigoAgenciaDestino = $("#cmbAgenciaDestino").val();
  let nomeAgenciaDestino = $("#cmbAgenciaDestino option:selected").text();

  let descricao = "Transferindo da " + nomeAgenciaAtual + " " + "para" + " " + nomeAgenciaDestino;


  if(tipo === "Administrador") {

    alert("Entrou no if");

    $.ajax({
    
      url:"http://localhost:" + porta + "/rastreio/atualizar",
      type:'POST',
      data: JSON.stringify({
          
        descricao: descricao,
        gerar_envio: {
          idEnvio: codigoEnvio
        }

      }),
  
      contentType:"application/json;charset=UTF-8",
  
      success: function(msg){
  
        alert("Rastreio atualizado com sucesso!")
  
        pesquisaSimples();
        limpaModal();
        fecharModal();
          
      },
      error: function(msg) {
        alert("Erro de Inserção...")
      }
    });

  }else{
    alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função");
  }

}
  