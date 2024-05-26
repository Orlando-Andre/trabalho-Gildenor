var altura, largura, comprimento, peso

var cepRemetente, cidadeRemetente, numeroRemetente, loteRemetente, ufRemetente , ruaRemetente, quadraRemetente, bairroRemetente

var cepDestinatario, cidadeDestinatario, numeroDestinatario, loteDestinatario, ufDestinatario, ruaDestinatario, quadraDestinatario, bairroDestinatario

window.addEventListener('message', function(event) {

    const dados = event.data;

    if (dados) {

        document.getElementById('cepRemetente').value = dados.origem || '';
        document.getElementById('cepDestinatario').value = dados.destino || '';

        cepRemetente = dados.origem;
        cepDestinatario = dados.destino;
        altura = dados.alt;
        comprimento = dados.compr;
        largura = dados.larg;
        peso = dados.p;

    }
});


function validaDadosRemetenteEdestinatario() {

    const campos = [

        'cepRemetente', 'ufRemetente', 'cidadeRemetente', 'ruaRemetente', 'numeroRemetente', 'quadraRemetente', 'loteRemetente', 'bairroRemetente',
        'cepDestinatario', 'ufDestinatario', 'cidadeDestinatario', 'ruaDestinatario', 'numeroDestinatario', 'quadraDestinatario', 'loteDestinatario', 'bairroDestinatario'

    ];

    for (const campo of campos) {

        const elemento = document.getElementById(campo);

        if (elemento.value === '') {

            elemento.focus();
            alert(`Verifique o campo ${campo}`);
            return false;

        }
    }

    // Ocultar os campos de entrada
    document.getElementById('camposRemetente').classList.add('hidden');
    // Ocultar os campos de entrada
    document.getElementById('camposDestinatario').classList.add('hidden');


    // Mostrar a área de cálculo do frete
    document.getElementById('calculoFretePac').classList.remove('hidden');
    // Mostrar a área de cálculo do frete
    document.getElementById('calculoFreteSedex').classList.remove('hidden');
    
    //chamar ultima tela e fazer o calculo
    calcularFrete()
    
}



function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function calcularFrete() {

    var pacValue = parseFloat(getRandomValue(29.99, 119.99));
    var sedexValue = (pacValue * 1.15).toFixed(2);

    document.getElementById("valorFretePac").innerText = pacValue + " R$";
    document.getElementById("valorFreteSedex").innerText = sedexValue + " R$";
    
  }