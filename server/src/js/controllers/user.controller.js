const responseUtils = require("../utils/response.utils");
const $SQLUser = require("../database/user.database");

const userController = {
  async setUserInfo (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.setUserInfo(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setUserInfo: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async setAdditionalInfo (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.setAdditionalInfo(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setAdditionalInfo: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async setJobHistory (req, res) {
    try {
      const {id} = req.user;
      const data = req.body
      console.log("setJobHistory: data = ", data);
      const user = await $SQLUser.setJobHistory(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setJobHistory: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async setLinks (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.setLinks(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setLinks: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async setSkills (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.setSkills(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setSkills: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async setEducation (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.setEducation(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("setEducation: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async resumeExists (req, res) {
    try {
      const {id} = req.user;
      const user = await $SQLUser.resumeExists(id);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("resumeExists: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async getUserInfo (req, res) {
    try {
      const {id} = req.user;
      const user = await $SQLUser.getUserInfo(id);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("getUserInfo: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
  async getUserResume (req, res) {
    try {
      const {id} = req.user;
      const user = await $SQLUser.getUserResume(id);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("getUserResume: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  }
};

module.exports = userController;