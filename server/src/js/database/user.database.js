const executeQuery = require('../services/database_query.service');

const $SQLUser = {
  async updateUserInfo (id, data) {
    try {
      const query = 'UPDATE user_info SET first_name = ?, last_name = ?, address = ?, city = ?, state = ?, zip = ?, phone_number = ?, email = ?, user_id = ?';
      const result = await executeQuery(query, [data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode, data.phoneNumber, data.email, id]);
      return result;
    } catch (error) {
      console.log("updateUserInfo: error = ", error);
      throw error;
    }
  },
};

module.exports = $SQLUser;