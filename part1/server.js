const express = require('express');
const mysql = require('mysql12/promise');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const SQL_SCHEMA_FILE = 'dogwalks.sql';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DogWalkService'
};

let connection;

app.use(express.json());

const sqlSchemaPath = path.join(__dirname, SQL_SCHEMA_FILE);

async function connectToDatabase(){
    try(
        connection = await mysql.createConnection(dbConfig);
    )
}