const executeQuery = require('../services/database_query.service');

const $SQLUser = {
  async getUserInfo (id) {
    try {
      const query = 'SELECT first_name, last_name, driver_profile_setup, company_profile_setup, truck_profile_setup FROM user_info JOIN users ON users.id = user_info.user_id WHERE users.id = ?';
      const result = await executeQuery(query, [id]);
      const query2 = 'SELECT email FROM users WHERE id = ?';
      const result2 = await executeQuery(query2, [id]);
      const response = {
        email: result2[0].email,
        first_name: result[0].first_name,
        last_name: result[0].last_name,
        driver_profile_setup: result[0].driver_profile_setup,
        company_profile_setup: result[0].company_profile_setup,
        truck_profile_setup: result[0].truck_profile_setup,
      };
      return response;
    } catch (error) {
      console.log("getUserInfo: error = ", error);
      throw error;
    }
  },
  async updateUserInfo (id, data) {
    try {
      const query = 'UPDATE user_info SET first_name = ?, last_name = ?, user_street = ?, user_box = COALESCE(?, ""), user_city = ?, user_state = ?, user_zip = ?, driver_profile_setup = ? WHERE user_id = ?';
      const result = await executeQuery(query, [data.first_name, data.last_name, data.user_street, data.user_box, data.user_city, data.user_state, data.user_zip, data.driver_profile_setup, id]);
      return result;
    } catch (error) {
      console.log("updateUserInfo: error = ", error);
      throw error;
    }
  },
};

module.exports = $SQLUser;