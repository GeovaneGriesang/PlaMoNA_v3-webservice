 const express = require('express');
 const app = express();
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
    mensagemRecebida = null;
    if(mensagemRecebida!=null){
      res.json({message : "Rolou"});

    }else{
      res.json({message: "Rolou mas não deu em nada"});
    }
 });

 app.get

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });