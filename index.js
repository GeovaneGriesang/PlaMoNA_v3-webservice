 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 3333;
 const connection = require('./database');


 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });

 app.post('/teste', async (req, res) => {
  
   const {mensagem} = req.body;
   const mensagemRecebida = mensagem;
   
    if(mensagemRecebida != null){
      //sequencia prevista: 
      //idEquipamento,ano,mes,dia,hora,minuto,segundo,intensidadeSinalGSM,tensaoBateria,tensaoModem
      //nivelAgua,chuvaAcumulada,verificacaoIntegridade
      const mensagemSeparada = mensagemRecebida.split(";");
      const idEquipamento = mensagemSeparada[0];
      const ano = mensagemSeparada[1];
      const mes = mensagemSeparada[2];
      const dia = mensagemSeparada[3];
      const hora = mensagemSeparada[4];
      const minuto = mensagemSeparada[5];
      const segundo = mensagemSeparada[6];
      const intensidadeSinalGSM = mensagemSeparada[7];
      const tensaoBateria = mensagemSeparada[8];
      const tensaoModem = mensagemSeparada[9];
      const nivelAgua = mensagemSeparada[10];
      const chuvaAcumulada = mensagemSeparada[11];
      const verificacaoIntegridade = mensagemSeparada[12];


      let query = "INSERT INTO medicoes (idEquipamento, ano, mes, dia, hora, minuto, segundo, tensaoBateria, tensaoModem, nivelAgua, temperaturaAmbiente, chuvaAcumulada, verificacaoIntegridade) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
      values = [idEquipamento, ano, mes, dia, hora, minuto, segundo, intensidadeSinalGSM, tensaoBateria, tensaoModem, nivelAgua, chuvaAcumulada, verificacaoIntegridade];
      connection.query(query, values, (err, result) =>{
        if(err){
          res.json({message: "Erro ao consultar ao banco"});

        }else{
          res.json({message: result});
        }
      });
      return res.json(result);
    }else{
      res.json("Conexão:Feita\nMensagem:"+mensagemRecebida);
    }
 });


 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });

 