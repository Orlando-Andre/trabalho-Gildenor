const porta = 1010

function validarDadosLogin() {

    let nome = $("#usuario").val();
    let senha = $("#senha").val();

    if(nome.length == 0 || nome == "") {
        alert("Informe um usuário");
    }else{
        if(senha.length == 0 || senha == ""){
            alert("Informe uma senha");
        } else {
            enviaDadosLogin(nome,senha);
        }
    }
}
 
function enviaDadosLogin(nome,senha) {

    $.ajax({
        url:"http://localhost:" + porta + "/usuario/",
        type:'POST',
        data: JSON.stringify({
            nome: nome,
            senha: senha
        }),

        contentType:"application/json;charset=UTF-8",

        success: function(msg){

            if(Object.keys(msg).length === 0) {

                alert("Usuario não encontrado")

            } else {

                usuario = msg[0];

                let id = usuario.idUsuario;
                let nome = usuario.nome;
                let senha = usuario.senha;
                let tipo = usuario.tipo;

                var URL = 'menu.html?id=' + id + '&nome=' + nome + '&senha=' + senha + '&tipo=' + tipo;


                //Chamar tela do menu
                // Altere a propriedade 'href' do objeto location para a URL da outra tela passando as informações do user
                window.location.href = URL;
            }
           
        },
        error: function(msg){
            alert("Erro de busca...")
        }
    });
}