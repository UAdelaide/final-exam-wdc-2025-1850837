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
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database:', dbConfig.database);
    } catch (err) {
        console.error('Failed to connect:', err.message);
        process.exit(1);
    }
}

connectToDatabase();

// endpoints
app.get('/api/dogs', async(req, res) => {
    try {
        
    } catch (err) {
        console.error('Error getting dogs:', err.message);
        res.status(500).json({ error: 'Failed to retrieve dogs' });
    }
});