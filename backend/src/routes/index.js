const express = require('express');
const users = require('../routes/user-routes');

const routes = app => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send({ message: 'Database: app-message' });
        })

    app.use(
        express.json(),
        users
    );

}

module.exports = routes;
