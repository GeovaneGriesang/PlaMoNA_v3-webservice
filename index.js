 const express = require('express');
 const app = express();
 app.use(express.json());
 const port = 4444;
 const connection = require('./database');


 app.get('/', (req, res) => {
    return res.json({message: 'Servidor Online'});
 });


 app.get('/testeGetCriptografado:Mensagem', async (req, res) => {
    const mensagemRecebida = req.params;

    if(mensagemRecebida != null){
      const mensagem = mensagemRecebida['Mensagem'];
      let query = "INSERT INTO criptografada (mensagem) VALUES (?);";
      connection.query(query, mensagem, (err, result) =>{
        if(err){
         res.json({message: "Erro ao consultar ao banco"});

        }else{
          res.json({message: result});
        }

      });
    }

 });



 //url:ipv4:3333/testeGetString
 //para usar a chave podemos separar por &, exemplo de url:ipv4:3333/testeGetKeyDeSegurança&String
 //aí usamos um split("&") para separar a key da string e testamos se a key está certa
 app.get('/testeGet:Mensagem', async (req, res) => {
    const mensagemRecebida = req.params;
    console.log(mensagemRecebida);
    

    if(mensagemRecebida != null){
      //sequencia prevista: 
      //idEquipamento,ano,mes,dia,hora,minuto,segundo,intensidadeSinalGSM,tensaoBateria,tensaoModem
      //nivelAgua,chuvaAcumulada,umidade, correnteBateria, correnteInput, verificacaoIntegridade
      const mensagemSeparada = mensagemRecebida.Mensagem.split(";");
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
      const temperaturaAmbiente = mensagemSeparada[11];
      const chuvaAcumulada = mensagemSeparada[12];
      const umidade = mensagemSeparada[13];
      const correnteBateria = mensagemSeparada[14];
      const correnteInput = mensagemSeparada[15];
      const verificacaoIntegridade = mensagemSeparada[16];
      
      
      const testeMensagem = "testeGet"+idEquipamento+";"+ano+";"+mes+";"+dia +";"+hora+";"+minuto+";"+segundo+";"+intensidadeSinalGSM+";"
      +tensaoBateria+";"+tensaoModem+";"+nivelAgua+";"+temperaturaAmbiente+";"
      +chuvaAcumulada+";"+umidade+";"+correnteBateria+";"+correnteInput+";";

      crc16 = calcCrc16(testeMensagem);

      if(crc16==verificacaoIntegridade){
        let query = "INSERT INTO medicoes (idEquipamento, ano, mes, dia, hora, minuto, segundo, intensidadeSinalGSM, tensaoBateria, "+
        "tensaoModem, nivelAgua, temperaturaAmbiente, chuvaAcumulada,umidade, correnteBateria, correnteInput, verificacaoIntegridade)"+
        " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
        values = [idEquipamento, ano, mes, dia, hora, minuto, segundo, intensidadeSinalGSM, tensaoBateria, tensaoModem, 
          nivelAgua, temperaturaAmbiente, chuvaAcumulada, 
          umidade, correnteBateria, correnteInput, verificacaoIntegridade];
        connection.query(query, values, (err, result) =>{
          if(err){
            res.json({message: "Erro ao consultar ao banco"});

          }else{
            res.json({Integridade: "Assegurada", message: result});
            
          }
        });
      }else{
        res.json("Mensagem inválida");
      }
    }else{
      res.json("Conexão:Feita\nMensagem:"+mensagemRecebida);
    }

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
      const temperaturaAmbiente = mensagemSeparada[11];
      const chuvaAcumulada = mensagemSeparada[12];
      const umidade = mensagemSeparada[13];
      const correnteBateria = mensagemSeparada[14];
      const correnteInput = mensagemSeparada[15];
      const verificacaoIntegridade = mensagemSeparada[16];

      let query = "INSERT INTO medicoes (idEquipamento, ano, mes, dia, hora, minuto, segundo, intensidadeSinalGSM, tensaoBateria, tensaoModem, nivelAgua, temperaturaAmbiente, chuvaAcumulada,umidade, correnteBateria, correnteInput, verificacaoIntegridade) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
      values = [idEquipamento, ano, mes, dia, hora, minuto, segundo, intensidadeSinalGSM, tensaoBateria, tensaoModem, 
        nivelAgua, temperaturaAmbiente, chuvaAcumulada, 
        umidade, correnteBateria, correnteInput, verificacaoIntegridade];
      connection.query(query, values, (err, result) =>{
        if(err){
          res.json({message: "Erro ao consultar ao banco"});

        }else{
          res.json({message: result});
        }
      });
    }else{
      res.json("Conexão:Feita\nMensagem:"+mensagemRecebida);
    }
 });


 app.get('/consulta', async (req, res) => {
  let query = "SELECT * FROM medicoes ORDER BY idMedicoes DESC LIMIT 10;"
  connection.query(query, (err, result) =>{
    if(err){
      res.json({message: "Erro ao consultar ao banco"});
    }else{
      
      res.json(result);
    }
  });
 });

 app.get('/consultaCriptografado', async (req, res) => {
  let query = "SELECT * FROM criptografada ORDER BY idCriptografada DESC LIMIT 10;"
  connection.query(query, (err, result) =>{
    if(err){
      res.json({message: "Erro ao consultar ao banco"});
    }else{
      
      res.json(result);
    }
  });
 });

 app.listen(port, ()=>{
    console.log('Servidor iniciado com Sucesso');
 });

 function calcCrc16(str, crc = 0, xorout = 0) {
  for(let i = 0, t; i < str.length; i++, crc &= 0xFFFF) {
      t = (crc >> 8) ^ str.charCodeAt(i);
      t ^= t >> 4;
      crc = (crc << 8) ^ (t << 12) ^ (t << 5) ^ t;
  }
  return crc ^ xorout;
}