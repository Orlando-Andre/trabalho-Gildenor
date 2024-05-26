const porta = 9595

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
      
      url:"http://localhost:" + porta + "/usuario/consultaTodos",
      type: 'get',
      data: {},

      success: function(msg) {

        if(Object.keys(msg).length === 0) {

          alert("Sem Usuários cadastrados");

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
      '<td>' + data.email + '</td>'+
      '<td>' + data.tipo + '</td>'+

      '<td><button class="botao verde" id="btnEditar" onclick="editar('+ data.idUsuario +')">Editar</button>'+
      '<button class="botao vermelho" id="btnExcluir" onclick="excluir('+ data.idUsuario + ')">Excluir</button></td></tr>'
    );
  }


//Manipula modal
const abrirModal = () => document.getElementById('modal')
  .classList.add('ativo')

const fecharModal = () => document.getElementById('modal')
  .classList.remove('ativo')

document.getElementById('btnCadastrarUsuario')
  .addEventListener('click' , abrirModal)

document.getElementById('modalFechar')
  .addEventListener('click' , fecharModal)


function limpaModal() {
  document.getElementById("nome").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cmbTipoUsuario").selectedIndex = 0;
}


// CRUD Usuário
function validarDadosModalCadastroUsuario(nome, senha, email) {

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
    
      //Validar email

      // Expressão regular para validar e-mail
       var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Testa o formato do e-mail
      if (!regex.test(email)) {

        // E-mail inválido
        alert('Informe um E-mail válido!');

        var campoEmail = document.getElementById('email');
        campoEmail.focus();

      } else {
        return true;
      }
    }
  }
}

//O botão salvar da Modal chama esse função - Inserir
function inserirUsuario() {

  if(tipo === "Administrador") {

    let nome = $("#nome").val();
    let email = $("#email").val();
    let senha = $("#senha").val();
    let tipo = $("#cmbTipoUsuario").val();

    var dadosValidados = validarDadosModalCadastroUsuario(nome, senha, email);

    if(dadosValidados == true) {

      $.ajax({
    
        url:"http://localhost:" + porta + "/usuario/inserir",
        type:'POST',
        data: JSON.stringify({
            nome: nome,
            senha: senha,
            email: email,
            tipo: tipo
        }),
    
        contentType:"application/json;charset=UTF-8",
    
        success: function(msg){
    
          alert("Usuario cadastrado com Sucesso!")
    
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

  if(tipo === "Administrador") {

    //ir no banco de dados pesquisar com o id
    $.ajax({
                
      url:"http://localhost:" + porta + "/usuario/consultaPorId/" + id,
      type: 'get',
      data: {},
      
      success: function(msg) {

        //Preencher modal com os dados a serem editados
        if(Object.keys(msg).length === 0) {

          alert("Usuario não encontrado...")

        }else {

          $("#nome").val(msg.nome);
          $("#senha").val(msg.senha);
          $("#email").val(msg.email);

          if(msg.tipo === "Administrador"){
            document.getElementById("cmbTipoUsuario").selectedIndex = 0;
          }else{
            document.getElementById("cmbTipoUsuario").selectedIndex = 1;
          }
          

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



//Atualizar
function enviarDadosEditar(id) {

  let nome = $("#nome").val();
  let email = $("#email").val();
  let senha = $("#senha").val();
  let tipo = $("#cmbTipoUsuario").val();

  var dadosValidados = validarDadosModalCadastroUsuario(nome, senha, email);

  if(dadosValidados == true) {

    $.ajax({
  
      url:"http://localhost:" + porta + "/usuario/atualizar",
      type:'PUT',
      data: JSON.stringify({
          idUsuario:id,
          nome: nome,
          senha: senha,
          email: email,
          tipo: tipo
      }),
  
      contentType:"application/json;charset=UTF-8",
  
      success: function(msg){
  
        alert("Usuario alterado com sucesso!")
  
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

      url:"http://localhost:" + porta + "/usuario/excluir/" + id,
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



//Pesquisa Simples
function pesquisaSimples() {
  
  let txtPesquisa = $("#pesquisa").val();

  if(txtPesquisa.length == 0 || txtPesquisa == "") {
    alert("Informe um nome para pesquisa");

    var campoPesquisa = document.getElementById('pesquisa');
    campoPesquisa.focus();

  } else {

    $.ajax({
              
      url:"http://localhost:"+ porta +"/usuario/pesquisaSimples/" + txtPesquisa,
      type: 'get',
      data: {},

      success: function(msg) {

        if(Object.keys(msg).length === 0) {

          alert("Usuário não encontrado...");

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