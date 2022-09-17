const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
router
    .post('/users', UserController.add)
    .get('/users', UserController.list)
    .get('/users/:id', UserController.findByID)
    .get('/users/email/:email', UserController.findByEmail)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)

module.exports = router;

