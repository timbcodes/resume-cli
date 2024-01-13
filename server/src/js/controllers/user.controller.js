const responseUtils = require("../utils/response.utils");
const $SQLUser = require("../database/user.database");

const userController = {
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
  async updateUserInfo (req, res) {
    try {
      const {id} = req.user;
      const data = req.body;
      const user = await $SQLUser.updateUserInfo(id, data);
      if (user) {
        responseUtils.sendResponse({res, responseBody: user});
      } else {
        responseUtils.sendNotFound({res, statusCode: 401, responseBody: {message: 'Unauthorized'}});
      }
    } catch (error) {
      console.log("updateUserInfo: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  },
};

module.exports = userController;