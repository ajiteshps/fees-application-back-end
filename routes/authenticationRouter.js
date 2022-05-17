const express = require('express');
const router = express.Router();

//middleware
const dbConnection = require('../middleware/dbConnection');

// controller
const authenticationController = require('../controller/authenticationController');

router.post('/credCheck',dbConnection.connectToPostgressDatabase,authenticationController.loginRequest);

module.exports = router;
