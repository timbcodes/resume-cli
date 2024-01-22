const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const corsPolicy = require('../middleware/CORS/cors');
const authenticate = require('../js/handlers/auth.handler');
const userController = require('../js/controllers/user.controller');

router.use(corsPolicy.corsMiddleware());
router.use(apiKeyCheck.authenticateKey);

router.post('/set_user_info', authenticate, userController.setUserInfo);
router.post('/set_additional_info', authenticate, userController.setAdditionalInfo);
router.post('/set_job_history', authenticate, userController.setJobHistory);

module.exports = router;