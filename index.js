 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
   mensagemRecebida = "";
   const {mensagem} = req.body;
   let mensagemRecebida = mensagem;
   
    if(mensagemRecebida != null){
      res.json({message : mensagemRecebida});

    }else{
      res.json({message: mensagemRecebida});
    }
 });

 app.get

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });