 const express = require('express');
 const app = express();
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
    return res.json({message: 'Num é que da certo?'});
 });

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });