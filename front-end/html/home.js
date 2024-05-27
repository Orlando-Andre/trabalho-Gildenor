var codigoRastreio

var cepOrigem, cepDestino, altura, largura, comprimento, peso

//Abrir a tela de login
function login() {

    var URL = 'Login.html';

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

function validaDadosSimulacao() {

    cepOrigem = document.getElementById('origem')
    altura = document.getElementById("altura")
    comprimento = document.getElementById('comprimento')
    cepDestino = document.getElementById('destino')
    largura = document.getElementById('largura')
    peso = document.getElementById('peso')

    if(cepOrigem.value === '' ) {
        
        cepOrigem.focus()
        alert("Verifique o CEP de origem")

    } else {
        if(altura.value === '') {
            
            altura.focus()
            alert("Verifique a altura")

        } else {
            if(comprimento.value === '') {

                comprimento.focus()
                alert("Verifique o comprimento")

            }else{
                if(cepDestino.value === ''){

                cepDestino.focus()
                alert("Verifique o CEP de destino")

                }else{
                    if(largura.value === '') {

                        largura.focus()
                        alert("Verifique a largura")

                    }else{
                        if(peso.value === '') {
                            peso.focus()
                            alert("Verifique o peso")
                        } else {

                            popUpSimular()
                        }
                    }
                }
            }
        }
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

    iframe.onload = function() {
    
        const origem = cepOrigem.value
        const destino = cepDestino.value
        const alt = altura.value
        const compr = comprimento.value
        const larg = largura.value
        const p = peso.value

        const dados = { origem, destino, alt, compr, larg, p };

        iframe.contentWindow.postMessage(dados, '*');

    };

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
    
        const cod = codigoRastreio.value


        const dados = {cod};


        iframe.contentWindow.postMessage(dados, '*');

    };

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
