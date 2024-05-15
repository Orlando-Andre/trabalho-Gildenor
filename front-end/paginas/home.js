var codigoRastreio

//Abrir a tela de login
function login() {

    var URL = 'menu.html';

    //Chamar tela de login
    // Altere a propriedade 'href' do objeto location para a URL da outra tela.
    window.location.href = URL;

}

function validaDadosRastreamento() {

    codigoRastreio = document.getElementById('codigoRastreio')

    if(codigoRastreio.value === '' ) {

        codigoRastreio.focus()
        alert("Verifique o codigo de rastreio")

    } else {

        popUpRastrear()

    }

}

//Abrir o popUp de simular cálculo dos fretes
function popUpSimular() {

    /*Endereço da tela que será referenciada*/
    const url = 'popUpSimularFrete.html';

    escondeDados();

    // Obtendo a referência ao elemento iframe
    const iframe = document.querySelector('.iframe-Content');
    iframe.classList.toggle('ativo')

    //Defina a URL do iframe para carregar o conteúdo do arquivo HTML
    iframe.src = url;
}


//Abrir o popUp de rastrear produtos
function popUpRastrear() {

    /*Endereço da tela que será referenciada*/
    const url = 'popUpRastrear.html';

    escondeDados();

    // Obtendo a referência ao elemento iframe
    const iframe = document.querySelector('.iframe-Content');
    iframe.classList.toggle('ativo')


    iframe.onload = function() {
        // Acesse o conteúdo do iframe
        var iframeConteudo = iframe.contentWindow;
    
        // Agora você pode passar o valor para o iframe
        var meuValor = codigoRastreio.value;
    
        // Pass ao valor para uma função ou variável dentro do iframe
        iframeConteudo.funcaoReceptora(meuValor);

    }

    //Defina a URL do iframe para carregar o conteúdo do arquivo HTML
    iframe.src = url;
}



// Adiciona um ouvinte para mensagens postadas de dentro do iframe
window.addEventListener('message', function(event) {

    // Verifica se a mensagem recebida indica para fechar o iframe
    if (event.data === 'fecharIframe') {

        // Oculta ou remove o iframe
        document.getElementById('iframeContent').style.display = 'none';

        restaurarDados();

    }
});


function escondeDados() {
    document.getElementById('main').classList.add('esconder');
}

function restaurarDados() {
    document.getElementById('main').classList.remove('esconder');
}
