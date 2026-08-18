const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const clientRoutes = require("./routes/clientRoutes");
const conexaoMysql = require("./configs/mysql");

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("/", function (req, res) {
    res.send("API funcionando")
});

app.use("/clientes", clientRoutes);

app.get("/teste-mysql", async function (req, res) {
    try {
        const [resultado] = await conexaoMysql.query("SELECT 1 AS teste");

        res.json({
            mensagem: "Conexão com MySQL bem sucedida",
            dados: resultado
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: "Conexão inviável",
            erro: erro.message
        });
    }
});

app.listen(PORTA, function () {
    console.log(`Servidor rodando na porta ${PORTA}`)
});