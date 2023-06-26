const express = require('express');

const usersController = require('../controller/users');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.postUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;