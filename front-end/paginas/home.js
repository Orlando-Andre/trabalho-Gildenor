function validaDadosRastreamento() {

    const codigoRastreio = document.getElementById('codigoRastreio')

    if(codigoRastreio.value === '' ) {

        codigoRastreio.focus()
        alert("Verifique o codigo de rastreio")

    } else {

        popUpRastrear()

    }

}

//Abrir o popUp de rastrear produtos
function popUpRastrear() {

    /*Endereço da tela que será referenciada*/
    const url = 'popUpRastrear.html?codigo=' + codigoRastreio;

    escondeDados();

    // Obtendo a referência ao elemento iframe
    const iframe = document.querySelector('.iframe-Content');
    iframe.classList.toggle('ativo')

    //Defina a URL do iframe para carregar o conteúdo do arquivo HTML
    iframe.src = url;
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


//Abrir a tela de login
function login() {

    var URL = 'menu.html';

    //Chamar tela de login
    // Altere a propriedade 'href' do objeto location para a URL da outra tela.
    window.location.href = URL;

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

    // Obtendo a referência dos dados que estão na tela e escondendo
    document.getElementById('main').classList.add('esconder');

}

function restaurarDados() {

    document.getElementById('main').classList.remove('esconder');

}