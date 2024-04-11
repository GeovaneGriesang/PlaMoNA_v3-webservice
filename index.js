 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
   
   const {mensagem} = req.body;
   const mensagemRecebida = mensagem;
   
    if(mensagemRecebida != null){
      res.json({message : mensagemRecebida});

    }else{
      res.json({message: "Rolou mas não deu em nada: "});
    }
 });

 app.get

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });