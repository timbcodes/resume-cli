const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const authenticate = require('../js/handlers/auth.handler');
const userController = require('../js/controllers/user.controller');

router.use(apiKeyCheck.authenticateKey);

router.get('/get_user_info', authenticate, userController.getUserInfo);
router.post('/update_user_info', authenticate, userController.updateUserInfo);

module.exports = router;