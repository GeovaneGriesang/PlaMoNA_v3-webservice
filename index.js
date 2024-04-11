 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
   const mensagem = req.body;
   const mensagemRecebida = mensagem;
   
    if(mensagemRecebida == ""){
      res.json({message : req});

    }else{
      res.json({message: req});
    }
 });


 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });