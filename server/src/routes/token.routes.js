const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const corsPolicy = require('../middleware/CORS/cors');
const authenticate = require('../js/handlers/auth.handler');
const tokenController = require('../js/controllers/token.controller');

router.use(corsPolicy.corsMiddleware());
router.use(apiKeyCheck.authenticateKey);

router.get('/get_remaining_tokens', authenticate, tokenController.getRemainingTokens);

module.exports = router;