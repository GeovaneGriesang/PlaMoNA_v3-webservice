import mysql from "mysql2";

const pool = mysql.createPool({
    host: 'databaseteste.c9yaqus04iqo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'pla123mo123na123',
    database: 'geovaneg_plamona'
}).promise();



//module.exports = pool;
