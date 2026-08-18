const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.get("/", clientController.listar);
router.get("/:id", clientController.buscarPorId);
router.post("/", clientController.cadastrar);
router.put("/:id", clientController.atualizar);
router.delete("/:id", clientController.excluir);

module.exports = router;