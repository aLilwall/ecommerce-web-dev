const conexaoMysql = require("../configs/mysql");

async function cadastrarCliente(dadosCliente) {
    const nome = dadosCliente.nome;
    const cnpj = dadosCliente.cnpj;
    const endereco = dadosCliente.endereco;

    const sql = `
        INSERT INTO usuario (nome, cnpj, endereco) VALUES (?, ?, ?)
    `;

    const valores = [nome, cnpj, endereco];
    const resultado = await conexaoMysql.query(sql, valores);

    return {
        id: resultado[0].insertId,
        nome: nome,
        cnpj: cnpj,
        endereco: endereco
    };
}

async function excluirCliente(id) {
    const sql = `
        DELETE FROM cliente
        WHERE id = ?
    `;

    const valores = [id];
    const resultado = await conexaoMysql.query(sql, valores);
    return resultado[0];
}

module.exports = {
    listar: listar,
    buscarPorId: buscarPorId,
    cadastrar: cadastrar,
    atualizar: atualizar,
    excluir: excluir
};