const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.get("/", clientController.list);
router.get("/:id", clientController.searchPerId);
router.post("/", clientController.register);
router.put("/:id", clientController.update);
router.delete("/:id", clientController.deleteClient);

module.exports = router;