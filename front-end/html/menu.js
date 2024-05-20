// Informações do usuário
var id;
var nome;
var senha;
var tipo;

$(document).ready(function() {

    id = obterParametroDaURL('id');
    nome = obterParametroDaURL('nome');
    senha = obterParametroDaURL('senha');
    tipo = obterParametroDaURL('tipo');

});

function obterParametroDaURL(parametro) {
    var url = new URL(window.location.href);
    return url.searchParams.get(parametro);
}



var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir o menu
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var iframe = document.querySelector("#iframeContent")

btnExp.addEventListener('click' , function(){

    menuSide.classList.toggle('expandir')
    iframe.classList.toggle('retrair')

})

//Abrir tela de relatórios

//Abrir tela menu
function abrirMenu() {

var URL = 'menu.html?id=' + id + '&nome=' + nome + '&senha=' + senha + '&tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = URL;

}

//Abrir tela de cadastro dos Usuários
function abrirRelatorio() {

const url = 'relatorios.html?tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = url;

}


//Abrir tela de cadastro dos Usuários
function abrirCadastroUsuario() {

const url = 'cadastrarUsuario.html?tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = url;

}


//Abrir tela de cadastro de Loja
function abrirCadastroLoja() {

const url = 'cadastrarLoja.html?tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = url;
}

//Abrir tela de cadastro de sala
function abrirCadastroSala() {

const url = 'cadastrarSala.html?tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = url;
}

//Abrir tela de conta
function abrirConta() {

//Url com os as informações do usuário
var URL = 'conta.html?id=' + id + '&nome=' + nome + '&senha=' + senha + '&tipo=' + tipo;

// Obtenha a referência ao elemento iframe
const iframe = document.querySelector('.iframe-Content');
iframe.classList.toggle('ativo')

//Defina a URL do iframe para carregar o conteúdo do arquivo HTML
iframe.src = URL;
}