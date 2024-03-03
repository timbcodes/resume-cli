const express = require('express');
const router = express.Router();
const apiKeyCheck = require('../js/utils/api_check.utils');
const corsPolicy = require('../middleware/CORS/cors');
const authenticate = require('../js/handlers/auth.handler');
const userController = require('../js/controllers/user.controller');

router.use(corsPolicy.corsMiddleware());
router.use(apiKeyCheck.authenticateKey);

router.post('/set_user_info', authenticate, userController.setUserInfo);
router.post('/edit_user_info', authenticate, userController.editUserInfo);
router.post('/set_additional_info', authenticate, userController.setAdditionalInfo);
router.post('/set_summary_info', authenticate, userController.setSummaryInfo);
router.post('/set_education_info', authenticate, userController.setEducationInfo);
router.post('/set_job_history', authenticate, userController.setJobHistory);
router.post('/set_links', authenticate, userController.setLinks);
router.post('/set_skills', authenticate, userController.setSkills);

router.get('/resume_exists', authenticate, userController.resumeExists);
router.get('/get_login_data', authenticate, userController.getLoginData);
router.get('/get_user_info', authenticate, userController.getUserInfo);
router.get('/get_user_resume', authenticate, userController.getUserResume);
router.get('/set_personal', authenticate, userController.setPersonal);
router.get('/set_additional', authenticate, userController.setAdditional);
router.get('/set_summary', authenticate, userController.setSummary);
router.get('/set_education', authenticate, userController.setEducation);

module.exports = router;