const express = require('express');

const app = express();
const calculadoraRoutes = require("./routes/calculadora.routes");

app.use(express.json())

app.get("/", (req, res) => {res.send("Início da API")})

app.use('/calculadora', calculadoraRoutes);


module.exports = app;
