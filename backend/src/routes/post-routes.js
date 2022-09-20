const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post-controller-dao');
router
    .get('/posts', PostController.list)
    .post('/posts', PostController.create)
    
module.exports = router;

