const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
router
    .post('/users', UserController.add)
    .get('/users', UserController.list)

    //.get('/users/:id', UserController.getUser)
    // .put('/users/:id', UserController.updateUser)
    // .post('/users', UserController.createUser)
    // .delete('/users/:id', UserController.deleteUser)

module.exports = router;

