const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
router
    .post('/users', UserController.add)
    .get('/users', UserController.list)
<<<<<<< HEAD
    // .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete);
=======
    .get('/users/:id', UserController.findByID)

>>>>>>> 5fd96a74e19469786ae493400b3cac75e2e4d88f

    //.get('/users/:id', UserController.getUser)
    // .put('/users/:id', UserController.updateUser)
    // .post('/users', UserController.createUser)

module.exports = router;

