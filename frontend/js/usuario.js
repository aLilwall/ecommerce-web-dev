const formCadastrarUsuario = document.getElementById("formCadastrarUsuario");
const botaoListarUsuarios = document.getElementById("botaoListarUsuarios");
const botaoLimparUsuario = document.getElementById("botaoLimparUsuario"); 

formCadastrarUsuario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const id = document.getElementById("idCliente").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    
    if(id !== "") {
        url = `/usuario/${id}`;
        metodo = "PUT";
    }

    try {
        const resposta = await fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosUsuario)
        });

        const dadosResposta = await resposta.json();
        resultado.textContent = JSON.stringify(dadosResposta, null, 2);
        limparFormularioUsuario();
        botaoListarUsuarios();
    } catch(erro) {
        resultado.textContent = "Erro ao salvar cliente";
        console.log(erro.message);
    }
})