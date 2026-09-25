const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.post("/usuarios", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const empresa = req.body.empresa;
    const telefone = req.body.telefone;
    const telefone2 = req.body.telefone2;
    const mensagem = req.body.mensagem;

    console.log("Dados do cliente:", nome);

    res.json({
        msg: "Usuário recebido!",
        nome: nome,
        email: email,
    empresa: empresa,
    telefone: telefone,
    telefone2: telefone2,
    mensagem: mensagem
    });
});

app.listen(3000, () => {
    console.log("Servidor http://localhost:3000");
});

const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    empresa: String,
    telefone: String,
    telefone2: String,
    mensagem: String
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
   console.log("Conexão estabelecida")

})
.catch((erro) => {
   console.error("Erro", erro)

})