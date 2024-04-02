function fechar() {

    /*Endereço da tela que será referenciada*/
    const url = 'home.html';

    escondeDados();

    // Obtendo a referência ao elemento iframe
    const iframe = document.querySelector('.iframe-Content');
    iframe.classList.toggle('ativo')

    //Defina a URL do iframe para carregar o conteúdo do arquivo HTML
    iframe.src = url;


    
}