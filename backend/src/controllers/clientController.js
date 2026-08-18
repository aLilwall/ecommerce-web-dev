const clientModel = require("../models/clientModel");
const clientView = require("../views/clientView");

async function list(req, res) {
  try {
    const clients = await clientModel.list();
    userView.success(res, clients, "Client listed with success", 200);
  } catch (error) {
    userView.errorServer(res, "Something went wrong when listing clients", 500, error.message);
  }
}

async function searchPerId(req, res) {
  try {
    const id = req.params.id;
    const client = await clientModel.searchPerId(id);

    if (client === null) {
      clientView.errorClient(res, "Client not found", 404);
      return;
    }

    clientView.success(res, client, "Client found with success", 200);
  } catch (erro) {
    clientView.errorServer(res, "Something went wrong when searching for the client", 500, erro.message);
  }
}

async function register(req, res) {
    try {
        const dataClient = req.body;
        const clientRegistration = await clientModel.register(dataClient);
        clientView.success(res, clientRegistration, "Client registered with success", 201);
    } catch (error) {
        clientView.errorServer(res, "Something went wrong when registering client", 500, error.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const dataClient = req.body;
        const result = await clientModel.update(id, dataClient);

        if (result.affectedRows === 0) {
            clientView.errorClient(res, "User not found", 404);
            return;
        }

        const clientUpdate = await clientModel.searchPerId(id);
        clientView.success(res, clientUpdate, "Client updated with success", 200);
    } catch (error) {
        clientView.errorServer(res, "Something went wrong when updating client", 500, error.message);
    }
}

async function deleteClient(req, res) {
  try {
    const id = req.params.id;
    const result = await clientModel.deleteClient(id);

    if (result.affectedRows === 0) {
      clientView.errorClient(res, "Client not found", 404);
      return;
    }

    clientView.success(res, { id: id }, "Client deleted with success", 200);
  } catch (error) {
    clientView.errorServer(res, "Something went wrong when deleting client", 500, error.message);
  }
}

module.exports = {
    list: list,
    searchPerId: searchPerId,
    register: register,
    update: update,
    deleteClient: deleteClient
};
