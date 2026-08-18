const conexaoMysql = require("../configs/mysql");

async function list() {
  const sql = `
    SELECT [need to add]
    FROM client
    ORDER BY id ASC
  `;

  const result = await conexaoMysql.query(sql);
  return result[0];
}

async function searchPerId(id) {
  const sql = `
    SELECT id, nome, email, contato, cargo
    FROM usuario
    WHERE id = ?
  `;

  const values = [id];
  const result = await conexaoMysql.query(sql, values);
  const clients = result[0];

  if (clients.length === 0) {
    return null;
  }

  return clients[0];
}

async function register(clientData) {
    const nome = clientData.nome;
    const cnpj = clientData.cnpj;
    const endereco = clientData.endereco;

    const sql = `
        INSERT INTO client (nome, cnpj, endereco) VALUES (?, ?, ?)
    `;

    const values = [nome, cnpj, endereco];
    const result = await conexaoMysql.query(sql, values);

    return {
        id: result[0].insertId,
        nome: nome,
        cnpj: cnpj,
        endereco: endereco
    };
}

async function update(id, clientData) {
  const nome = clientData.nome;
  const email = clientData.email;
  const contato = clientData.contato;
  const cargo = clientData.cargo;

  const sql = `
    UPDATE client
    SET nome = ?, email = ?, contato = ?, cargo = ?
    WHERE id = ?
  `;

  const values = [nome, email, contato, cargo, id];
  const result = await conexaoMysql.query(sql, values);
  return result[0];
}

async function deleteClient(id) {
    const sql = `
        DELETE FROM client
        WHERE id = ?
    `;

    const values = [id];
    const result = await conexaoMysql.query(sql, values);
    return result[0];
}

module.exports = {
    list: list,
    searchPerId: searchPerId,
    register: register,
    update: update,
    deleteClient: deleteClient
};