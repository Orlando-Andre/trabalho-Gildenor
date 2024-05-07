const porta = 1010

var tipo;

$(document).ready(function() {

  //Pega o tipo de usuario - Administrador ou padrão
  tipo = obterParametroDaURL('tipo');

  carregaTabela();

});


function obterParametroDaURL(parametro) {
  var url = new URL(window.location.href);
  return url.searchParams.get(parametro);
}

function carregaTabela() {
          
  $.ajax({
    
    url:"http://localhost:" + porta + "/agencia/carregarTabela",
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Sem Agencias cadastradas");

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

    '<tr><td>' + data.nome + '</td>' + 
    '<td>' + data.idAgencia + '</td>'+
    '<td>' + data.cep + '</td>'+
    '<td>' + data.cidade + '</td>'+

    '<td><button class="botao editar" id="btnEditar" onclick="editar('+ data.idAgencia +')">Editar</button>'+
    '<button class="botao excluir" id="btnExcluir" onclick="excluir('+ data.idAgencia + ')">Excluir</button></td></tr>'
  );
}

//Manipula modal
const abrirModal = () => document.getElementById('modal')
.classList.add('ativo')

const fecharModal = () => document.getElementById('modal')
.classList.remove('ativo')

document.getElementById('btnCadastrarAgencia').addEventListener('click', function() {
  abrirModal();

});

document.getElementById('modalFechar')
.addEventListener('click' , fecharModal)

function limpaModal() {

  location.reload();
  
}


//CRUD Agencia
function validarDadosModalCadastroAgencia(nome, cidade, cep) {

  if(nome.length == 0 || nome == "") {
    alert("Informe um nome");

    var campoNome = document.getElementById('nome');
    campoNome.focus();

  } else {
    
    if(cidade.length == 0 || cidade == ""){
      alert("Informe uma cidade");

      var campoCidade = document.getElementById('cidade');
      campoCidade.focus();

    }else {

      if(cep.length == 0 || cep == ""){
        alert("Informe um CEP");
  
        var campoCep = document.getElementById('cep');
        campoCep.focus();

      } else {
        return true;
      }
    }
  }
}

//O botão salvar da Modal chama esse função - Inserir
function inserirAgencia() {

  //coloquei esse tipo so para teste
  tipo = "Administrador";

  if(tipo === "Administrador") {

    let codigo = $("#codigo").val();
    let nome = $("#nome").val();
    let cidade = $("#cidade").val();
    let cep = $("#cep").val();

    var dadosValidados = validarDadosModalCadastroAgencia(nome, cidade, cep);

    if(dadosValidados == true) {

      if(codigo==="") { 

        $.ajax({
    
          url:"http://localhost:" + porta + "/agencia/inserir",
          type:'POST',
          data: JSON.stringify({
            nome: nome,
            cidade: cidade,
            cep: cep
            
          }),
      
          contentType:"application/json;charset=UTF-8",
      
          success: function(msg){
      
            alert("Agencia cadastrada com Sucesso!")
      
            carregaTabela();
            limpaModal();
            fecharModal();
              
          },
          error: function(msg) {
            alert("Erro de Inserção...")
          }
        });
      } else {

        // Editar
        $.ajax({
      
          url:"http://localhost:" + porta + "/agencia/atualizar",
          type:'PUT',
          data: JSON.stringify({
              idAgencia: codigo,
              nome: nome,
              cidade: cidade,
              cep: cep
          }),
      
          contentType:"application/json;charset=UTF-8",
      
          success: function(msg) {
      
            alert("Agencia Atualizada com Sucesso!")
      
            carregaTabela();
            limpaModal();
            fecharModal();
              
          },
          error: function(msg) {
            alert("Erro de Atualização...")
          }
        });
      }
    }
  } else {
    alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função :(");
  }
}  


//O botão editar da tabela chama essa função
function editar(id) {

  //coloquei esse tipo so para teste
  tipo = "Administrador";

  if(tipo === "Administrador") {
    //ir no banco de dados pesquisar com o id
    $.ajax({
                
      url:"http://localhost:" + porta + "/agencia/pesquisar/" + id,
      type: 'get',
      data: {},
      
      success: function(msg) {

        //Preencher modal com os dados a serem editados
        if(Object.keys(msg).length === 0) {

          alert("Agencia não encontrada...")

        } else {

          $("#codigo").val(msg.idAgencia);
          $("#nome").val(msg.nome);
          $("#cidade").val(msg.cidade);
          $("#cep").val(msg.cep);

          abrirModal();

        }
      },

      error: function(msg){
        alert("Erro de busca...")
      }

    });

  } else {
    alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função :(");
  }
}


//Excluir
function excluir(id) {

  //coloquei esse tipo so para teste
  tipo = "Administrador";

  if(tipo === "Administrador") {
    $.ajax({

      url:"http://localhost:" + porta + "/agencia/excluir/" + id,
      type: 'delete',
      data : {},
  
      success: function(msg) {
  
        alert("Exclusão efetuada com sucesso");
        carregaTabela();
  
      },
      error: function(msg){
        alert("Erro de exclusão")
      }
    });
  
  }else{
    alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função :(");
  }

}

//Pesquisa Simples pelo nome
function pesquisaSimples() {

  let txtPesquisa = $("#pesquisa").val();

  if(txtPesquisa.length == 0 || txtPesquisa == "") {

    alert("Informe um valor a ser pesquisado");

    var campoPesquisa = document.getElementById('pesquisa');
    campoPesquisa.focus();

  } else {


    $.ajax({
            
      url:"http://localhost:"+ porta +"/agencia/pesquisaSimplesNome/" + txtPesquisa,
      type: 'get',
      data: {},
  
      success: function(msg) {
  
        if(Object.keys(msg).length === 0) {
  
          alert("Agência não encontrada...");
  
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
