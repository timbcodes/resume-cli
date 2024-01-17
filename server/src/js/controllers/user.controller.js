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
};

module.exports = userController;