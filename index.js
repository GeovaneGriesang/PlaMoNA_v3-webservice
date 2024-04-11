 const express = require('express');
 const app = express();
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
    const {mensagem} = req.body;
    const mensagemRecebida = mensagem;
    res.json({message : "Rolou"});
 });

 app.get

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });