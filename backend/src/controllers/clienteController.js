const clienteModel = require("../models/clienteModel");
const clienteView = require("../models/clienteView");

async function cadastrar(req, res) {
    try {
        const dadosCliente = req.body;
        const clienteCadastro = await clienteModel.cadastrar(dadosCliente);
        clienteView.sucesso(res, clienteCadastro, "Usuario cadastrado com sucesso", 201);
    } catch (erro) {
        clienteView.erroServidor(res, "Erro ao cadastrar usuario", 500, erro.message);
    }
}

async function atualizar(params) {
    
}