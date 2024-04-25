const { response } = require('express');
const mysql = require('mysql2');

export const pool = async () => {
    return mysql.createPool ({
    host: 'databaseteste.c9yaqus04iqo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'pla123mo123na123',
    database: 'geovaneg_plamona'
    }).promise();
}



