const conexaoMysql = require("../configs/mysql");

async function cadastrarCliente(dadosCliente) {
    const nome = dadosCliente.nome;
    const nome = dadosCliente.cnpj;
    const nome = dadosCliente.endereco;

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

async function excluirCliente() {
    
}