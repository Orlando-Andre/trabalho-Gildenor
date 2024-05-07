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

        alert("Sem agências cadastradas");

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
    '<td>' + data.cidade + '</td>'+
    '<td>' + data.cep + '</td>'+

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
  preencheCmbCategoria();

});

document.getElementById('modalFechar')
.addEventListener('click' , fecharModal)

function limpaModal() {

  location.reload();
  
}


//Consulta todas as categorias para preencher a combobox de cadastro de Lojas
function preencheCmbCategoria() {

  $.ajax({
      
    url:"http://localhost:" + porta + "/categoria/consultaTodos",
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Sem Categorias cadastradas");

      }else {

        let opcoes;

        for(let i = 0; i < msg.length; i++) { 
          
          opcoes += mostraLinhaCmbCategoria(msg[i]);

        }  

        //Adiciona as opcoes na combobox ala
        $('#cmbCategoria').html(opcoes);
      }

    },
    error: function(msg){
      alert("Erro de busca...")
    }
  });

}

function mostraLinhaCmbCategoria(data) {
  return (

    '<option value="'+ data.idCategoria + '">' + data.nome +'</option>'
    
  );
}


//CRUD Lojas
function validarDadosModalCadastroLoja(nome, cnpj) {

  if(nome.length == 0 || nome == "") {
    alert("Informe um nome");

    var campoNome = document.getElementById('nome');
    campoNome.focus();

  } else {

    //Valida se esta vazio
    if(cnpj.length == 0 || cnpj == ""){
      alert("Informe um CNPJ");

      var campoCnpj = document.getElementById('cnpj');
      campoCnpj.focus();

    }else {

      return true;
    }
  }
}

//O botão salvar da Modal chama esse função - Inserir
  function inserirLoja() {

    if(tipo === "Administrador") {

      let nome = $("#nome").val();
      let cnpj = $("#cnpj").val();
      let categoria = $("#cmbCategoria").val();
    
      var dadosValidados = validarDadosModalCadastroLoja(nome, cnpj);

      if(dadosValidados == true) {

        $.ajax({
      
          url:"http://localhost:" + porta + "/loja/inserir",
          type:'POST',
          data: JSON.stringify({
            nome: nome,
            cnpj: cnpj,
            categoria: {
              idCategoria: categoria
            }
          }),
      
          contentType:"application/json;charset=UTF-8",
      
          success: function(msg){
      
            alert("Loja cadastrada com Sucesso!")
      
            carregaTabela();
            limpaModal();
            fecharModal();
              
          },
          error: function(msg) {
            alert("Erro de Inserção...")
          }
        });
      }

    }else{
      alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função :(");
    }
  }  


//O botão editar da tabela chama essa função
function editar(id) {

  preencheCmbCategoria();

  if(tipo === "Administrador") {
    //ir no banco de dados pesquisar com o id
    $.ajax({
                
      url:"http://localhost:" + porta + "/loja/consultaPorId/" + id,
      type: 'get',
      data: {},
      
      success: function(msg) {

        //Preencher modal com os dados a serem editados
        if(Object.keys(msg).length === 0) {

          alert("Loja não encontrada...")

        }else {

          $("#nome").val(msg.nome);
          $("#cnpj").val(msg.cnpj);

          
          //pegar id-Categoria
          var categoria = msg.categoria
          var idCategoria = categoria.idCategoria
          $("#cmbCategoria").val(idCategoria)

          abrirModal();

          //Troca a função a ser chamada pelo botão salvar da Modal
          document.getElementById("btnSalvar").onclick = function() {
            enviarDadosEditar(id);

          }
        }
      },

      error: function(msg){
        alert("Erro de busca...")
      }

    });

  }else{
    alert("Acesso Negado! Este Usuário não tem permissão para acessar essa função :(");
  }
}

function enviarDadosEditar(id) {

  let nome = $("#nome").val();
  let cnpj = $("#cnpj").val();
  let categoria = $("#cmbCategoria").val();
  

  var dadosValidados = validarDadosModalCadastroLoja(nome, cnpj);

  if(dadosValidados == true) {

    $.ajax({
  
      url:"http://localhost:" + porta + "/loja/atualizar",
      type:'PUT',
      data: JSON.stringify({
          idLoja:id,
          nome: nome,
          cnpj: cnpj,
          
          categoria: {
            idCategoria: categoria
          }
          
      }),
  
      contentType:"application/json;charset=UTF-8",
  
      success: function(msg){
  
        alert("Loja Atualizada com Sucesso!")
  
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


//Excluir
function excluir(id) {

  if(tipo === "Administrador") {
    $.ajax({

      url:"http://localhost:" + porta + "/loja/excluir/" + id,
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

//Pesquisa complexa
function pesquisaComplexa() {

  let cmbPesquisa = $("#cmbPesquisaComplexa").val();
  let txtPesquisa = $("#pesquisa").val();

  if(txtPesquisa.length == 0 || txtPesquisa == "") {

    alert("Informe um valor a ser pesquisado");

    var campoPesquisa = document.getElementById('pesquisa');
    campoPesquisa.focus();

  }

  if(cmbPesquisa === "nome"){

    // chamar método que pesquisa com nome
    pesquisaLojaNome(txtPesquisa);

  } else {
    //cmbPesquisa === cnpj

    //chamar método que pesquisa com cnpj
    pesquisaLojaCnpj(txtPesquisa);

  }
}

//Pesquisa Loja Por nome
function pesquisaLojaNome(nome) {
  
  $.ajax({
            
    url:"http://localhost:"+ porta +"/loja/pesquisaComplexaNome/" + nome,
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Loja não encontrada...");

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

//Pesquisa loja por cnpj
function pesquisaLojaCnpj(cnpj){

  $.ajax({
            
    url:"http://localhost:"+ porta +"/loja/pesquisaComplexaCnpj/" + cnpj,
    type: 'get',
    data: {},

    success: function(msg) {

      if(Object.keys(msg).length === 0) {

        alert("Loja não encontrada...");

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