const express = require('express');
const posts = require('../routes/post-routes');
const users = require('../routes/user-routes');

const routes = app => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send({ message: 'Database: app-message' });
        })

    app.use(
        express.json(),
        users,
        posts
    );

}

module.exports = routes;
