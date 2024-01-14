const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const securityController = require('../js/controllers/login.controller');

router.use(apiKeyCheck.authenticateKey);

router.post('/', securityController.login);

module.exports = router;