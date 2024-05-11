const porta = 9595

var codigoRastreio;

$(document).ready(function() {

  codigoRastreio = obterParametroDaURL('codigo');


  

























  
});

function obterParametroDaURL(parametro) {
    var url = new URL(window.location.href);
    return url.searchParams.get(parametro);
  }


//ouve se haverá cliques no botão 
document.getElementById('btnFechar').addEventListener('click', function(){
    //manda essa mensagem para o home
    parent.postMessage('fecharIframe', "*");

});



