const executeQuery = require('../services/database_query.service');

const $SQLTokenOperations = {
  async getRemainingTokens(userId) {
    const query = 'SELECT tokens FROM tokens WHERE user_id = ?';
    const results = await executeQuery(query, [userId]);
    return {
      remainingTokens: results[0].tokens,
    }
  }
};

module.exports = $SQLTokenOperations;