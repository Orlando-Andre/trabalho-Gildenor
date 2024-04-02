
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


function escondeDados() {

    // Obtendo a referência dos dados que estão na tela e escondendo
    const box = document.querySelector('.main');
    box.classList.toggle('esconder')

}

