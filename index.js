 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 3333;

 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.get('/teste', (req, res) => {
   const mensagem = req.body;
   let mensagemRecebida = mensagem;
   
    if(mensagem != null){
      res.json({message : mensagem});

    }else{
      res.json({message: "mensagem não recebida"});
    }
 });


 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });