const clienteModel = require("../models/clienteModel");
const clienteView = require("../views/clienteView");

async function cadastrar(req, res) {
    try {
        const dadosCliente = req.body;
        const clienteCadastro = await clienteModel.cadastrar(dadosCliente);
        clienteView.sucesso(res, clienteCadastro, "Usuario cadastrado com sucesso", 201);
    } catch (erro) {
        clienteView.erroServidor(res, "Erro ao cadastrar usuario", 500, erro.message);
    }
}

async function atualizar(req, res) {
    try {
        const id = req.params.id;
        const dadosUsuario = req.body;
        const resultado = await usuarioModel.atualizar(id, dadosUsuario);

        if (resultado.affectedRows === 0) {
            usuarioView.erroUsuario(res, "Usuário não encontrado", 404);
            return;
        }

        const usuarioAtualizado = await usuarioModel.buscarPorId(id);
        usuarioView.sucesso(res, usuarioAtualizado, "Usuário atualizado com sucesso", 200);
    } catch (erro) {
        usuarioView.erroServidor(res, "Erro ao atualizar usuário", 500, erro.message);
    }
}

module.exports = {
    listar: listar,
    buscarPorId: buscarPorId,
    cadastrar: cadastrar,
    atualizar: atualizar,
    excluir: excluir
};
