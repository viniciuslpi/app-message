const express = require('express');
const app = express();
const db = require('./config/db-connect');
const routes = require('./routes/index');

app.use(express.json());

db.on('error', console.log.bind(console, 'Connection: ERROR'));
db.once('open', () => { 
    console.log('Connection: OK')
})

routes(app);

module.exports = app;