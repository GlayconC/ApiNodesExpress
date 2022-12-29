//const app = require('./config/express')();
//const express = require('express');
//const app = express();
const app = require('./api/app');
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA

app.listen(8080, ()=>{
  console.log("Servidor iniciado na porta 8080")
})

//app.use(express.json())

//app.get("/", (req, res) => {res.send("Início da API")})


