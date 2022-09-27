const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
router
    .post('/users', UserController.add)
    .get('/users', UserController.list)
    .get('/users/:id', UserController.findByID)
    .get('/users/email/:email', UserController.findByEmail)
    .put('/users/:id', UserController.update)
    
    .put('/users/:id/posts', UserController.addPost)
    .get('/users/:id/posts', UserController.findByIDAndListPosts)
    // delete user post
    // update user post

    .delete('/users/:id', UserController.delete)

module.exports = router;
