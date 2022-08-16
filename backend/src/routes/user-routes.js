const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

router
    .get('/users', UserController.getUsers)
    .get('/users/:id', UserController.getUser)
    .put('/users/:id', UserController.updateUser)
    .post('/users', UserController.createUser)


module.exports = router;

