const express = require('express');
const app = express();
const db = require('./config/db-connect')

app.use(express.json());

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => { 
    console.log('Conexão com o banco realizada com sucesso')
})



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Aplicação MongoDB para app-message'
    });
})

module.exports = app;