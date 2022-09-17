const express = require('express');
const app = express();
const db = require('./config/db-connect');
const routes = require('./routes/index');

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

db.on('error', console.log.bind(console, 'MongoDB Connection: ERROR'));
db.once('open', () => { 
    console.log('MongoDB Connection: OK')
})

routes(app);

module.exports = app;