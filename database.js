const mysql = require('mysql');

const connection = mysql.createConnection({
    // "process.env.VARIÁVEL" busca do arquivo .env as variáveis secretas, as quais não estão no repositório 
    host: "databaseteste.c9yaqus04iqo.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "pla123mo123na123",
    database: "geovaneg_plamona",
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } else {
      console.log('Conexão bem-sucedida com o banco de dados.');
    }
  });

  module.exports = connection;