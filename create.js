const express = require('express');
const router = express.Router();

const createController = require('../controller/create_controller');

//for create-todo/ functionality navigate to controller->create_controller
router.post('/', createController.create);

module.exports = router;