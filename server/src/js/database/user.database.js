const executeQuery = require('../services/database_query.service');

const $SQLUser = {
  async setUserInfo (id, data) {
    try {
      console.log("data = ", data);
      const query = 'REPLACE INTO user_details (first_name, last_name, address, city, state, zip, phone_number, email, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const result = await executeQuery(query, [data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode, data.phoneNumber, data.emailAddress, id]);
      return result;
    } catch (error) {
      console.log("setUserInfo: error = ", error);
      throw error;
    }
  },
};

module.exports = $SQLUser;