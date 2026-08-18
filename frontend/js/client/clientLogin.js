const formCadastrarUsuario = document.getElementById("formCadastrarUsuario");
const botaoListarUsuarios = document.getElementById("botaoListarUsuarios");
const botaoLimparUsuario = document.getElementById("botaoLimparUsuario"); 

formCadastrarUsuario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const id = document.getElementById("idCliente").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("senha").value;
    
    if(id !== "") {
        url = `/client/${id}`;
        method = "PUT";
    }

    try {
        const answer = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clientData)
        });

        const answerData = await answer.json();
        resultado.textContent = JSON.stringify(answerData, null, 2);
        limparFormularioUsuario();
        botaoListarUsuarios();
    } catch(error) {
        resultado.textContent = "Something went wrong ";
        console.log(error.message);
    }
})