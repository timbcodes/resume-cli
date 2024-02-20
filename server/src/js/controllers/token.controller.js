const responseUtils = require("../utils/response.utils");
const $SQLTokenOperations = require("../database/token.database");
const tokenController = {
  async getRemainingTokens (req, res) {
    try {
      const {id} = req.user;
      console.log(id);
      const remainingTokens = await $SQLTokenOperations.getRemainingTokens(id);
      if (remainingTokens) {
        responseUtils.sendResponse({res, responseBody: remainingTokens});
      } else {
        responseUtils.sendNotFound({res});
      }
    } catch (error) {
      console.log("getRemainingTokens: error = ", error);
      responseUtils.sendErrorResponse({res, responseBody: error});
    }
  }
};

module.exports = tokenController;
