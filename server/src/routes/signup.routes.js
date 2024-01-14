const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const userSignupController = require('../js/controllers/signup.controller');

router.use(apiKeyCheck.authenticateKey);

router.post('/create_user', userSignupController.createUser);

module.exports = router;