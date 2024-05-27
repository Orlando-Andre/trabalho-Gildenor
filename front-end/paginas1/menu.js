var id;
var nome;
var senha;
var tipo;

$(document).ready(function () {
  id = obterParametroDaURL("id");
  nome = obterParametroDaURL("nome");
  senha = obterParametroDaURL("senha");
  tipo = obterParametroDaURL("tipo");
});

function obterParametroDaURL(parametro) {
  var url = new URL(window.location.href);
  return url.searchParams.get(parametro);
}

var menuItem = document.querySelectorAll(".item-menu");

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectLink));

var btnExp = document.querySelector("#btn-exp");
var menuSide = document.querySelector(".menu-lateral");
var iframe = document.querySelector("#iframeContent");

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
  iframe.classList.toggle("retrair");
});

function abrirMenu() {
  var URL = "menu.html?id=" + id + "&nome=" + nome + "&senha=" + senha + "&tipo=" + tipo;
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = URL;
}

function abrirDashboard() {
    const url = "dashboard.html";
    const iframe = document.querySelector(".iframe-Content");
    iframe.classList.toggle("ativo");
    iframe.src = url;
  }

function abrirAtualizarRastreio() {
  const url = "atualizarRastreio.html?tipo=" + tipo;
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = url;
}

function abrirGerarEnvio() {
  const url = "createShipment.html";
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = url;
}

function abrirCadastroUsuario() {
  const url = "usuarios.html?tipo=" + tipo;
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = url;
}

function abrirCadastroLoja() {
  const url = "agencias.html";
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = url;
}

function abrirRelatorio() {
  const url = "relatorio.html";
  const iframe = document.querySelector(".iframe-Content");
  iframe.classList.toggle("ativo");
  iframe.src = url;
}

